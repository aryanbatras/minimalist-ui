export function ProgressBar(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   *
   * INTENT:
   *   - value (0–100)
   *   - Size: xs, sm, md, lg, xl
   *   - Color: primary, success, danger, neutral
   *   - Shape: square
   *
   * STYLE:
   *   - inline, block, centered
   *   - transparent
   *
   * NATIVE:
   *   - max
   *
   * ESCAPE:
   *   - class / className
   *
   * HIERARCHY:
   *   Intent > Style > Native > Escape
   *
   * LAYERS:
   *   base → size → color → shape → layout → escape
   *
   * ──────────────────────────────────────────────────────────────────────────── */

  const [signals, signalLayers, leases, spreads] = [{ ...contract }, {}, {}, {}];

  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT TOOLS
   * ──────────────────────────────────────────────────────────────────────────── */

  const layer = (name) => (className, key) =>
    (signalLayers[name] ||= [],
     key && signals[key]
       ? (signalLayers[name][0] = className, delete signals[key])
       : !key && (signalLayers[name][0] = className));

  const lease = (name, key = name) =>
    signals[key] !== undefined &&
    (leases[name] = signals[key], delete signals[key]);

  const spread = (name, key = name) =>
    signals[key] !== undefined &&
    (spreads[name] = signals[key], delete signals[key]);

  /* ────────────────────────────────────────────────────────────────────────────
   * BASE LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */

  const base   = layer("base");
  const size   = layer("size");
  const color  = layer("color");
  const shape  = layer("shape");
  const layout = layer("layout");
  const escape = layer("escape");

  base(
    "[&::-webkit-progress-bar]:transition-all " +
    "[&::-webkit-progress-value]:transition-all " +
    "[&::-moz-progress-bar]:transition-all"
  );

  shape(
    "[&::-webkit-progress-bar]:rounded-full " +
    "[&::-webkit-progress-value]:rounded-full " +
    "[&::-moz-progress-bar]:rounded-full"
  );

  color(
    "[&::-webkit-progress-bar]:bg-slate-300 " +
    "[&::-webkit-progress-value]:bg-violet-400 " +
    "[&::-moz-progress-bar]:bg-violet-400"
  );
  
  size("h-2 w-32");
  
  layout("block");

  /* ────────────────────────────────────────────────────────────────────────────
   * INTENT — SIZE
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.sm && size("h-1 w-16", "sm");
  signals.md && size("h-2 w-32", "md");
  signals.lg && size("h-3 w-48", "lg");
  signals.xl && size("h-4 w-64", "xl");
  signals.responsive && size("h-2 w-full", "responsive");

  /* ────────────────────────────────────────────────────────────────────────────
   * INTENT — SHAPE
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.square  && shape(
    "[&::-webkit-progress-bar]:rounded-none [&::-webkit-progress-value]:rounded-none [&::-moz-progress-bar]:rounded-none",
    "square"
  );

  /* ────────────────────────────────────────────────────────────────────────────
   * INTENT — COLOR
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.primary && color(
    "[&::-webkit-progress-bar]:bg-slate-300 [&::-moz-progress-bar]:bg-blue-500 [&::-webkit-progress-value]:bg-blue-500",
    "primary"
  );

  signals.success && color(
    "[&::-webkit-progress-bar]:bg-slate-300 [&::-moz-progress-bar]:bg-green-500 [&::-webkit-progress-value]:bg-green-500",
    "success"
  );

  signals.danger && color(
    "[&::-webkit-progress-bar]:bg-slate-300 [&::-moz-progress-bar]:bg-red-500 [&::-webkit-progress-value]:bg-red-500",
    "danger"
  );

  signals.neutral && color(
    "[&::-webkit-progress-bar]:bg-slate-300 [&::-moz-progress-bar]:bg-gray-500 [&::-webkit-progress-value]:bg-gray-500",
    "neutral"
  );

  /* ────────────────────────────────────────────────────────────────────────────
   * STYLE
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.inline   && layout("inline-block", "inline");
  signals.block    && layout("block", "block");
  signals.centered && layout("mx-auto", "centered");

  signals.transparent && color(
    "[&::-webkit-progress-bar]:bg-transparent",
    "transparent"
  );

  /* ────────────────────────────────────────────────────────────────────────────
   * DATA
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.value && lease("value");
  signals.max && spread("max");

  const value =
    leases.value !== undefined
      ? Math.min(100, Math.max(0, Number(leases.value)))
      : 0;

  /* ────────────────────────────────────────────────────────────────────────────
   * ESCAPE
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.class     && escape(signals.class, "class");
  signals.className && escape(signals.className, "className");

  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */

  return (
    <progress
      value={value}
      max={spreads.max ?? 100}
      className={Object.values(signalLayers)
        .map(l => l[0])
        .filter(Boolean)
        .join(" ")}
    />
  );
}
