export function Spinner(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   * 
   * Spinner - Animated loading indicator with customizable appearance
   *
   * Foundation: CSS animated div with spinning border
   *
   * Signals:
   *   Size: xs, sm, md, lg, xl
   *   Color: light, primary, danger
   *   Border: thin, thick
   *   Animation: spinSlow, spinFast, pause
   *   Layout: inline, block, centered
   *   Visibility: transparent
   *
   * Data:
   *   ariaLabel - Accessibility label for screen readers
   *
   * Defaults: md, inline, spin
   *
   * Usage:
   * <Spinner />
   * <Spinner lg primary />
   * <Spinner sm light transparent />
   * 
   * ──────────────────────────────────────────────────────────────────────────── */

  const [inputSignal, layerSignal, dataSignal] = [{ ...contract }, {}, {}];

  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT TOOLS
   * ──────────────────────────────────────────────────────────────────────────── */

  const layer = (name) => (className) =>
    (layerSignal[name] ||= [],
     (layerSignal[name][0] = className));

  const data = (name, key = name) =>
    inputSignal[key] && (dataSignal[name] = inputSignal[key]);

  const classes = (layers = {}) =>
    Object.values(layers).map(l => l[0]).filter(Boolean).join(" ");

  /* ────────────────────────────────────────────────────────────────────────────
   * BASE LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */
    let spinner;
       (() => 
        (
            spinner = {
                layout:layer("layout"),
                size:layer("size"),       
                color:layer("color"),      
                border:layer("border"),     
                animation:layer("animation"),  
                visibility:layer("visibility") 
            }
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * DEFAULTS
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (
                layout("inline-flex items-center justify-center"),
                color("border-black/20 border-t-black"),
                border("border-2 rounded-full"),
                animation("animate-spin"),
                visibility("opacity-100"),
                size("w-6 h-6")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * SIZE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
  (() => 
        (
              inputSignal.xs && size("w-3 h-3 border"),
              inputSignal.sm && size("w-4 h-4 border-2"),
              inputSignal.md && size("w-6 h-6 border-2"),
              inputSignal.lg && size("w-8 h-8 border-4"),
              inputSignal.xl && size("w-12 h-12 border-4")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * COLOR SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
  (() => 
        (
           
              inputSignal.light && color("border-white/30 border-t-white"),
              inputSignal.primary && color("border-blue-600/30 border-t-blue-500"),
              inputSignal.danger && color("border-red-600/30 border-t-red-500")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * BORDER SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
  (() => 
        (
           
              inputSignal.thin && border("border rounded-full"),
              inputSignal.thick && border("border-4 rounded-full")
        )
    )(),
   /* ────────────────────────────────────────────────────────────────────────────
   * ANIMATION SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
  (() => 
        (
           
              inputSignal.spinSlow && animation("animate-spin [animation-duration:1.5s]"),
              inputSignal.spinFast && animation("animate-spin [animation-duration:.6s]"),
              inputSignal.pause && animation("animate-spin [animation-play-state:paused]")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * LAYOUT SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
  (() => 
        (
              inputSignal.inline && layout("inline-flex"),
              inputSignal.block && layout("block mx-auto"),
              inputSignal.centered && layout("flex mx-auto")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * VISIBILITY SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
  (() => 
        (
              inputSignal.transparent && visibility("opacity-25")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * DATA
   * ──────────────────────────────────────────────────────────────────────────── */
  (() => 
        (
            inputSignal.ariaLabel && data("ariaLabel")
        )
    )();
  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */
  return (
    <div
      role="status"
      aria-label={dataSignal.ariaLabel || "loading"}
      className={classes(layerSignal)}
    />
  );
}
