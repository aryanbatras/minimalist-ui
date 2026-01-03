import { DocsLayout } from "../../layout/DocsLayout.jsx";
import { Slider } from "../../../signal-layers";
import { useState } from "react";

export function SliderPage() {
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
    return `<Slider ${signalNames} ${propNames} />`;
  };

  const CopySlider = ({ signals, props = {} }) => {
    const code = generateCode(signals, props);
    const isCopied = copied === code;

    const handleClick = (e) => {
      e.stopPropagation();
      copyToClipboard(code);
    };
    
    return (
      <div className="group cursor-pointer">
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
          <Slider {...signals} {...props} />
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
        <h1 className="text-7xl font-light mb-8 text-black tracking-tight">Slider</h1>
        <p className="text-xl text-slate-600 mb-20 leading-relaxed">
          Range slider with value bubble and extensive customization. Pure intention.
        </p>

        {/* Advanced Combinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Advanced Combinations</h2>
          <div className="flex flex-wrap lg:grid-cols-3 gap-6">
            <CopySlider signals={{lg: true, primary: true, bubbleLg: true, bubblePill: true}} props={{defaultValue: 30}} />
            <CopySlider signals={{xl: true, neutral: true, bubbleXl: true, bubbleSharp: true}} props={{defaultValue: 50}} />
            <CopySlider signals={{lg: true, primary: true, square: true, bubbleMd: true, bubbleSquare: true}} props={{defaultValue: 70}} />
            <CopySlider signals={{xl: true, centered: true, bubbleLg: true, bubbleFlat: true}} props={{defaultValue: 40}} />
            <CopySlider signals={{lg: true, primary: true, pill: true, bubbleSm: true, bubblePill: true}} props={{defaultValue: 60}} />
            <CopySlider signals={{xl: true, block: true, neutral: true, bubbleXl: true, bubbleSquare: true}} props={{defaultValue: 80}} />
          </div>
        </section>

        {/* Bubble Variants - Value Popup */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Bubble Variants - Value Popup</h2>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <p className="text-slate-600 mb-6">The bubble is the value popup that appears when you drag the slider. It shows the current value and can be customized in size and shape.</p>
            
            <h3 className="text-lg font-medium mb-4">Bubble Size</h3>
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Slider lg bubbleXs defaultValue={30} />
                <p className="text-xs text-slate-500 mt-2">bubbleXs</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Slider lg bubbleSm defaultValue={40} />
                <p className="text-xs text-slate-500 mt-2">bubbleSm</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Slider lg bubbleMd defaultValue={50} />
                <p className="text-xs text-slate-500 mt-2">bubbleMd</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Slider lg bubbleLg defaultValue={60} />
                <p className="text-xs text-slate-500 mt-2">bubbleLg</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Slider lg bubbleXl defaultValue={70} />
                <p className="text-xs text-slate-500 mt-2">bubbleXl</p>
              </div>
            </div>

            <h3 className="text-lg font-medium mb-4">Bubble Shape</h3>
            <div className="flex flex-wrap gap-6">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Slider lg bubbleSquare defaultValue={30} />
                <p className="text-xs text-slate-500 mt-2">bubbleSquare</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Slider lg bubblePill defaultValue={40} />
                <p className="text-xs text-slate-500 mt-2">bubblePill</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Slider lg bubbleFlat defaultValue={50} />
                <p className="text-xs text-slate-500 mt-2">bubbleFlat</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Slider lg bubbleSharp defaultValue={60} />
                <p className="text-xs text-slate-500 mt-2">bubbleSharp</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tone Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Tone Variants</h2>
          <div className="flex flex-wrap gap-6">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <Slider lg defaultValue={30} />
              <p className="text-xs text-slate-500 mt-2">Default</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <Slider lg primary defaultValue={50} />
              <p className="text-xs text-slate-500 mt-2">primary</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <Slider lg neutral defaultValue={70} />
              <p className="text-xs text-slate-500 mt-2">neutral</p>
            </div>
          </div>
        </section>

        {/* State Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">State Variants</h2>
          <div className="flex flex-wrap gap-6">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <Slider lg defaultValue={30} />
              <p className="text-xs text-slate-500 mt-2">Default</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <Slider lg disabled defaultValue={50} />
              <p className="text-xs text-slate-500 mt-2">disabled</p>
            </div>
          </div>
        </section>

        {/* Interactive Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Interactive Examples</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Volume Control</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-600 w-12">🔇</span>
                  <Slider lg primary defaultValue={50} min={0} max={100} step={1} ariaLabel="Volume" />
                  <span className="text-sm text-slate-600 w-12">🔊</span>
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Slider lg primary defaultValue={50} min={0} max={100} step={1} ariaLabel="Volume" />`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Brightness Control</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-600">🌙</span>
                  <Slider xl neutral defaultValue={75} min={0} max={100} step={5} ariaLabel="Brightness" />
                  <span className="text-sm text-slate-600">☀️</span>
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Slider xl neutral defaultValue={75} min={0} max={100} step={5} ariaLabel="Brightness" />`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Price Range Filter</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-600">$0</span>
                  <Slider lg primary bubbleLg defaultValue={250} min={0} max={1000} step={50} ariaLabel="Price Range" />
                  <span className="text-sm text-slate-600">$1000</span>
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Slider lg primary bubbleLg defaultValue={250} min={0} max={1000} step={50} ariaLabel="Price Range" />`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Signal Reference */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Signal Reference</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              // Size
              'xs', 'sm', 'md', 'lg', 'xl',
              // Bubble Size
              'bubbleXs', 'bubbleSm', 'bubbleMd', 'bubbleLg', 'bubbleXl',
              // Bubble Shape
              'bubbleSquare', 'bubblePill', 'bubbleFlat', 'bubbleSharp',
              // Tone
              'primary', 'neutral',
              // Shape
              'square', 'pill',
              // Layout
              'inline', 'block', 'centered',
              // State
              'disabled'
            ].map((signal) => (
              <div key={signal} className="bg-slate-50 p-3 rounded-lg font-mono text-sm text-center">
                {signal}
              </div>
            ))}
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
                  { prop: 'min', desc: 'Minimum value of the slider', type: 'number', default: '0' },
                  { prop: 'max', desc: 'Maximum value of the slider', type: 'number', default: '100' },
                  { prop: 'step', desc: 'Increment/decrement step value', type: 'number', default: '1' },
                  { prop: 'value', desc: 'Current value of the slider (controlled)', type: 'number', default: 'undefined' },
                  { prop: 'defaultValue', desc: 'Initial value of the slider (uncontrolled)', type: 'number', default: '0' },
                  { prop: 'onChange', desc: 'Callback function when value changes', type: '(value: number) => void', default: 'undefined' },
                  { prop: 'ariaLabel', desc: 'Accessibility label for screen readers', type: 'string', default: 'undefined' },
                  { prop: 'className', desc: 'Additional CSS classes for the slider container', type: 'string', default: '""' }
                ].map(({ prop, desc, type, default: defaultValue }) => (
                  <div key={prop} className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
                    <div className="font-mono text-sm font-medium min-w-20">{prop}</div>
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
                <pre className="break-all">{`// Uncontrolled slider
<Slider defaultValue={50} />

// Controlled slider
const [value, setValue] = useState(25);
<Slider value={value} onChange={setValue} />

// With custom range
<Slider min={0} max={200} step={10} defaultValue={75} />

// With styling
<Slider lg primary bubbleLg defaultValue={30} ariaLabel="Volume" />`}</pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
