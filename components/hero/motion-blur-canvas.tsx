"use client";

import { useEffect, useRef } from "react";
import { paintImage, paintProcedural, TEX_H, TEX_W } from "./scene";

const VERTEX = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

// Directional blur along a vector driven by drift and cursor velocity.
const FRAGMENT = `
precision mediump float;
uniform sampler2D uTex;
uniform vec2 uDir;
uniform vec2 uScale;
uniform vec2 uRes;
uniform float uTime;
varying vec2 vUv;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
  vec2 uv = (vUv - 0.5) * uScale + 0.5;
  vec2 w = vec2(sin(vUv.y * 5.0 + uTime * 0.4), cos(vUv.x * 4.0 + uTime * 0.3)) * 0.008;
  vec3 acc = vec3(0.0);
  float ws = 0.0;
  for (int i = 0; i < 28; i++) {
    float s = float(i) / 27.0 - 0.5;
    float wt = exp(-s * s * 6.0);
    vec2 p = uv + w * uScale + uDir * uScale * s;
    acc += texture2D(uTex, clamp(p, 0.001, 0.999)).rgb * wt;
    ws += wt;
  }
  vec3 col = acc / ws;
  float vig = smoothstep(1.25, 0.25, length(vUv - 0.5));
  col *= mix(0.8, 1.0, vig);
  col += (hash(vUv * uRes + uTime) - 0.5) * 0.05;
  gl_FragColor = vec4(col, 1.0);
}`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh) ?? "shader");
  return sh;
}

// WebGL layer of the hero. Loaded only on the client; if anything fails it
// stays hidden and the CSS gradient behind it remains the background.
export default function MotionBlurCanvas({ photo }: { photo?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const stage = canvas?.parentElement;
    if (!canvas || !stage) return;

    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "high-performance" });
    if (!gl) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const texCanvas = document.createElement("canvas");
    texCanvas.width = TEX_W;
    texCanvas.height = TEX_H;
    const t = texCanvas.getContext("2d")!;
    paintProcedural(t);

    let program: WebGLProgram;
    try {
      program = gl.createProgram()!;
      gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX));
      gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    } catch {
      return;
    }
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const tex = gl.createTexture();
    const upload = () => {
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texCanvas);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    };
    upload();

    const u = {
      dir: gl.getUniformLocation(program, "uDir"),
      scale: gl.getUniformLocation(program, "uScale"),
      res: gl.getUniformLocation(program, "uRes"),
      time: gl.getUniformLocation(program, "uTime"),
    };

    let W = 1;
    let H = 1;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      W = stage.clientWidth;
      H = stage.clientHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      const sa = W / H;
      const ia = TEX_W / TEX_H;
      if (sa > ia) gl.uniform2f(u.scale, 1, ia / sa);
      else gl.uniform2f(u.scale, sa / ia, 1);
      gl.uniform2f(u.res, W, H);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(stage);

    // Cursor velocity becomes blur direction; it decays back to a slow drift.
    const impulse = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };
    let last: { x: number; y: number } | null = null;
    const onMove = (e: PointerEvent) => {
      if (last) {
        impulse.x += ((e.clientX - last.x) / W) * 2.4;
        impulse.y += (-(e.clientY - last.y) / H) * 2.4;
      }
      last = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      last = null;
    };
    if (!reduce) {
      stage.addEventListener("pointermove", onMove, { passive: true });
      stage.addEventListener("pointerleave", onLeave);
    }

    let raf = 0;
    let running = false;
    let prev = performance.now();
    const draw = (now: number) => {
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;
      const time = reduce ? 1.5 : now / 1000;
      vel.x = (vel.x + impulse.x) * Math.exp(-dt * 3.2);
      vel.y = (vel.y + impulse.y) * Math.exp(-dt * 3.2);
      impulse.x = 0;
      impulse.y = 0;
      const drift = reduce ? 0.6 : 1;
      let dx = (0.04 + Math.cos(time * 0.3) * 0.012) * drift + vel.x;
      let dy = (0.012 + Math.sin(time * 0.23) * 0.01) * drift + vel.y;
      const len = Math.hypot(dx, dy);
      if (len > 0.2) {
        dx *= 0.2 / len;
        dy *= 0.2 / len;
      }
      gl.uniform2f(u.dir, dx, dy);
      gl.uniform1f(u.time, time);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      canvas.dataset.ready = "true";
      if (running) raf = requestAnimationFrame(draw);
    };
    const start = () => {
      if (running || reduce) return;
      running = true;
      prev = performance.now();
      raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    // Reduced motion: one still frame. Otherwise animate only while visible.
    if (reduce) draw(performance.now());
    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    io.observe(stage);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    if (photo) {
      const img = new Image();
      img.onload = () => {
        paintImage(t, img);
        upload();
        if (reduce) draw(performance.now());
      };
      img.src = photo;
    }

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [photo]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 size-full opacity-0 transition-opacity duration-700 data-[ready=true]:opacity-100"
    />
  );
}
