import { DocsLayout } from "../../layout/DocsLayout.jsx";
import { CheckBox } from "../../../signal-layers";
import { useState } from "react";

export function CheckBoxPage() {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(code);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const generateCode = (signals, props = {}) => {
    const signalNames = Object.keys(signals)
      .filter(key => signals[key])
      .map(key => key === '2xl' ? '"2xl"' : key)
      .join(' ');
    const propNames = Object.keys(props)
      .filter(key => props[key] !== undefined)
      .map(key => {
        if (typeof props[key] === 'function') {
          return `${key}={${props[key].toString()}}`;
        }
        return `${key}={${typeof props[key] === 'string' ? `"${props[key]}"` : props[key]}}`;
      })
      .join(' ');
    return `<CheckBox ${signalNames} ${propNames} />`;
  };

  const CopyCheckBox = ({ signals, props = {} }) => {
    const code = generateCode(signals, props);
    const isCopied = copied === code;

    const handleClick = (e) => {
      e.stopPropagation();
      copyToClipboard(code);
    };
    
    return (
      <div className="group cursor-pointer">
        <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
          <CheckBox {...signals} {...props} />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1">
          <span className="text-xs text-slate-400 font-mono" onClick={handleClick}>
            {isCopied ? '✓ Copied' : 'Copy'}
          </span>
        </div>
      </div>
    );
  };

  return (
    <DocsLayout>
      <div className="mb-32 max-w-6xl mx-auto px-6">
        <h1 className="text-7xl font-light mb-8 text-black tracking-tight">CheckBox</h1>
        <p className="text-xl text-slate-600 mb-20 leading-relaxed">
          Customizable checkbox with extensive styling, label positioning, and interaction effects. Pure intention.
        </p>

        {/* Signal Combinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Signal Combinations</h2>
          <div className="flex flex-wrap gap-4">
            <CopyCheckBox signals={{lg: true, primary: true, rounded: true, hoverScale: true, focusRing: true}} props={{label: "Premium Features", defaultChecked: true}} />
            <CopyCheckBox signals={{md: true, success: true, pill: true, hoverLift: true, focusGlow: true}} props={{label: "Enable Notifications"}} />
            <CopyCheckBox signals={{sm: true, danger: true, square: true, pressShrink: true, labelRight: true}} props={{label: "Delete Files"}} />
            <CopyCheckBox signals={{lg: true, brand: true, rounded: true, hoverGlow: true, labelTop: true}} props={{label: "Dark Mode", defaultChecked: true}} />
            <CopyCheckBox signals={{md: true, accent: true, pill: true, pressRotate: true, labelBottom: true}} props={{label: "Auto-save"}} />
          </div>
        </section>

        {/* Tone Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Tone Variants</h2>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <p className="text-slate-600 mb-6">Color schemes for different contexts and visual hierarchy.</p>
            <div className="flex flex-wrap gap-6">
              <CopyCheckBox signals={{md: true}} props={{label: "Default"}} />
              <CopyCheckBox signals={{md: true, primary: true}} props={{label: "Primary"}} />
              <CopyCheckBox signals={{md: true, secondary: true}} props={{label: "Secondary"}} />
              <CopyCheckBox signals={{md: true, danger: true}} props={{label: "Danger"}} />
              <CopyCheckBox signals={{md: true, success: true}} props={{label: "Success"}} />
              <CopyCheckBox signals={{md: true, warning: true}} props={{label: "Warning"}} />
              <CopyCheckBox signals={{md: true, info: true}} props={{label: "Info"}} />
              <CopyCheckBox signals={{md: true, dark: true}} props={{label: "Dark"}} />
              <CopyCheckBox signals={{md: true, light: true}} props={{label: "Light"}} />
              <CopyCheckBox signals={{md: true, neutral: true}} props={{label: "Neutral"}} />
              <CopyCheckBox signals={{md: true, brand: true}} props={{label: "Brand"}} />
              <CopyCheckBox signals={{md: true, accent: true}} props={{label: "Accent"}} />
              <CopyCheckBox signals={{md: true, ghost: true}} props={{label: "Ghost"}} />
              <CopyCheckBox signals={{md: true, outline: true}} props={{label: "Outline"}} />
              <CopyCheckBox signals={{md: true, filled: true}} props={{label: "Filled"}} />
              <CopyCheckBox signals={{md: true, glass: true}} props={{label: "Glass"}} />
              <CopyCheckBox signals={{md: true, minimal: true}} props={{label: "Minimal"}} />
            </div>
          </div>
        </section>

        {/* Size Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Size Variants</h2>
          <div className="flex flex-wrap gap-4">
            <CopyCheckBox signals={{xs: true, primary: true}} props={{label: "Extra Small"}} />
            <CopyCheckBox signals={{sm: true, primary: true}} props={{label: "Small"}} />
            <CopyCheckBox signals={{md: true, primary: true}} props={{label: "Medium"}} />
            <CopyCheckBox signals={{lg: true, primary: true}} props={{label: "Large"}} />
          </div>
        </section>

        {/* Shape Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Shape Variants</h2>
          <div className="flex flex-wrap gap-4">
            <CopyCheckBox signals={{md: true, primary: true, square: true}} props={{label: "Square"}} />
            <CopyCheckBox signals={{md: true, primary: true, rounded: true}} props={{label: "Rounded"}} />
            <CopyCheckBox signals={{md: true, primary: true, pill: true}} props={{label: "Pill"}} />
          </div>
        </section>

        {/* Border Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Border Variants</h2>
          <div className="flex flex-wrap gap-4">
            <CopyCheckBox signals={{md: true, primary: true}} props={{label: "Default Border"}} />
            <CopyCheckBox signals={{md: true, primary: true, borderNone: true}} props={{label: "No Border"}} />
            <CopyCheckBox signals={{md: true, primary: true, borderThick: true}} props={{label: "Thick Border"}} />
            <CopyCheckBox signals={{md: true, primary: true, borderDashed: true}} props={{label: "Dashed Border"}} />
          </div>
        </section>

        {/* Label Positioning */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Label Positioning</h2>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <p className="text-slate-600 mb-6">Position labels around the checkbox for optimal layout and accessibility.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CopyCheckBox signals={{md: true, primary: true, labelLeft: true}} props={{label: "Left Label"}} />
              <CopyCheckBox signals={{md: true, primary: true, labelRight: true}} props={{label: "Right Label"}} />
              <CopyCheckBox signals={{md: true, primary: true, labelTop: true}} props={{label: "Top Label"}} />
              <CopyCheckBox signals={{md: true, primary: true, labelBottom: true}} props={{label: "Bottom Label"}} />
              <CopyCheckBox signals={{md: true, primary: true, labelStart: true}} props={{label: "Start Label"}} />
              <CopyCheckBox signals={{md: true, primary: true, labelEnd: true}} props={{label: "End Label"}} />
            </div>
          </div>
        </section>

        {/* Label Style Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Label Style Variants</h2>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <p className="text-slate-600 mb-6">Customize label typography and styling for different contexts.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <CopyCheckBox signals={{md: true, primary: true, labelBold: true}} props={{label: "Bold Label"}} />
              <CopyCheckBox signals={{md: true, primary: true, labelSemibold: true}} props={{label: "Semibold Label"}} />
              <CopyCheckBox signals={{md: true, primary: true, labelMedium: true}} props={{label: "Medium Label"}} />
              <CopyCheckBox signals={{md: true, primary: true, labelRegular: true}} props={{label: "Regular Label"}} />
              <CopyCheckBox signals={{md: true, primary: true, labelLight: true}} props={{label: "Light Label"}} />
              <CopyCheckBox signals={{md: true, primary: true, labelThin: true}} props={{label: "Thin Label"}} />
              <CopyCheckBox signals={{md: true, primary: true, labelUppercase: true}} props={{label: "Uppercase Label"}} />
              <CopyCheckBox signals={{md: true, primary: true, labelLowercase: true}} props={{label: "lowercase label"}} />
              <CopyCheckBox signals={{md: true, primary: true, labelCapitalize: true}} props={{label: "Capitalize Label"}} />
              <CopyCheckBox signals={{md: true, primary: true, labelItalic: true}} props={{label: "Italic Label"}} />
              <CopyCheckBox signals={{md: true, primary: true, labelUnderline: true}} props={{label: "Underline Label"}} />
              <CopyCheckBox signals={{md: true, primary: true, labelLineThrough: true}} props={{label: "Line-through Label"}} />
            </div>
          </div>
        </section>

        {/* State Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">State Variants</h2>
          <div className="flex flex-wrap gap-4">
            <CopyCheckBox signals={{md: true, primary: true}} props={{label: "Default"}} />
            <CopyCheckBox signals={{md: true, primary: true}} props={{label: "Disabled", disabled: true}} />
          </div>
        </section>

        {/* Real-World Example */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Real-World Example</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Settings Panel</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-700">Enable notifications</span>
                <CheckBox sm primary label="Notifications" defaultChecked={true} />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
  <span className="text-sm text-slate-700">Enable notifications</span>
  <CheckBox sm primary label="Notifications" defaultChecked={true} />
</div>`}</pre>
              </div>
            </div>


        
          </div>
        </section>

        {/* Signal Reference */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Signal Reference</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4 text-slate-700">Tone Signals</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {['primary', 'secondary', 'danger', 'success', 'warning', 'info', 'dark', 'light', 'neutral', 'brand', 'accent', 'ghost', 'outline', 'filled', 'glass', 'gradient', 'minimal'].map((signal) => (
                  <div key={signal} className="bg-slate-50 p-3 rounded-lg font-mono text-sm text-center">
                    {signal}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 text-slate-700">Size & Shape Signals</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {['xs', 'sm', 'md', 'lg', 'square', 'rounded', 'pill'].map((signal) => (
                  <div key={signal} className="bg-slate-50 p-3 rounded-lg font-mono text-sm text-center">
                    {signal}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 text-slate-700">Interaction Signals</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {['hoverScale', 'pressShrink', 'hoverGlow', 'hoverLift', 'pressRotate', 'pressPulse', 'focusRing', 'focusGlow', 'focusScale'].map((signal) => (
                  <div key={signal} className="bg-slate-50 p-3 rounded-lg font-mono text-sm text-center">
                    {signal}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 text-slate-700">Layout & Style Signals</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {['loading', 'readonly', 'borderNone', 'borderThick', 'borderDashed', 'labelLeft', 'labelRight', 'labelTop', 'labelBottom', 'labelStart', 'labelEnd', 'labelBold', 'labelSemibold', 'labelMedium', 'labelRegular', 'labelLight', 'labelThin', 'labelUppercase', 'labelLowercase', 'labelCapitalize', 'labelItalic', 'labelUnderline', 'labelLineThrough', 'spaced', 'compact', 'tight', 'snug', 'normal', 'relaxed', 'loose', 'extraLoose'].map((signal) => (
                  <div key={signal} className="bg-slate-50 p-3 rounded-lg font-mono text-sm text-center">
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data Properties Reference */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Data Properties Reference</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4 text-slate-700">Optional Properties</h3>
              <div className="space-y-3">
                {[
                  { prop: 'label', desc: 'Text label for the checkbox', type: 'string', default: 'undefined' },
                  { prop: 'checked', desc: 'Controlled checked state', type: 'boolean', default: 'undefined' },
                  { prop: 'defaultChecked', desc: 'Initial checked state (uncontrolled)', type: 'boolean', default: 'false' },
                  { prop: 'onChange', desc: 'Callback when value changes', type: 'function', default: 'undefined' },
                  { prop: 'disabled', desc: 'Disable the checkbox', type: 'boolean', default: 'false' },
                  { prop: 'ariaLabel', desc: 'Accessibility label', type: 'string', default: 'undefined' },
                  { prop: 'ariaLabelledBy', desc: 'Accessibility label reference', type: 'string', default: 'undefined' },
                  { prop: 'ariaDescribedBy', desc: 'Accessibility description reference', type: 'string', default: 'undefined' },
                  { prop: 'ariaInvalid', desc: 'Accessibility invalid state', type: 'boolean', default: 'undefined' },
                  { prop: 'name', desc: 'Form field name', type: 'string', default: 'undefined' },
                  { prop: 'value', desc: 'Form field value', type: 'string', default: 'undefined' },
                  { prop: 'form', desc: 'Form association', type: 'string', default: 'undefined' },
                  { prop: 'tabIndex', desc: 'Tab order index', type: 'number', default: 'undefined' },
                  { prop: 'className', desc: 'Additional CSS classes', type: 'string', default: '""' }
                ].map(({ prop, desc, type, default: defaultValue }) => (
                  <div key={prop} className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
                    <div className="font-mono text-sm font-medium min-w-24">{prop}</div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-700">{desc}</div>
                      <div className="text-xs text-slate-500 mt-1">Type: {type} {defaultValue && `| Default: ${defaultValue}`}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Usage Examples</h2>
          
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-medium mb-4 text-slate-700">Basic Usage</h3>
            <div className="space-y-4">
              <div className="bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`// Basic checkbox
<CheckBox label="Accept terms" />

// With default checked
<CheckBox label="Subscribe" defaultChecked={true} />

// Controlled checkbox
const [accepted, setAccepted] = useState(false);
<CheckBox label="Accept terms" checked={accepted} onChange={setAccepted} />

// Tone variants
<CheckBox primary label="Primary option" />
<CheckBox success label="Success option" />
<CheckBox danger label="Danger option" />

// Size variants
<CheckBox xs label="Extra small" />
<CheckBox sm label="Small" />
<CheckBox md label="Medium" />
<CheckBox lg label="Large" />

// Shape variants
<CheckBox square label="Square checkbox" />
<CheckBox rounded label="Rounded checkbox" />
<CheckBox pill label="Pill checkbox" />

// Interaction effects
<CheckBox hoverScale focusRing label="Interactive" />
<CheckBox pressShrink hoverGlow label="Animated" />

// Label positioning
<CheckBox labelLeft label="Left label" />
<CheckBox labelRight label="Right label" />
<CheckBox labelTop label="Top label" />
<CheckBox labelBottom label="Bottom label" />

// Label styling
<CheckBox labelBold label="Bold label" />
<CheckBox labelUppercase label="UPPERCASE" />
<CheckBox labelItalic label="Italic label" />

// State variants
<CheckBox loading label="Loading state" />
<CheckBox readonly label="Readonly state" />
<CheckBox disabled label="Disabled state" />

// Complex combinations
<CheckBox lg primary rounded hoverScale focusRing label="Premium feature" />
<CheckBox sm danger square pressShrink label="Delete action" />
<CheckBox md success pill hoverGlow focusGlow label="Enable notifications" />`}</pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
