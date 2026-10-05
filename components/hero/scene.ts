// Source image for the hero: a procedural "long exposure" scene, or a photo.
// Small on purpose: the shader blurs it, and a smaller texture paints and samples faster.
export const TEX_W = 1024;
export const TEX_H = 640;

export function paintProcedural(t: CanvasRenderingContext2D) {
  const g = t.createLinearGradient(0, 0, TEX_W, 0);
  g.addColorStop(0, "#2F6C80");
  g.addColorStop(0.35, "#5D95A8");
  g.addColorStop(0.7, "#B58FA0");
  g.addColorStop(1, "#8E5C6B");
  t.fillStyle = g;
  t.fillRect(0, 0, TEX_W, TEX_H);

  const glow = (x: number, y: number, r: number, c0: string, c1: string) => {
    const rg = t.createRadialGradient(x, y, 0, x, y, r);
    rg.addColorStop(0, c0);
    rg.addColorStop(1, c1);
    t.fillStyle = rg;
    t.fillRect(x - r, y - r, r * 2, r * 2);
  };
  glow(TEX_W * 0.62, TEX_H * 0.42, TEX_W * 0.34, "rgba(255,170,70,0.95)", "rgba(255,120,40,0)");
  glow(TEX_W * 0.55, TEX_H * 0.3, TEX_W * 0.17, "rgba(255,230,160,0.95)", "rgba(255,226,150,0)");
  glow(TEX_W * 0.86, TEX_H * 0.78, TEX_W * 0.22, "rgba(255,150,90,0.55)", "rgba(255,150,90,0)");

  // Dark silhouette shapes that the blur smears into streaks. Soft edges come from
  // radial gradients; canvas shadowBlur looks the same but costs hundreds of ms.
  const softEllipse = (x: number, y: number, rx: number, ry: number, angle: number, color: string, alpha: number) => {
    t.save();
    t.translate(x, y);
    t.rotate(angle);
    t.scale(1, ry / rx);
    const rg = t.createRadialGradient(0, 0, 0, 0, 0, rx * 1.35);
    rg.addColorStop(0, `rgba(${color},${alpha})`);
    rg.addColorStop(0.62, `rgba(${color},${alpha})`);
    rg.addColorStop(1, `rgba(${color},0)`);
    t.fillStyle = rg;
    t.fillRect(-rx * 1.35, -rx * 1.35, rx * 2.7, rx * 2.7);
    t.restore();
  };
  softEllipse(TEX_W * 0.62, TEX_H * 0.74, TEX_W * 0.28, TEX_H * 0.2, -0.38, "24,12,10", 0.94);
  softEllipse(TEX_W * 0.47, TEX_H * 0.2, TEX_W * 0.075, TEX_W * 0.075, 0, "30,14,12", 0.92);
  glow(TEX_W * 0.56, TEX_H * 0.56, TEX_W * 0.2, "rgba(255,140,50,0.7)", "rgba(255,140,50,0)");
}

// Cover-fit the image into the texture.
export function paintImage(t: CanvasRenderingContext2D, img: HTMLImageElement) {
  const ir = img.width / img.height;
  const tr = TEX_W / TEX_H;
  let sw, sh, sx, sy;
  if (ir > tr) {
    sh = img.height;
    sw = sh * tr;
    sx = (img.width - sw) / 2;
    sy = 0;
  } else {
    sw = img.width;
    sh = sw / tr;
    sx = 0;
    sy = (img.height - sh) / 2;
  }
  t.clearRect(0, 0, TEX_W, TEX_H);
  t.drawImage(img, sx, sy, sw, sh, 0, 0, TEX_W, TEX_H);
}
