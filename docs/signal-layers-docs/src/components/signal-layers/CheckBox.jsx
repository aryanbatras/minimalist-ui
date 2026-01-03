/**
 * CheckBox - Customizable checkbox with extensive styling and label positioning
 * 
 * SIGNALS
 *   TONE: primary, secondary, danger, success, warning, info, dark, light, neutral, brand, accent, ghost, outline, filled, glass, gradient, minimal
 *   SIZE: xs, sm, md, lg
 *   SHAPE: square, rounded, pill
 *   INTERACTION: hoverScale, pressShrink, hoverGlow, hoverLift, pressRotate, pressPulse, focusRing, focusGlow, focusScale
 *   STATE: loading, readonly
 *   BORDER: borderNone, borderThick, borderDashed
 *   LABEL POSITION: labelLeft, labelRight, labelBottom, labelTop, labelStart, labelEnd
 *   LABEL STYLE: labelBold, labelSemibold, labelMedium, labelRegular, labelLight, labelThin, labelUppercase, labelLowercase, labelCapitalize, labelItalic, labelUnderline, labelLineThrough
 *   SPACING: spaced, compact, tight, snug, normal, relaxed, loose, extraLoose
 * 
 * DATA PROPS
 *   REQUIRED: None
 *   OPTIONAL: label, checked, defaultChecked=false, onChange, disabled=false, ariaLabel, ariaLabelledBy, ariaDescribedBy, ariaInvalid, name, value, form, tabIndex, className=""
 * 
 * DEFAULTS: sm size, gray-300 border, rounded-sm, text-sm label, left positioned, gap-2 spacing
 * 
 * USAGE: <CheckBox label="Accept terms" checked={accepted} onChange={setAccepted} /> | <CheckBox primary rounded hoverScale focusRing label="Primary option" /> | <CheckBox lg labelRight success label="Enable notifications" />
 */

import { createSignalUtils } from "./";
export function CheckBox(contract = {}) {
    const { layer, data, state, classes, signals } = createSignalUtils(contract);
    const { inputSignal, layerSignal, dataSignal, stateSignal } = signals;
    const checkboxId = `checkbox-${Math.random().toString(36).substring(2, 9)}`;
    let container, checkbox, label;

    container = {
        base: layer("base", "container"),
        color: layer("color", "container"),
        size: layer("size", "container"),
        layout: layer("layout", "container")
    }

    checkbox = {
        base: layer("base", "checkbox"),
        color: layer("color", "checkbox"),
        size: layer("size", "checkbox"),
        layout: layer("layout", "checkbox"),
        checked: layer("checked", "checkbox"),
        border: layer("border", "checkbox"),
        shape: layer("shape", "checkbox"),
        hover: layer("hover", "checkbox"),
        focus: layer("focus", "checkbox"),
        active: layer("active", "checkbox"),
        interactive: layer("interactive", "checkbox")
    }

    label = {
        base: layer("base", "label"),
        color: layer("color", "label"),
        font: layer("font", "label"),
        size: layer("size", "label"),
        layout: layer("layout", "label")
    }
 
    container.base("relative flex justify-center items-center");
    container.color("bg-transparent");
    container.size("h-full w-full");
    container.layout("flex-row gap-2");

    checkbox.base("relative inset-0 appearance-none cursor-pointer");
    checkbox.color("border-gray-300 bg-transparent");
    checkbox.size("h-3 w-3 checked:after:text-[8px]");
    checkbox.border("border-2");
    checkbox.shape("rounded-sm");
    checkbox.layout("transition-all duration-200");
    checkbox.checked("checked:after:leading-none checked:border-blue-600 checked:bg-gray-300 checked:after:content-['✓'] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2");

    label.base("relative flex items-center cursor-pointer");
    label.color("text-gray-800");
    label.font("font-light");
    label.size("text-sm");
    label.layout("left-0");

    inputSignal.primary && checkbox.color("border-blue-600 checked:bg-blue-50 checked:border-blue-600");
    inputSignal.secondary && checkbox.color("border-gray-600 checked:bg-gray-50 checked:border-gray-600");
    inputSignal.danger && checkbox.color("border-red-600 checked:bg-red-50 checked:border-red-600");
    inputSignal.success && checkbox.color("border-green-600 checked:bg-green-50 checked:border-green-600");
    inputSignal.warning && checkbox.color("border-yellow-600 checked:bg-yellow-50 checked:border-yellow-600");
    inputSignal.info && checkbox.color("border-cyan-600 checked:bg-cyan-50 checked:border-cyan-600");
    inputSignal.dark && checkbox.color("border-gray-600 checked:bg-gray-700 checked:border-gray-500");
    inputSignal.light && checkbox.color("border-gray-300 checked:bg-gray-100 checked:border-gray-400");
    inputSignal.neutral && checkbox.color("border-gray-400 checked:bg-gray-200 checked:border-gray-500");
    inputSignal.brand && checkbox.color("border-brand-500 checked:bg-brand-50 checked:border-brand-600");
    inputSignal.accent && checkbox.color("border-accent-500 checked:bg-accent-50 checked:border-accent-600");
    inputSignal.ghost && checkbox.color("border-transparent bg-transparent checked:bg-transparent checked:border-transparent");
    inputSignal.outline && checkbox.color("border-2 bg-transparent checked:bg-transparent");
    inputSignal.filled && checkbox.color("border-transparent bg-gray-100 checked:bg-gray-200");
    inputSignal.glass && checkbox.color("border-white/20 bg-white/10 backdrop-blur-sm checked:bg-white/20");
    inputSignal.gradient && checkbox.color("border-transparent bg-linear-to-r from-blue-500 to-purple-500 checked:from-blue-600 checked:to-purple-600");
    inputSignal.minimal && checkbox.color("border-gray-200 bg-transparent checked:border-gray-400 checked:bg-gray-50");
 
    inputSignal.square && checkbox.shape("rounded-none");
    inputSignal.rounded && checkbox.shape("rounded-sm");
    inputSignal.pill && checkbox.shape("rounded-full");

    inputSignal.loading && checkbox.interactive("opacity-50 cursor-wait");
    inputSignal.readonly && checkbox.interactive("cursor-not-allowed opacity-60");

    inputSignal.borderNone && checkbox.border("border-0");
    inputSignal.borderThick && checkbox.border("border-4");
    inputSignal.borderDashed && checkbox.border("border-2 border-dashed");

    inputSignal.xs && (label.size("text-xs"), checkbox.size("h-2 w-2 checked:after:text-[4px]"));
    inputSignal.sm && (label.size("text-sm"), checkbox.size("h-3 w-3 checked:after:text-[8px]"));
    inputSignal.md && (label.size("text-md"), checkbox.size("h-4 w-4 checked:after:text-[10px]"));
    inputSignal.lg && (label.size("text-lg"), checkbox.size("h-5 w-5 checked:after:text-[12px]"));
      
    inputSignal.labelTop && container.layout("flex-col-reverse gap-2");
    inputSignal.labelBottom && container.layout("flex-col gap-2");
    
    inputSignal.labelLeft && label.layout("left-0 order-last");
    inputSignal.labelRight && label.layout("right-0 order-first");
    inputSignal.labelStart && label.layout("order-first gap-2");
    inputSignal.labelEnd && label.layout("order-last gap-2");
       
    inputSignal.labelBold && label.font("font-bold");
    inputSignal.labelSemibold && label.font("font-semibold");
    inputSignal.labelMedium && label.font("font-medium");
    inputSignal.labelRegular && label.font("font-normal");
    inputSignal.labelLight && label.font("font-light");
    inputSignal.labelThin && label.font("font-thin");

    inputSignal.labelUppercase && label.font("uppercase");
    inputSignal.labelLowercase && label.font("lowercase");
    inputSignal.labelCapitalize && label.font("capitalize");

    inputSignal.labelItalic && label.font("italic");
    inputSignal.labelUnderline && label.font("underline");
    inputSignal.labelLineThrough && label.font("line-through");

    inputSignal.label && data("label");
    inputSignal.checked && data("checked");
    inputSignal.defaultChecked && data("defaultChecked");
    inputSignal.onChange && data("onChange");
    inputSignal.disabled && data("disabled");
    inputSignal.ariaLabel && data("ariaLabel");
    inputSignal.ariaLabelledBy && data("ariaLabelledBy");
    inputSignal.ariaDescribedBy && data("ariaDescribedBy");
    inputSignal.ariaInvalid && data("ariaInvalid");
    inputSignal.name && data("name");
    inputSignal.value && data("value");
    inputSignal.form && data("form");
    inputSignal.tabIndex && data("tabIndex");
    inputSignal.className && data("className");
    
    state("checked", 1, dataSignal.defaultChecked ?? false);

    return (
        <div className={`${classes(layerSignal.container)} ${dataSignal.className || ''}`}>

        <input 
        type="checkbox" 
        id={checkboxId} 
        checked={dataSignal.checked ?? stateSignal.checked?.get}
        defaultChecked={dataSignal.defaultChecked}
        onChange={(e) => {
            const v = e.target.checked;
            stateSignal.checked?.set(v);
            dataSignal.onChange?.(v);
        }}
        disabled={dataSignal.disabled}
        aria-label={dataSignal.ariaLabel}
        aria-labelledby={dataSignal.ariaLabelledBy}
        aria-invalid={dataSignal.ariaInvalid}
        aria-describedby={dataSignal.ariaDescribedBy}
        className={`peer ${classes(layerSignal.checkbox)}`}
        />
        
        {dataSignal.label && (<label htmlFor={checkboxId} className={classes(layerSignal.label)}>{dataSignal.label}</label>)}

        </div>
  )
}