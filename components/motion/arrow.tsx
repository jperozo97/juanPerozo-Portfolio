// Arrow that nudges forward when its parent link (a .group) is hovered or focused.
export function Arrow() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1"
    >
      →
    </span>
  );
}
