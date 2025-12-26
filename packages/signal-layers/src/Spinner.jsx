export function Spinner(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   *
   * INTENT:
   *   - Size: xs, sm, md, lg, xl
   *   - Color: light, dark, primary, danger
   *   - Thickness: thin, normal, thick
   *
   * BEHAVIOR:
   *   - spinSlow, spinNormal, spinFast
   *   - pause
   *
   * STYLE:
   *   - inline, block, centered
   *   - transparent
   *
   * NATIVE:
   *   - ariaLabel
   *
   * ESCAPE:
   *   - class / className
   *
   * HIERARCHY:
   *   Intent > Behavior > Style > Native > Escape
   *
   * LAYERS:
   *   layout → size → color → border → animation → visibility → escape
   *
   * ──────────────────────────────────────────────────────────────────────────── */

  const [signals, signalLayers, leases] = [{ ...contract }, {}, {}];

  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT TOOLS
   * ──────────────────────────────────────────────────────────────────────────── */

  const layer = (name) => (className) =>
    (signalLayers[name] ||= [],
     (signalLayers[name][0] = className));

  const lease = (name, key = name) =>
    signals[key] && (leases[name] = signals[key]);

  /* ────────────────────────────────────────────────────────────────────────────
   * BASE LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */

  const layout     = layer("layout");     layout("inline-flex items-center justify-center");
  const size       = layer("size");       size("w-6 h-6");
  const color      = layer("color");      color("border-black/20 border-t-black");
  const border     = layer("border");     border("border-2 rounded-full");
  const animation  = layer("animation");  animation("animate-spin");
  const visibility = layer("visibility"); visibility("opacity-100");
  const escape     = layer("escape");

  /* ────────────────────────────────────────────────────────────────────────────
   * INTENT — SIZE
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.xs && size("w-3 h-3 border");
  signals.sm && size("w-4 h-4 border-2");
  signals.md && size("w-6 h-6 border-2");
  signals.lg && size("w-8 h-8 border-4");
  signals.xl && size("w-12 h-12 border-4");

  /* ────────────────────────────────────────────────────────────────────────────
   * INTENT — COLOR
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.light   && color("border-white/30 border-t-white");
  signals.primary && color("border-blue-600/30 border-t-blue-500");
  signals.danger  && color("border-red-600/30 border-t-red-500");

  /* ────────────────────────────────────────────────────────────────────────────
   * INTENT — THICKNESS
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.thin   && border("border rounded-full");
  signals.thick  && border("border-4 rounded-full");

  /* ────────────────────────────────────────────────────────────────────────────
   * BEHAVIOR
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.spinSlow   && animation("animate-spin [animation-duration:1.5s]");
  signals.spinFast   && animation("animate-spin [animation-duration:.6s]");

  /* ────────────────────────────────────────────────────────────────────────────
   * STYLE
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.inline   && layout("inline-flex");
  signals.block    && layout("block mx-auto");
  signals.centered && layout("flex mx-auto");

  signals.transparent && visibility("opacity-25");

  /* ────────────────────────────────────────────────────────────────────────────
   * NATIVE
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.ariaLabel && lease("ariaLabel");

  /* ────────────────────────────────────────────────────────────────────────────
   * ESCAPE HATCH
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.class     && escape(signals.class);
  signals.className && escape(signals.className);

  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */

  return (
    <div
      role="status"
      aria-label={leases.ariaLabel || "loading"}
      className={Object.values(signalLayers)
        .map(l => l[0])
        .filter(Boolean)
        .join(" ")}
    />
  );
}
