import {Button} from "./Button";

export function Card(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   * LAYERS: base, layout, spacing, border, shadow, hover, animation, escape
   * SCOPED LAYERS: 
   *   - image: base, size, aspect
   *   - title: base, size, layout
   *   - description: base, size, layout
   *   - button: base
   * SIGNALS:
   *   - Size: xs, sm, md, lg, xl
   *   - Alignment: centered, rightAligned, leftAligned
   *   - Image: imageCircle, imageLandscape
   *   - Style: transparent
   *   - Hover: ineractive
   * LEASES: image, imageName, title, description, buttonLabel
   * SPREADS: onButtonClick
   * ──────────────────────────────────────────────────────────────────────────── */

    const [signals, signalLayers, leases, spreads] = [{ ...contract }, {}, {}, {}];

  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT TOOLS
   * ──────────────────────────────────────────────────────────────────────────── */

    const layer = (name, scope = "card") => (className) =>
      (signalLayers[scope] ||= {},
      signalLayers[scope][name] ||= [],
      (signalLayers[scope][name][0] = className));

    const lease = (name, key = name) =>
      signals[key] && (leases[name] = signals[key]);

    const spread = (name, key = name) =>
      signals[key] && (spreads[name] = signals[key]);

    const classes = (layers = {}) =>
      Object.values(layers).map(l => l[0]).filter(Boolean).join(" ");

  /* ────────────────────────────────────────────────────────────────────────────
   * BASE LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */

    const base        = layer("base",     "card");        base("bg-gray-800 text-white rounded-lg");
    const layout      = layer("layout",   "card");      layout("flex flex-col justify-items-start");
    const spacing     = layer("spacing",  "card");     spacing("p-0 gap-4");
    const border      = layer("border",   "card");      border("border-0");
    const shadow      = layer("shadow",   "card");      shadow("shadow-2xl shadow-gray-800/80");
    const hover       = layer("hover",    "card");       hover("hover:scale-100");
    const animation   = layer("animation","card");   animation("transition-all duration-300");
    const escape      = layer("escape",   "card");      

  /* ────────────────────────────────────────────────────────────────────────────
   * SCOPED BASE LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */
  
    const imageBase         = layer("base",   "image");       imageBase("rounded-lg object-cover");
    const imageSize         = layer("size",   "image");       imageSize("w-full h-auto");
    const imageAspect       = layer("aspect", "image");       imageAspect("aspect-auto");

    const titleBase         = layer("base",   "title");       titleBase("font-light font-sans font-stretch-condensed px-4 py-0");
    const titleSize         = layer("size",   "title");       titleSize("text-2xl");
    const titleLayout       = layer("layout", "title");       

    const descriptionBase    = layer("base",   "description"); descriptionBase("font-light font-sans font-stretch-condensed px-4 py-0");
    const descriptionSize    = layer("size",   "description"); descriptionSize("text-lg");
    const descriptionLayout  = layer("layout", "description"); 

    const buttonBase         = layer("base",   "button");      buttonBase("font-sans mb-2 cursor-pointer");

  /* ────────────────────────────────────────────────────────────────────────────
   * INTENT SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

    signals.interactive &&
    hover("cursor-pointer hover:scale-[1.01]");

    signals.xs && (() => (
      titleSize("text-md"),
      descriptionSize("text-xs"),
      spacing("gap-2"),
      imageSize("w-auto h-24")
    ))();

    signals.sm && (() => (
      titleSize("text-lg"),
      descriptionSize("text-md"),
      spacing("gap-4"),
      imageSize("w-auto h-32")
    ))();

    signals.md && (() => (
      titleSize("text-2xl"),
      descriptionSize("text-lg"),
      spacing("gap-6"),
      imageSize("w-auto h-48")
    ))();

    signals.lg && (() => (
      titleSize("text-3xl"),
      descriptionSize("text-xl"),
      spacing("gap-8"),
      imageSize("w-auto h-64")
    ))();

    signals.xl && (() => (
      titleSize("text-4xl"),
      descriptionSize("text-2xl"),
      spacing("gap-10"),
      imageSize("w-auto h-96")
    ))();

    signals.centered && (() => (
      titleLayout("text-center"),
      descriptionLayout("text-center")
    ))();

    signals.rightAligned && (() => (
      titleLayout("text-right"),
      descriptionLayout("text-right")
    ))();

    signals.leftAligned && (() => (
      titleLayout("text-left"),
      descriptionLayout("text-left")
    ))();

    signals.imageCircle && (() => (
      imageBase("rounded-full aspect-square p-0 object-cover"),
      layout("flex flex-col justify-center items-center")
    ))();

    signals.imageLandscape && (() => (
      imageAspect("aspect-video")
    ))();

    signals.transparent && (() => (
      base("bg-transparent"),
      shadow("shadow-none")
    ))();

  /* ────────────────────────────────────────────────────────────────────────────
   * DATA LEASES
   * ──────────────────────────────────────────────────────────────────────────── */

    signals.image        && lease("image");
    signals.imageName    && lease("imageName");
    signals.title        && lease("title");
    signals.description  && lease("description");
    signals.buttonLabel  && lease("buttonLabel");

  /* ────────────────────────────────────────────────────────────────────────────
   * EVENTS
   * ──────────────────────────────────────────────────────────────────────────── */

    signals.onButtonClick    && spread("onButtonClick");

  /* ────────────────────────────────────────────────────────────────────────────
   * ESCAPE
   * ──────────────────────────────────────────────────────────────────────────── */

    signals.class     && escape(signals.class);
    signals.className && escape(signals.className);

  /* ──────────────────────────────────────────────────────────────────────────────
   * INTERNAL COMPONENTS
   * ────────────────────────────────────────────────────────────────────────────── */

  const CardMedia = ({ image, imageName, layers }) => 
    image ? <img src={image} className={classes(layers)} alt={imageName} loading="lazy" decoding="async"/> : null;

  const CardBody = ({ title, description, titleLayers, descriptionLayers }) => 
    <>{title && <h3 className={classes(titleLayers)}>{title}</h3>}{description && <p className={classes(descriptionLayers)}>{description}</p>}</>;

  const CardActions = ({ label, onBtnClick, layers }) => 
    <>{label && <Button rounded md border innerShadow hoverNone activeNone className={classes(layers)} onClick={onBtnClick}>{label}</Button>}</>;

  const CardShell = ({ layers, children }) => 
    <div className={classes(layers)}>{children}</div>;

  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */

  return (
    <CardShell 
      layers={signalLayers.card} 
    >

      {leases.image && (
        <CardMedia 
          image={leases.image}
          imageName={leases.imageName} 
          layers={signalLayers.image} 
        />
      )}

      {(leases.title || leases.description) && (
        <CardBody
          title={leases.title}
          description={leases.description}
          titleLayers={signalLayers.title}
          descriptionLayers={signalLayers.description}
        />
      )}

      {leases.buttonLabel && (
        <CardActions
          label={leases.buttonLabel}
          layers={signalLayers.button}
          onBtnClick={spreads.onButtonClick}
        />
      )}

    </CardShell>
  );
}