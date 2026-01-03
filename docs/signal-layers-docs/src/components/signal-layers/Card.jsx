/**
 * Card - Flexible card for content with optional image, title, description, and actions
 * 
 * SIGNALS
 *   SIZE: xs, sm, md, lg, xl
 *   LAYOUT: interactive, centered, rightAligned, leftAligned
 *   IMAGE: imageCircle, imageLandscape
 *   TONE: primary, secondary, success, warning, danger, transparent
 * 
 * DATA PROPS
 *   REQUIRED: None
 *   OPTIONAL: image, imageName, title, description, buttonLabel, onButtonClick, className=""
 * 
 * DEFAULTS: md size, white bg, gray-900 text, gray-200 border, rounded-xl, flex column, text-lg title, text-sm description
 * 
 * USAGE: <Card title="Welcome" description="Simple card" /> | <Card image="/img.jpg" title="Featured" description="Click to learn more" buttonLabel="Learn More" onButtonClick={handleAction} /> | <Card lg primary centered title="Success!" description="Operation completed" buttonLabel="Continue" />
 */

import { Button, createSignalUtils } from "./";
export function Card(contract = {}) {
  const { layer, data, state, classes, signals } = createSignalUtils(contract);
  const { inputSignal, layerSignal, dataSignal } = signals;
  let card, image, title, description, button;

  card = {
    base: layer("base", "card"),
    layout: layer("layout", "card"),
    spacing: layer("spacing", "card"),
    border: layer("border", "card"),
    shadow: layer("shadow", "card"),
    hover: layer("hover", "card"),
    animation: layer("animation", "card")
  };

  image = {
    base: layer("base", "image"),
    size: layer("size", "image"),
    aspect: layer("aspect", "image")
  };

  title = {
    base: layer("base", "title"),
    size: layer("size", "title"),
    layout: layer("layout", "title")
  };

  description = {
    base: layer("base", "description"),
    size: layer("size", "description"),
    layout: layer("layout", "description")
  };

  button = {
    base: layer("base", "button"),
    layout: layer("layout", "button")
  };

  card.border("border border-gray-200");
  card.spacing("p-6 gap-4");
  card.hover("hover:scale-100");
  card.shadow("shadow-sm shadow-gray-200/50");
  card.animation("transition-all duration-300");
  card.base("bg-white text-gray-900 rounded-xl");
  card.layout("flex flex-col justify-items-start");
  image.base("rounded-lg object-cover");
  image.size("w-full h-auto");
  image.aspect("aspect-auto");
  title.base("font-semibold font-sans px-0 py-0");
  title.layout("text-left");
  title.size("text-lg");
  description.base("font-normal font-sans text-gray-600 px-0 py-0");
  description.layout("text-left");
  description.size("text-sm");
  button.base("font-sans mt-4 cursor-pointer");

  inputSignal.interactive && card.hover("cursor-pointer hover:scale-[1.02]");

  inputSignal.xs &&
    (title.size("text-sm"),
    description.size("text-xs"),
    card.spacing("gap-2 p-4"),
    image.size("w-auto h-24"));

  inputSignal.sm &&
    (title.size("text-base"),
    description.size("text-sm"),
    card.spacing("gap-3 p-5"),
    image.size("w-auto h-32"));

  inputSignal.md &&
    (title.size("text-lg"),
    description.size("text-base"),
    card.spacing("gap-4 p-6"),
    image.size("w-auto h-48"));

  inputSignal.lg &&
    (title.size("text-xl"),
    description.size("text-lg"),
    card.spacing("gap-6 p-8"),
    image.size("w-auto h-64"));

  inputSignal.xl &&
    (title.size("text-2xl"),
    description.size("text-xl"),
    card.spacing("gap-8 p-10"),
    image.size("w-auto h-96"));

  inputSignal.centered &&
    (title.layout("text-center"), description.layout("text-center"), button.layout("flex items-center justify-center"));

  inputSignal.rightAligned &&
    (title.layout("text-right"), description.layout("text-right"), button.layout("flex items-center justify-end"));

  inputSignal.leftAligned &&
    (title.layout("text-left"), description.layout("text-left"), button.layout("flex items-center justify-start"));

  inputSignal.imageCircle &&
    (image.base("rounded-full aspect-square p-0 object-cover"),
    card.layout("flex flex-col justify-center items-center"));

  inputSignal.imageLandscape && image.aspect("aspect-video");

  inputSignal.primary &&
    (card.base("bg-blue-50 text-blue-900 border-blue-200"),
    card.shadow("shadow-md shadow-blue-200/30"));

  inputSignal.secondary &&
    (card.base("bg-gray-50 text-gray-900 border-gray-300"),
    card.shadow("shadow-md shadow-gray-300/30"));

  inputSignal.success &&
    (card.base("bg-green-50 text-green-900 border-green-200"),
    card.shadow("shadow-md shadow-green-200/30"));

  inputSignal.warning &&
    (card.base("bg-yellow-50 text-yellow-900 border-yellow-200"),
    card.shadow("shadow-md shadow-yellow-200/30"));

  inputSignal.danger &&
    (card.base("bg-red-50 text-red-900 border-red-200"),
    card.shadow("shadow-md shadow-red-200/30"));

  inputSignal.transparent &&
    (card.base("bg-transparent text-gray-900 border-gray-200"), card.shadow("shadow-none"));

  inputSignal.image && data("image");
  inputSignal.imageName && data("imageName");
  inputSignal.title && data("title");
  inputSignal.description && data("description");
  inputSignal.buttonLabel && data("buttonLabel");
  inputSignal.onButtonClick && data("onButtonClick");
  inputSignal.className && data("className");
  inputSignal.onClick && data("onClick");

  const CardMedia = ({ image, imageName, layers }) =>
    image ? (
      <img
        src={image}
        className={classes(layers)}
        alt={imageName}
        loading="lazy"
        decoding="async"
      />
    ) : null;

  const CardBody = ({ title, description, titleLayers, descriptionLayers }) => (
    <>
      {title && <h3 className={classes(titleLayers)}>{title}</h3>}
      {description && (
        <p className={classes(descriptionLayers)}>{description}</p>
      )}
    </>
  );

  const CardActions = ({ label, onBtnClick, layers }) => (
    <>
      {label && (
        <div
        className={classes(layers)}
        >
          <Button
            sm
            rounded
            border
            innerShadow
            hoverScale
            activeShrink
            onClick={onBtnClick}
          >
            {label}
          </Button>
        </div>
      )}
    </>
  );

  const CardShell = ({ layers, children, onClick }) => (
    <div className={`${classes(layers)} ${dataSignal.className || ''}`} onClick={onClick}>{children}</div>
  );

  return (
    <CardShell layers={layerSignal.card} onClick={dataSignal.onClick}>
      {dataSignal.image && (
        <CardMedia
          image={dataSignal.image}
          imageName={dataSignal.imageName}
          layers={layerSignal.image}
        />
      )}

      {(dataSignal.title || dataSignal.description) && (
        <CardBody
          title={dataSignal.title}
          description={dataSignal.description}
          titleLayers={layerSignal.title}
          descriptionLayers={layerSignal.description}
        />
      )}

      {dataSignal.buttonLabel && (
        <CardActions
          label={dataSignal.buttonLabel}
          layers={layerSignal.button}
          onBtnClick={dataSignal.onButtonClick}
        />
      )}
    </CardShell>
  );
}
