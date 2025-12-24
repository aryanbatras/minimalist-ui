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
 * Layers defined by this component:
 *
 *   semantic  → visual intent / tone (primary, secondary, default)
 *   surface   → surface treatment (ghost, outline, link)
 *   size      → physical dimensions (xs → xl)
 *   shape     → geometry (pill, rounded, square, circle)
 *   layout    → layout behavior (block)
 *   override  → escape hatch for direct class injection
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
 * Defined leases:
 *   - children
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
 * Supported native attributes:
 *   - onClick
 *   - disabled
 *   - type
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
  const semantic = layer("semantic");
  const surface  = layer("surface");
  const shadow   = layer("shadow");
  const shape    = layer("shape");
  const size     = layer("size");
  
  // Animation Layers
  const hover    = layer("hover");
  const active   = layer("active");

  // Layout Layers
  const layout   = layer("layout");
  const override = layer("override");

  /* ────────────────────────────────────────────────────────────────────────────
   * DEFAULT FOUNDATION
   * ──────────────────────────────────────────────────────────────────────────── */

  shape("rounded-xs");
  surface("shadow-xl");
  size("px-4 py-2 text-base");
  semantic("bg-black text-white");

  /* ────────────────────────────────────────────────────────────────────────────
   * COMPOSITE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
  // Predefined button patterns for common use cases

  signals.cta && (() => (
    semantic("bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold"),
    size("px-8 py-4 text-lg"),
    shape("rounded-full"),
    shadow("shadow-lg shadow-purple-500/25"),
    hover("hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-200"),
    active("active:scale-95")
  ))(), delete signals.cta;

  signals.destructive && (() => (
    semantic("bg-red-600 text-white border-2 border-red-700"),
    hover("hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-200"),
    active("active:scale-95 active:bg-red-800"),
    shape("rounded-lg")
  ))(), delete signals.destructive;

  signals.minimal && (() => (
    semantic("bg-gray-100 text-gray-800 border border-gray-300"),
    hover("hover:bg-gray-200 hover:border-gray-400 transition-all duration-200"),
    active("active:bg-gray-300"),
    shape("rounded-md"),
    shadow("shadow-sm")
  ))(), delete signals.minimal;

  signals.social && (() => (
    semantic("bg-white text-gray-700 border border-gray-200"),
    hover("hover:bg-gray-50 hover:shadow-md transition-all duration-200"),
    active("active:bg-gray-100"),
    shape("rounded-full"),
    size("px-4 py-4")
  ))(), delete signals.social;

  signals.fab && (() => (
    semantic("bg-blue-500 text-white"),
    hover("hover:bg-blue-600 hover:scale-110 transition-all duration-200"),
    active("active:scale-95"),
    shape("rounded-full"),
    size("px-4 py-4"),
    shadow("shadow-lg shadow-blue-500/30")
  ))(), delete signals.fab;

  signals.premium && (() => (
    semantic("bg-gradient-to-r from-yellow-400 to-orange-500 text-white"),
    surface("border-2 border-yellow-300"),
    hover("hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/40 transition-all duration-300"),
    active("active:scale-95"),
    shape("rounded-lg")
  ))(), delete signals.premium;

  signals.ghost && (() => (
    semantic("text-gray-600 hover:text-gray-800"),
    surface("bg-transparent hover:bg-gray-100"),
    hover("transition-all duration-200"),
    active("active:bg-gray-200"),
    shape("rounded-md")
  ))(), delete signals.ghost;

  /* ────────────────────────────────────────────────────────────────────────────
   * STRUCTURAL SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.primary   && semantic("bg-blue-500 text-neutral-100", "primary");
  signals.secondary && semantic("bg-pink-800 text-neutral-100", "secondary");
  signals.success && semantic("bg-green-500 text-white", "success");
  signals.warning && semantic("bg-yellow-500 text-black", "warning");
  signals.danger  && semantic("bg-red-500 text-white", "danger");
  signals.info    && semantic("bg-cyan-500 text-white", "info");

  signals.xs && size("px-2 py-1 text-xs", "xs");
  signals.sm && size("px-3 py-1.5 text-sm", "sm");
  signals.md && size("px-4 py-2 text-base", "md");
  signals.lg && size("px-6 py-3 text-lg", "lg");
  signals.xl && size("px-8 py-4 text-xl", "xl");

  signals.pill   && shape("rounded-full", "pill");
  signals.rounded&& shape("rounded-lg", "rounded");
  signals.square && shape("rounded-none", "square");
  signals.circle && shape("rounded-full aspect-square p-0", "circle");

  signals.ghost   && surface("bg-transparent", "ghost");
  signals.outline && surface("border border-current", "outline");
  signals.link    && surface("bg-transparent underline p-0", "link");
  
  // Advanced surface treatments
  signals.glass           && surface("bg-white/10 backdrop-blur-md border border-white/20", "glass");
  signals.gradient        && surface("bg-gradient-to-r from-blue-500 to-purple-600", "gradient");
  signals.gradientRadial  && surface("bg-gradient-radial from-pink-400 to-purple-600", "gradientRadial");
  signals.textured        && surface("bg-gradient-to-br from-gray-100 to-gray-200", "textured");
  signals.neon            && surface("bg-black border-2 border-cyan-400 shadow-lg shadow-cyan-400/50", "neon");
  signals.metallic        && surface("bg-gradient-to-br from-gray-300 to-gray-500 shadow-inner", "metallic");
  signals.holographic     && surface("bg-gradient-to-r from-purple-400 via-pink-500 to-red-500", "holographic");
  signals.matte           && surface("bg-gray-800 shadow-none", "matte");
  signals.glossy          && surface("bg-gradient-to-b from-white/20 to-transparent", "glossy");

  signals.block   && layout("w-full", "block");
  signals.inline  && layout("inline-flex", "inline");
  signals.center  && layout("mx-auto", "center");

  /* ────────────────────────────────────────────────────────────────────────────
   * ANIMATION SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

    // Hover animations
  signals.hoverEnlarge && hover("hover:scale-105 transition-transform duration-200", "hoverEnlarge");
  signals.hoverShrink && hover("hover:scale-95 transition-transform duration-200", "hoverShrink");
  signals.hoverLift && hover("hover:-translate-y-0.5 transition-all duration-200", "hoverLift");
  signals.hoverGlow && hover("hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300", "hoverGlow");
  signals.hoverBounce && hover("hover:animate-bounce", "hoverBounce");
  signals.hoverRotate && hover("hover:rotate-3 transition-transform duration-200", "hoverRotate");
  signals.hoverFlip && hover("hover:rotate-y-180 transition-transform duration-500 preserve-3d", "hoverFlip");
  signals.hoverShake && hover("hover:animate-pulse", "hoverShake");
  signals.hoverSlide && hover("hover:translate-x-1 transition-transform duration-200", "hoverSlide");
  signals.hoverFade && hover("hover:opacity-80 transition-opacity duration-200", "hoverFade");
  signals.hoverBorder && hover("hover:border-2 hover:border-blue-400 transition-all duration-200", "hoverBorder");

  // Active animations
  signals.activeShrink && active("active:scale-95 transition-transform", "activeShrink");
  signals.activePulse && active("active:animate-pulse", "activePulse");
  signals.activeDepth && active("active:translate-y-0.5", "activeDepth");
  signals.activeRipple && active("active:ring-4 active:ring-blue-400/50", "activeRipple");
  signals.activeExplode && active("active:scale-110 active:shadow-2xl", "activeExplode");
  signals.activeSlide && active("active:translate-y-0.5", "activeSlide");
  signals.activeSpin && active("active:animate-spin", "activeSpin");
  signals.activeFlash && active("active:bg-white active:text-black transition-colors duration-100", "activeFlash");
  signals.activeGlow && active("active:shadow-lg active:shadow-green-400/50", "activeGlow");

  /* ────────────────────────────────────────────────────────────────────────────
   * ESCAPE HATCH
   * ──────────────────────────────────────────────────────────────────────────── */

  signals.className && override(signals.className, "className");

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
