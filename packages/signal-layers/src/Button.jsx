/**
 * ──────────────────────────────────────────────────────────────────────────────
 * Button Component — Signal Contract & Reference Implementation
 * ──────────────────────────────────────────────────────────────────────────────
 *
 * This file defines the complete behavioral and structural contract of <Button />.
 *
 * The Button component is implemented as a signal-resolved system, where every
 * prop represents an explicit and predictable intention expressed by the caller.
 *
 * This file serves three purposes:
 *   1. Defines the public contract of the Button component
 *   2. Documents how signals are resolved and composed
 *   3. Acts as the reference pattern for building future components
 *
 * The implementation below intentionally avoids indirection, configuration
 * objects, and implicit behavior. All behavior is visible and editable here.
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * BUTTON CONTRACT
 * ──────────────────────────────────────────────────────────────────────────────
 *
 * The Button component accepts a single object argument called the "contract".
 *
 *   export function Button(contract = {})
 *
 * The contract may contain the following categories of signals:
 *
 *   1. Structural Signals
 *      - Influence visual identity and layout
 *      - Mutually exclusive within defined groups (layers)
 *
 *   2. Content Signals
 *      - Provide renderable content
 *      - Preserved verbatim and never interpreted as styling
 *
 *   3. Native Attribute Signals
 *      - Passed directly to the underlying <button> element
 *      - Maintain full HTML and accessibility compatibility
 *
 * Every signal is:
 *   - Optional
 *   - Processed exactly once
 *   - Deterministically resolved
 *
 * Unknown or unused signals are intentionally ignored.
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * STRUCTURAL SIGNAL GROUPS (LAYERS)
 * ──────────────────────────────────────────────────────────────────────────────
 *
 * Structural signals are organized into mutually exclusive groups called "layers".
 * 
 * Resolution Rules:
 *   - Only one signal may win per layer
 *   - If multiple signals from the same layer are provided:
 *       → The last processed signal wins
 *       → No warnings are emitted
 *
 * This guarantees deterministic output without runtime validation.
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * CONTENT SIGNALS (LEASES)
 * ──────────────────────────────────────────────────────────────────────────────
 *
 * Content signals represent renderable data that must be preserved verbatim.
 *
 * Leased values:
 *   - Are removed from the signal pool
 *   - Do not participate in class resolution
 *   - Are rendered explicitly in JSX
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * NATIVE ATTRIBUTE SIGNALS (SPREADS)
 * ──────────────────────────────────────────────────────────────────────────────
 *
 * Native signals are forwarded directly to the <button> element.
 *
 * These signals:
 *   - Are removed from the signal pool
 *   - Are spread without transformation
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * EXTENSION GUARANTEES
 * ──────────────────────────────────────────────────────────────────────────────
 *
 * Developers may safely:
 *   - Add new layers
 *   - Add new structural signals
 *   - Define composite signals (presets)
 *   - Modify defaults
 *   - Remove unused signals
 *
 * All changes remain local to this file and do not affect other components.
 *
 * ──────────────────────────────────────────────────────────────────────────────
 */

export function Button(contract = {}) {

  /* ────────────────────────────────────────────────────────────────────────────
   * INTERNAL STATE
   * ──────────────────────────────────────────────────────────────────────────── */

  const signalLayers = {}; // Stores resolved classes per layer
  const leases = {};      // Stores renderable content
  const spreads = {};     // Stores native HTML attributes

  /**
   * Clone the incoming contract to ensure:
   *   - Signals can be consumed destructively
   *   - Each signal is processed exactly once
   */
  const signals = { ...contract };

  /* ────────────────────────────────────────────────────────────────────────────
   * HELPERS
   * ──────────────────────────────────────────────────────────────────────────── */

  /**
   * layer(name)
   *
   * Creates a resolver for a mutually exclusive signal group.
   *
   * Behavior:
   *   - Each layer stores exactly one resolved class
   *   - If signalKey is provided and present:
   *       → className is applied
   *       → signal is deleted
   *   - If signalKey is omitted:
   *       → className is applied unconditionally (default)
   */
  const layer = (name) => (className, signalKey) =>
    (signalLayers[name] = signalLayers[name] || [],
     signalKey && signals[signalKey]
       ? (signalLayers[name][0] = className, delete signals[signalKey])
       : !signalKey && (signalLayers[name][0] = className));

  /**
   * lease(name, key)
   *
   * Extracts content from the contract for rendering.
   */
  const lease = (name, key = name) =>
    signals[key] && (leases[name] = signals[key], delete signals[key]);

  /**
   * spread(name, key)
   *
   * Extracts native attributes for direct forwarding.
   */
  const spread = (name, key = name) =>
    signals[key] && (spreads[name] = signals[key], delete signals[key]);

  /* ────────────────────────────────────────────────────────────────────────────
   * LAYER DEFINITIONS
   * ──────────────────────────────────────────────────────────────────────────── */

  // Essential Layers
  const shadow   = layer("shadow");
  const shape    = layer("shape");
  const color    = layer("color");
  const size     = layer("size");
  const text     = layer("text");

  // Animation Layers
  const hover    = layer("hover");
  const active   = layer("active");
  const animation = layer("animation");

  // Layout Layers
  const layout   = layer("layout");
  const override = layer("override");

  // Escape hatch
  const escapehatch = layer("escapehatch");
  
  /* ────────────────────────────────────────────────────────────────────────────
   * DEFAULT FOR EACH LAYER
   * ──────────────────────────────────────────────────────────────────────────── */
 
  color("bg-gray-800 text-white");
  shadow("shadow-xs shadow-black/50");
  shape("rounded-xs"); 
  size("px-4 py-2");
  text("text-xs font-light font-sans");
  
  hover("hover:scale-105 hover:shadow-md");
  active("active:scale-90 active:shadow-md");
  animation("transition-all duration-300 cursor-pointer");

  layout("flex items-center justify-center");

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
   * STRUCTURAL SIGNALS
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

  /* ────────────────────────────────────────────────────────────────────────────
   * ANIMATION SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

    // Hover animations
  signals.hoverEnlarge && hover("hover:scale-105", "hoverEnlarge");
  signals.hoverShrink && hover("hover:scale-95", "hoverShrink");
  signals.hoverLift && hover("hover:-translate-y-0.5", "hoverLift");
  signals.hoverFade && hover("hover:opacity-40", "hoverFade");
  signals.hoverBorder && hover("hover:border hover:border-black", "hoverBorder");

  // Active animations
  signals.activeShrink && active("active:scale-95 transition-transform", "activeShrink");
  signals.activeRipple && active("active:ring-4 active:ring-black active:scale-90", "activeRipple");
  signals.activeExplode && active("active:scale-110 active:ring-8 active:ring-black ", "activeExplode");
  signals.activeSlide && active("active:translate-x-0.5", "activeSlide");

  /* ────────────────────────────────────────────────────────────────────────────
   * ESCAPE HATCH
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.className && override(signals.className, "className");
  signals.class && override(signals.class, "class");

  /* ────────────────────────────────────────────────────────────────────────────
   * CONTENT & NATIVE ATTRIBUTES
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

