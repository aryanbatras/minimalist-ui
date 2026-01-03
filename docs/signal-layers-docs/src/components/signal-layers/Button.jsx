/**
 * Button - Versatile button with extensive styling and interaction options
 * 
 * SIGNALS
 *   TONE: primary, secondary, outline, link, danger, warning, success, cta, neumorphism, ghost, glass, glassDark, gradientPrimary, gradientSunset, gradientOcean, gradientForest, bright, deep, calm, smooth, clean, gentle, warm, cool, minimalist, shine, fresh, depth, plush, bold, sleek, black, red, green, blue, indigo, yellow, purple, pink, teal, cyan, gray, slate
 *   SIZE: xs, sm, md, lg, xl, 2xl, 3xl, 4xl
 *   SHAPE: square, rounded, pill, circle
 *   TEXT: bold, semibold, light, thin, uppercase, lowercase, capitalize, underline, lineThrough, textXs, textSm, textBase, textLg, textXl, text2xl, textLeft, textCenter, textRight
 *   ANIMATION: bounceIn, slideIn, slideUp, zoom, rotate, pulseGlow, magnetic, liquid, elastic, wobble, hoverEnlarge, hoverShrink, hoverLift, hoverGlow, hoverRotate, hoverScale, hoverBounce, hoverSpin, hoverNone, activeShrink, activeRipple, activeExplode, activeRotate, activeBounce, activePulse, activeNone, animateSpin, animatePulse, animateBounce, transitionFast, transitionSlow, transitionAll
 *   STATE: loading, disabled, selected, pressed
 *   LAYOUT: relative, absolute, fixed, sticky, block, inline, center, flexRow, flexCol, gap1, gap2, gap4
 * 
 * DATA PROPS
 *   REQUIRED: None
 *   OPTIONAL: children, onClick, type="button", className="", disabled=false, ripple=false, aria-label, aria-haspopup, aria-expanded, onMouseEnter, onMouseLeave
 * 
 * DEFAULTS: md size, gray-100 bg, rounded-xs, no border, no shadow, scale-105 hover, flex center, text-sm font-medium
 * 
 * USAGE: <Button primary onClick={handleClick}>Save</Button> | <Button danger lg ripple onClick={handleDelete}>Delete</Button> | <Button glass pill lg>Submit</Button>
 */

import { useRef } from "react";
import { createSignalUtils } from "./";
export function Button(contract = {}) {
  const { layer, data, state, classes, signals } = createSignalUtils(contract);
  const { inputSignal, layerSignal, dataSignal, stateSignal } = signals;
  let btn, ripple;
  btn = {
    size: layer("size", "btn"),
    border: layer("border", "btn"),
    shape: layer("shape", "btn"),
    color: layer("color", "btn"),
    shadow: layer("shadow", "btn"),
    text: layer("text", "btn"),
    textLayer: layer("textLayer", "btn"),
    textWeight: layer("textWeight", "btn"),
    textSize: layer("textSize", "btn"),
    textTransform: layer("textTransform", "btn"),
    textDecoration: layer("textDecoration", "btn"),
    hover: layer("hover", "btn"),
    active: layer("active", "btn"),
    focus: layer("focus", "btn"),
    layout: layer("layout", "btn"),
    animation: layer("animation", "btn"),
    rippleBase: layer("ripple", "btn")
  };
  ripple = {
    base: layer("base", "ripple"),
    animation: layer("animation", "ripple")
  };
  btn.size("px-4 py-2");
  btn.border("border-0");
  btn.shape("rounded-xs");
  btn.color("bg-gray-100 text-black");
  btn.shadow("shadow-none");
  btn.text("text-xs font-light font-sans");
  btn.textLayer("text-inherit");
  btn.textWeight("font-medium");
  btn.textSize("text-sm");
  btn.textTransform("normal-case");
  btn.textDecoration("no-underline");
  btn.hover("hover:scale-103 hover:shadow-md");
  btn.active("active:scale-96 active:shadow-md");
  btn.layout("flex items-center justify-center");
  btn.animation("transition-all duration-300 cursor-pointer");
  btn.focus("focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2");
  btn.rippleBase("relative overflow-hidden");
  ripple.base("absolute bg-white/30 rounded-full pointer-events-none");
  ripple.animation("-translate-x-1/2 -translate-y-1/2 transition-all");


  inputSignal.primary && (
    btn.color("bg-blue-600 text-white"),
    btn.shadow("shadow-sm shadow-blue-500/40"),
    btn.hover("hover:bg-blue-700 hover:shadow-md"),
    btn.active("active:bg-blue-800")
  );
  inputSignal.secondary && (
    btn.color("bg-gray-200 text-gray-800 border border-gray-300"),
    btn.hover("hover:bg-gray-300 hover:border-gray-400"),
    btn.active("active:bg-gray-400")
  );
  inputSignal.outline && (
    btn.color("bg-transparent border-2 border-blue-600 text-blue-600"),
    btn.hover("hover:bg-blue-600 hover:text-white"),
    btn.active("active:bg-blue-700")
  );
  inputSignal.link && (
    btn.color("text-blue-600 underline-offset-4"),
    btn.hover("hover:underline"),
    btn.active("active:text-blue-800")
  );
  inputSignal.danger && (
    btn.color("bg-red-600 text-white"),
    btn.shadow("shadow-sm shadow-red-500/40"),
    btn.hover("hover:bg-red-700"),
    btn.active("active:bg-red-800")
  );
  inputSignal.warning && (
    btn.color("bg-yellow-500 text-gray-900"),
    btn.shadow("shadow-sm shadow-yellow-500/40"),
    btn.hover("hover:bg-yellow-600"),
    btn.active("active:bg-yellow-700")
  );
  inputSignal.success && (
    btn.color("bg-green-600 text-white"),
    btn.shadow("shadow-sm shadow-green-500/40"),
    btn.hover("hover:bg-green-700"),
    btn.active("active:bg-green-800")
  );
  inputSignal.cta && (
    btn.color("bg-blue-600/95 text-white"),
    btn.shadow("shadow-xs shadow-blue-500/40"),
    btn.hover("hover:scale-105 hover:shadow-md"),
    btn.active("active:scale-90 active:shadow-md")
  );
  inputSignal.neumorphism && (
    btn.shape("rounded-md"),
    btn.shadow("shadow-inner"),
    btn.color("bg-linear-to-r from-gray-300 to-gray-200 text-gray-800"),
    btn.hover("hover:scale-105 hover:bg-white/50 hover:shadow-inner hover:shadow-gray-500/30"),
    btn.active("active:scale-95 active:bg-white/50 active:shadow-inner active:shadow-gray-500/30"),
    btn.animation("transition-all duration-700 cursor-pointer")
  );
  inputSignal.ghost && (
    btn.shape("rounded-full"),
    btn.shadow("shadow-none"),
    btn.color("bg-transparent text-gray-800"),
    btn.hover("hover:scale-110 hover:bg-gray-100/50 hover:text-gray-900"),
    btn.active("active:scale-95 active:bg-gray-100/75 active:text-gray-900"),
    btn.animation("transition-all duration-500 cursor-pointer")
  );
 inputSignal.glass && (
    btn.color("bg-white/10 backdrop-blur-md border border-white/20 text-black"),
    btn.shadow("shadow-sm shadow-black/10"),
    btn.hover("hover:bg-white/20 hover:shadow-md hover:shadow-black/20"),
    btn.active("active:bg-white/30 active:shadow-inner"),
    btn.animation("transition-all duration-300")
  );
  
  inputSignal.glassDark && (
    btn.color("bg-black/5 backdrop-blur-md border border-white/10 text-black"),
    btn.shadow("shadow-sm shadow-black/30"),
    btn.hover("hover:bg-black/10 hover:shadow-md hover:shadow-black/40"),
    btn.active("active:bg-black/15 active:shadow-inner"),
    btn.animation("transition-all duration-300")
  );

  inputSignal.gradientPrimary && (
    btn.color("bg-blue-600 text-white"),
    btn.shadow("shadow-md shadow-blue-500/30"),
    btn.hover("hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/40"),
    btn.active("active:bg-blue-800"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.gradientSunset && (
    btn.color("bg-orange-500 text-white"),
    btn.shadow("shadow-md shadow-orange-500/30"),
    btn.hover("hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/40"),
    btn.active("active:bg-orange-700"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.gradientOcean && (
    btn.color("bg-cyan-600 text-white"),
    btn.shadow("shadow-md shadow-cyan-500/30"),
    btn.hover("hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-500/40"),
    btn.active("active:bg-cyan-800"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.gradientForest && (
    btn.color("bg-green-600 text-white"),
    btn.shadow("shadow-md shadow-green-500/30"),
    btn.hover("hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/40"),
    btn.active("active:bg-green-800"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.bright && (
    btn.color("bg-yellow-400 text-gray-900"),
    btn.shadow("shadow-md shadow-yellow-500/30"),
    btn.hover("hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/40"),
    btn.active("active:bg-yellow-600"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.deep && (
    btn.color("bg-indigo-600 text-white"),
    btn.shadow("shadow-md shadow-indigo-500/30"),
    btn.hover("hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/40"),
    btn.active("active:bg-indigo-800"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.calm && (
    btn.color("bg-teal-500 text-white"),
    btn.shadow("shadow-md shadow-teal-500/30"),
    btn.hover("hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/40"),
    btn.active("active:bg-teal-700"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.smooth && (
    btn.color("bg-gray-100 text-gray-800 border border-gray-300"),
    btn.shadow("shadow-sm shadow-gray-300/50"),
    btn.hover("hover:bg-gray-200 hover:shadow-md hover:shadow-gray-400/60"),
    btn.active("active:bg-gray-300"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.clean && (
    btn.color("bg-white text-gray-900 border border-gray-200"),
    btn.shadow("shadow-sm shadow-gray-200/50"),
    btn.hover("hover:bg-gray-50 hover:shadow-md hover:shadow-gray-300/60"),
    btn.active("active:bg-gray-100"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.bounceIn && (
    btn.animation("transition-all duration-300"),
    btn.hover("hover:animate-bounce hover:scale-105"),
    btn.active("active:scale-90")
  );

  inputSignal.slideIn && (
    btn.animation("transition-all duration-300 transform translate-x-0"),
    btn.hover("hover:translate-x-2 hover:scale-105"),
    btn.active("active:translate-x-1 active:scale-95")
  );

  inputSignal.slideUp && (
    btn.animation("transition-all duration-200 transform"),
    btn.hover("hover:-translate-y-1 hover:scale-105"),
    btn.active("active:translate-y-0 active:scale-95")
  );

  inputSignal.zoom && (
    btn.animation("transition-all duration-200"),
    btn.hover("hover:scale-110"),
    btn.active("active:scale-90")
  );

  inputSignal.rotate && (
    btn.animation("transition-all duration-200"),
    btn.hover("hover:rotate-3 hover:scale-105"),
    btn.active("active:rotate-0 active:scale-95")
  );

  inputSignal.pulseGlow && (
    btn.animation("transition-all duration-300"),
    btn.hover("hover:animate-pulse hover:shadow-lg hover:shadow-blue-500/50"),
    btn.active("active:shadow-xl active:shadow-blue-600/70")
  );

  inputSignal.magnetic && (
    btn.animation("transition-all duration-200"),
    btn.hover("hover:scale-110 hover:rotate-3 hover:shadow-xl hover:shadow-purple-500/40"),
    btn.active("active:scale-95 active:rotate-0")
  );

  inputSignal.liquid && (
    btn.animation("transition-all duration-500"),
    btn.hover("hover:scale-105 hover:skewX-3 hover:shadow-lg hover:shadow-cyan-500/30"),
    btn.active("active:scale-95 active:skewX-0")
  );

  inputSignal.elastic && (
    btn.animation("transition-all duration-700"),
    btn.hover("hover:scale-125 hover:shadow-xl hover:shadow-green-500/40"),
    btn.active("active:scale-75 active:shadow-lg active:shadow-green-600/50")
  );

  inputSignal.wobble && (
    btn.animation("transition-all duration-300"),
    btn.hover("hover:animate-pulse hover:rotate-6 hover:scale-105"),
    btn.active("active:rotate-0 active:scale-95")
  );

  inputSignal.gentle && (
    btn.color("bg-blue-50 text-blue-800 border border-blue-200"),
    btn.shadow("shadow-sm shadow-blue-200/30"),
    btn.hover("hover:bg-blue-100 hover:shadow-md hover:shadow-blue-300/40"),
    btn.active("active:bg-blue-200"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.warm && (
    btn.color("bg-orange-50 text-orange-800 border border-orange-200"),
    btn.shadow("shadow-sm shadow-orange-200/30"),
    btn.hover("hover:bg-orange-100 hover:shadow-md hover:shadow-orange-300/40"),
    btn.active("active:bg-orange-200"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.cool && (
    btn.color("bg-cyan-50 text-cyan-800 border border-cyan-200"),
    btn.shadow("shadow-sm shadow-cyan-200/30"),
    btn.hover("hover:bg-cyan-100 hover:shadow-md hover:shadow-cyan-300/40"),
    btn.active("active:bg-cyan-200"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.minimalist && (
    btn.color("bg-white text-gray-900 border border-gray-300"),
    btn.shadow("shadow-sm shadow-gray-200/50"),
    btn.hover("hover:bg-gray-50 hover:border-gray-400 hover:shadow-md hover:shadow-gray-300/70"),
    btn.active("active:bg-gray-100 active:scale-95"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.shine && (
    btn.color("bg-gray-100 text-gray-800"),
    btn.shadow("shadow-sm shadow-gray-300/30"),
    btn.hover("hover:bg-gray-200 hover:shadow-md hover:shadow-gray-400/50"),
    btn.active("active:bg-gray-300"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.fresh && (
    btn.color("bg-green-50 text-green-800"),
    btn.shadow("shadow-sm shadow-green-300/30"),
    btn.hover("hover:bg-green-100 hover:shadow-md hover:shadow-green-400/50"),
    btn.active("active:bg-green-200"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.depth && (
    btn.color("bg-white text-gray-900 border border-gray-200"),
    btn.shadow("shadow-sm shadow-gray-300/50"),
    btn.hover("hover:bg-gray-50 hover:shadow-lg hover:shadow-gray-400/60 hover:-translate-y-1"),
    btn.active("active:shadow-inner active:translate-y-0"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.plush && (
    btn.color("bg-purple-100 text-purple-800"),
    btn.shadow("shadow-md shadow-purple-300/40"),
    btn.hover("hover:bg-purple-200 hover:shadow-lg hover:shadow-purple-400/50"),
    btn.active("active:bg-purple-300"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.bold && (
    btn.color("bg-red-600 text-white"),
    btn.shadow("shadow-md shadow-red-500/30"),
    btn.hover("hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/40"),
    btn.active("active:bg-red-800"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.sleek && (
    btn.color("bg-slate-700 text-white"),
    btn.shadow("shadow-md shadow-slate-600/30"),
    btn.hover("hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-600/40"),
    btn.active("active:bg-slate-900"),
    btn.animation("transition-all duration-200")
  );

  inputSignal.black && btn.color("bg-black text-white");
  inputSignal.red && btn.color("bg-red-600 text-white");
  inputSignal.green && btn.color("bg-green-500 text-white");
  inputSignal.blue && btn.color("bg-blue-500/90 text-neutral-100");
  inputSignal.indigo && btn.color("bg-indigo-500 text-white");
  inputSignal.yellow && btn.color("bg-yellow-400 text-black");
  inputSignal.purple && btn.color("bg-purple-500 text-white");
  inputSignal.pink && btn.color("bg-pink-500 text-white");
  inputSignal.teal && btn.color("bg-teal-500 text-white");
  inputSignal.cyan && btn.color("bg-cyan-500 text-white");
  inputSignal.gray && btn.color("bg-gray-500 text-white");
  inputSignal.slate && btn.color("bg-slate-500 text-white");

  inputSignal.square && btn.shape("rounded-none");
  inputSignal.rounded && btn.shape("rounded-lg");
  inputSignal.pill && btn.shape("rounded-full");
  inputSignal.circle && btn.shape("rounded-full aspect-square p-0");

  inputSignal.xs && (btn.size("px-2 py-1"),btn.textSize("text-xs"));
  inputSignal.sm && (btn.size("px-3 py-1.5"),btn.textSize("text-sm"));
  inputSignal.md && (btn.size("px-4 py-2"),btn.textSize("text-base"));
  inputSignal.lg && (btn.size("px-6 py-3"),btn.textSize("text-lg"));
  inputSignal.xl && (btn.size("px-8 py-4"),btn.textSize("text-xl"));
  inputSignal['2xl'] && (btn.size("px-10 py-5"),btn.textSize("text-2xl"));
  inputSignal['3xl'] && (btn.size("px-12 py-6"),btn.textSize("text-3xl"));
  inputSignal['4xl'] && (btn.size("px-16 py-8"),btn.textSize("text-4xl"));

  inputSignal.bold && btn.textWeight("font-bold");
  inputSignal.semibold && btn.textWeight("font-semibold");
  inputSignal.light && btn.textWeight("font-light");
  inputSignal.thin && btn.textWeight("font-thin");

  inputSignal.uppercase && btn.textTransform("uppercase");
  inputSignal.lowercase && btn.textTransform("lowercase");
  inputSignal.capitalize && btn.textTransform("capitalize");

  inputSignal.underline && btn.textDecoration("underline");
  inputSignal.lineThrough && btn.textDecoration("line-through");

  inputSignal.textXs && btn.textSize("text-xs");
  inputSignal.textSm && btn.textSize("text-sm");
  inputSignal.textBase && btn.textSize("text-base");
  inputSignal.textLg && btn.textSize("text-lg");
  inputSignal.textXl && btn.textSize("text-xl");
  inputSignal.text2xl && btn.textSize("text-2xl");

  inputSignal.textLeft && btn.textLayer("text-left");
  inputSignal.textCenter && btn.textLayer("text-center");
  inputSignal.textRight && btn.textLayer("text-right");


  inputSignal.hoverEnlarge && btn.hover("hover:scale-105");
  inputSignal.hoverShrink && btn.hover("hover:scale-95");
  inputSignal.hoverLift && btn.hover("hover:-translate-y-0.5");
  inputSignal.hoverGlow && btn.hover("hover:shadow-lg hover:shadow-blue-500/50");
  inputSignal.hoverRotate && btn.hover("hover:rotate-3");
  inputSignal.hoverScale && btn.hover("hover:scale-110");
  inputSignal.hoverBounce && btn.hover("hover:animate-bounce");
  inputSignal.hoverSpin && btn.hover("hover:animate-spin");
  inputSignal.hoverNone && btn.hover("hover:scale-100 hover:rotate-0 hover:translate-y-0 hover:shadow-none");

  inputSignal.activeShrink && btn.active("active:scale-95");
  inputSignal.activeRipple && btn.active("active:ring-4 active:ring-black active:scale-90");
  inputSignal.activeExplode && btn.active("active:scale-110 active:ring-8 active:ring-black");
  inputSignal.activeRotate && btn.active("active:rotate-3");
  inputSignal.activeBounce && btn.active("active:animate-bounce");
  inputSignal.activePulse && btn.active("active:animate-pulse");
  inputSignal.activeNone && btn.active("active:scale-100 active:shadow-none active:ring-0 active:ring-offset-0");

  inputSignal.animateSpin && btn.animation("animate-spin");
  inputSignal.animatePulse && btn.animation("animate-pulse");
  inputSignal.animateBounce && btn.animation("animate-bounce");
  inputSignal.transitionFast && btn.animation("transition-all duration-150");
  inputSignal.transitionSlow && btn.animation("transition-all duration-700");
  inputSignal.transitionAll && btn.animation("transition-all duration-300 ease-in-out");


  inputSignal.loading && (btn.color("opacity-75 cursor-not-allowed"), data("disabled"));
  inputSignal.disabled && (btn.color("opacity-50 cursor-not-allowed"), data("disabled"));
  inputSignal.selected && btn.color("ring-2 ring-blue-500 ring-offset-2");
  inputSignal.pressed && btn.active("scale-95");

  inputSignal.relative && btn.layout("relative");
  inputSignal.absolute && btn.layout("absolute");
  inputSignal.fixed && btn.layout("fixed");
  inputSignal.sticky && btn.layout("sticky");
  inputSignal.block && btn.layout("w-full");
  inputSignal.inline && btn.layout("inline-flex");
  inputSignal.center && btn.layout("mx-auto");
  inputSignal.flexRow && btn.layout("flex-row");
  inputSignal.flexCol && btn.layout("flex-col");
  inputSignal.gap1 && btn.layout("gap-1");
  inputSignal.gap2 && btn.layout("gap-2");
  inputSignal.gap4 && btn.layout("gap-4");

  inputSignal.className && data("className");
  inputSignal.children && data("children");
  inputSignal.onClick && data("onClick");
  inputSignal.type && data("type");
  inputSignal["aria-label"] && data("aria-label");
  inputSignal["aria-haspopup"] && data("aria-haspopup");
  inputSignal["aria-expanded"] && data("aria-expanded");
  inputSignal.onMouseEnter && data("onMouseEnter");
  inputSignal.onMouseLeave && data("onMouseLeave");

  state("ripples", 0, []);
  inputSignal.ripple && data("ripple") && state("ripples", 1, []);
  
  const rippleCounterRef = useRef(0);
  const handleRippleClick = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
    stateSignal.ripples?.set([
        ...(stateSignal.ripples?.get || []),
        {
            id: ++rippleCounterRef.current,
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        },
    ]);
  };
  const rippleStyles = ` @keyframes ripple {
        0% { width: 0; height: 0; opacity: 0.5; }
        100% { width: 400px; height: 400px; opacity: 0; }
    }`;

  return (
    <>
      <style>{rippleStyles}</style>

      <button
        type={dataSignal.type}
        onClick={(e) => {
          dataSignal.onClick?.(e);
          dataSignal.ripple && handleRippleClick(e);
        }}
        disabled={dataSignal.disabled}
        aria-label={dataSignal["aria-label"]}
        aria-haspopup={dataSignal["aria-haspopup"]}
        aria-expanded={dataSignal["aria-expanded"]}
        onMouseEnter={dataSignal.onMouseEnter}
        onMouseLeave={dataSignal.onMouseLeave}
        className={`${classes(layerSignal.btn)} ${dataSignal.className || ''}`}
      >
        {dataSignal.children}

        {dataSignal.ripple &&
          (stateSignal.ripples?.get || []).map((ripple) => (
            <span
              key={ripple.id}
              className={classes(layerSignal.ripple)}
              style={{
                left: ripple.x,
                top: ripple.y,
                animation: "ripple 2s ease-out",
              }}
            />
          ))}
      </button>
    </>
  );
}