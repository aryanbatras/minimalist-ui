export function Button(contract = {}) {
  const signals = { ...contract };
  const signalLayers = {};
  const leases = {};
  const spreads = {};

  const layer = (name) => (className, signalKey) =>
    (signalLayers[name] = signalLayers[name] || [], 
     signalKey && signals[signalKey]
       ? (signalLayers[name][0] = className, delete signals[signalKey])
       : !signalKey && (signalLayers[name][0] = className));

  const lease = (name, key = name) =>
    signals[key] && (leases[name] = signals[key], delete signals[key]);

  const spread = (name, key = name) =>
    signals[key] && (spreads[name] = signals[key], delete signals[key]);

  const semantic   = layer("semantic");
  const surface    = layer("surface");
  const size       = layer("size");
  const shape      = layer("shape");
  const layout     = layer("layout");
  const override   = layer("override");

  shape("rounded-xs");
  surface("shadow-xl");
  size("px-4 py-2 text-base");
  semantic("bg-black text-white");

  signals.primary   && semantic("bg-blue-500 text-neutral-100", "primary");
  signals.secondary && semantic("bg-pink-800 text-neutral-100", "secondary");

  signals.xs        && size("px-2 py-1 text-xs", "xs");
  signals.sm        && size("px-3 py-1.5 text-sm", "sm");
  signals.md        && size("px-4 py-2 text-base", "md");
  signals.lg        && size("px-6 py-3 text-lg", "lg");
  signals.xl        && size("px-8 py-4 text-xl", "xl");

  signals.pill      && shape("rounded-full", "pill");
  signals.rounded   && shape("rounded-lg", "rounded");
  signals.square    && shape("rounded-none", "square");
  signals.circle    && shape("rounded-full aspect-square p-0", "circle");

  signals.ghost     && surface("bg-transparent", "ghost");
  signals.outline   && surface("border border-current", "outline");
  signals.link      && surface("bg-transparent underline p-0", "link");

  signals.block     && layout("w-full", "block");

  signals.className && override(signals.className, "className");
    
  signals.home && (() => (
    semantic("bg-pink-800 text-neutral-100"), 
    size("px-6 py-3 text-lg"), 
    shape("rounded-full"), 
    layout("w-full")
  ))(), delete signals.home;

  signals.cta && (() => (
    semantic("bg-blue-600 text-white"),
    size("px-8 py-4 text-xl"),
    shape("rounded-lg")
  ))(), delete signals.cta;

  signals.children  && lease("children");

  signals.disabled  && spread("disabled");
  signals.onClick   && spread("onClick");
  signals.type      && spread("type");

  return (
    <button
      {...spreads}
      className={Object.values(signalLayers)
        .map(l => l[0])
        .filter(Boolean)
        .join(" ")}
    >
      {leases.children}
    </button>
  );
}
