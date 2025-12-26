export function Button(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
  
   * COMPOSITE: cta, neumorphism, ghost
   * INTENT: red/green/blue | xs-sm-md-lg-xl | square/rounded/pill/circle | block/inline/center | innerShadow
   * BEHAVIOR: hoverEnlarge/hoverShrink/hoverLift/hoverFade/hoverBorder | activeShrink/activeRipple/activeExplode/activeSlide
   * NATIVE: children, disabled, onClick, type | ESCAPE: className/class
   * HIERARCHY: Composite > Intent > Native > Escape
   * LAYERS: shadow→shape→color→size→text→hover→active→layout→animation
   * RULES: No warnings, deterministic, signals delete after use, spread native props to button
 
   * ────────────────────────────────────────────────────────────────────────────
   * CONTRACT TOOLS
   * ──────────────────────────────────────────────────────────────────────────── */

  const [signals, signalLayers, leases, spreads] = [{ ...contract }, {}, {}, {}];
  
  const layer = (name) => (className, signalKey) =>
    (signalLayers[name] = signalLayers[name] || [],
     signalKey && signals[signalKey]
       ? (signalLayers[name][0] = className, delete signals[signalKey])
       : !signalKey && (signalLayers[name][0] = className));
  
  const lease = (name, key = name) =>
    signals[key] && (leases[name] = signals[key], delete signals[key]);
  
  const spread = (name, key = name) =>
    signals[key] && (spreads[name] = signals[key], delete signals[key]);

  /* ────────────────────────────────────────────────────────────────────────────
   * LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */

  const shadow      = layer("shadow");      shadow("shadow-xs shadow-black/50");
  const shape       = layer("shape");       shape("rounded-xs");
  const color       = layer("color");       color("bg-gray-800 text-white");
  const size        = layer("size");        size("px-4 py-2");
  const text        = layer("text");        text("text-xs font-light font-sans");
  const hover       = layer("hover");       hover("hover:scale-105 hover:shadow-md");
  const active      = layer("active");      active("active:scale-90 active:shadow-md");
  const layout      = layer("layout");      layout("flex items-center justify-center");
  const animation   = layer("animation");   animation("transition-all duration-300 cursor-pointer");
  const border      = layer("border");      border("border-0");
  const escapehatch = layer("escapehatch");

  /* ────────────────────────────────────────────────────────────────────────────
   * COMPOSITE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.cta && (() => (
    color("bg-blue-600/95 text-white"),
    shadow("shadow-xs shadow-blue-500/40"),
    hover("hover:scale-105 hover:shadow-md"),
    active("active:scale-90 active:shadow-md")
  ))(), delete signals.cta;

  signals.neumorphism && (() => (
    shadow("shadow-inner"),
    color("bg-linear-to-r from-gray-300 to-gray-200 text-gray-800"),
    hover("hover:scale-105 hover:bg-white/50 hover:shadow-inner hover:shadow-gray-500/30"),
    active("active:scale-95 active:bg-white/50 active:shadow-inner active:shadow-gray-500/30"),
    animation("transition-all duration-700 cursor-pointer"),
    shape("rounded-md")
  ))(), delete signals.neumorphism;

  signals.ghost && (() => (
    color("bg-transparent text-gray-800"),
    hover("hover:scale-110 hover:bg-gray-100/50 hover:text-gray-900"),
    active("active:scale-95 active:bg-gray-100/75 active:text-gray-900"),
    animation("transition-all duration-500 cursor-pointer"),
    shadow("shadow-none"),
    shape("rounded-full")
  ))(), delete signals.ghost;

  /* ────────────────────────────────────────────────────────────────────────────
   * INTENT SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.red    && color("bg-red-600 text-white", "red");
  signals.green  && color("bg-green-500 text-white", "green");
  signals.blue   && color("bg-blue-500/90 text-neutral-100", "blue");

  signals.xs && size("px-2 py-1 text-xs", "xs");
  signals.sm && size("px-3 py-1.5 text-sm", "sm");
  signals.md && size("px-4 py-2 text-base", "md");
  signals.lg && size("px-6 py-3 text-lg", "lg");
  signals.xl && size("px-8 py-4 text-xl", "xl");

  signals.square && shape("rounded-none", "square");
  signals.rounded&& shape("rounded-lg", "rounded");
  signals.pill   && shape("rounded-full", "pill");
  signals.circle && shape("rounded-full aspect-square p-0", "circle");

  signals.block   && layout("w-full", "block");
  signals.inline  && layout("inline-flex", "inline");
  signals.center  && layout("mx-auto", "center");

  signals.innerShadow && shadow("shadow-inner", "innerShadow");
  signals.noShadow && shadow("shadow-none", "noShadow");

  signals.border && border("border border-gray-800", "border");

  /* ────────────────────────────────────────────────────────────────────────────
   * BEHAVIOR SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.hoverEnlarge && hover("hover:scale-105", "hoverEnlarge");
  signals.hoverShrink  && hover("hover:scale-95", "hoverShrink");
  signals.hoverLift    && hover("hover:-translate-y-0.5", "hoverLift");
  signals.hoverFade    && hover("hover:opacity-40", "hoverFade");
  signals.hoverBorder  && hover("hover:border hover:border-black", "hoverBorder");
  signals.hoverNone    && hover("hover:scale-100 hover:opacity-100", "hoverNone");

  signals.activeShrink   && active("active:scale-95 transition-transform", "activeShrink");
  signals.activeRipple   && active("active:ring-4 active:ring-black active:scale-90", "activeRipple");
  signals.activeExplode  && active("active:scale-110 active:ring-8 active:ring-black ", "activeExplode");
  signals.activeSlide    && active("active:translate-x-0.5", "activeSlide");
  signals.activeNone     && active("active:scale-100 active:opacity-100 ", "activeNone");

  /* ────────────────────────────────────────────────────────────────────────────
   * ESCAPE HATCH
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.className && escapehatch(signals.className, "className");
  signals.class && escapehatch(signals.class, "class");

  /* ────────────────────────────────────────────────────────────────────────────
   * NATIVE ATTRIBUTES
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.children && lease("children");

  signals.disabled && spread("disabled");
  signals.onClick  && spread("onClick");
  signals.type     && spread("type");

  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */

  return (
    <button
      {...spreads}
      className={Object.values(signalLayers)
        .map(layer => layer[0])
        .filter(Boolean)
        .join(" ")}
    >
      {leases.children}
    </button>
  );
}