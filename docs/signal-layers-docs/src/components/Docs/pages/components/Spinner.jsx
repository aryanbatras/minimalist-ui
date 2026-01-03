import { DocsLayout } from "../../layout/DocsLayout.jsx";
import { Spinner } from "../../../signal-layers";
import { useState } from "react";

export function SpinnerPage() {
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
    return `<Spinner ${signalNames} ${propNames} />`;
  };

  const CopySpinner = ({ signals, props = {} }) => {
    const code = generateCode(signals, props);
    const isCopied = copied === code;

    const handleClick = (e) => {
      e.stopPropagation();
      copyToClipboard(code);
    };
    
    return (
      <div className="group cursor-pointer">
        <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
          <Spinner {...signals} {...props} />
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
        <h1 className="text-7xl font-light mb-8 text-black tracking-tight">Spinner</h1>
        <p className="text-xl text-slate-600 mb-20 leading-relaxed">
          Loading spinner with customizable size, color, border thickness, and animation speed. Pure intention.
        </p>

        {/* Signal Combinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Signal Combinations</h2>
          <div className="flex flex-wrap gap-4">
            <CopySpinner signals={{xl: true, primary: true, thick: true, spinSlow: true}} />
            <CopySpinner signals={{lg: true, danger: true, spinFast: true, centered: true}} />
            <CopySpinner signals={{xl: true, primary: true, thick: true, spinFast: true, block: true}} />
            <CopySpinner signals={{sm: true, danger: true, pause: true, inline: true}} />
          </div>
        </section>

        {/* Size Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Size Variants</h2>
          <div className="flex flex-wrap gap-4">
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
              <Spinner xs />
              <p className="text-xs text-slate-500 mt-2 ml-4">xs</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
              <Spinner sm />
              <p className="text-xs text-slate-500 mt-2 ml-4">sm</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
              <Spinner md />
              <p className="text-xs text-slate-500 mt-2 ml-4">md</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
              <Spinner lg />
              <p className="text-xs text-slate-500 mt-2 ml-4">lg</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
              <Spinner xl />
              <p className="text-xs text-slate-500 mt-2 ml-4">xl</p>
            </div>
          </div>
        </section>

        {/* Color Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Color Variants</h2>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <p className="text-slate-600 mb-6">Color schemes for different contexts and backgrounds.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
                <Spinner md />
                <p className="text-xs text-slate-500 mt-2 ml-4">Default</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
                <Spinner md primary />
                <p className="text-xs text-slate-500 mt-2 ml-4">primary</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
                <Spinner md danger />
                <p className="text-xs text-slate-500 mt-2 ml-4">danger</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
                <Spinner xl thick light/>
                <p className="text-xs text-slate-500 mt-2 ml-4">light</p>
              </div>
            </div>
          </div>
        </section>

        {/* Border Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Border Variants</h2>
          <div className="flex flex-wrap gap-4">
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
              <Spinner md thin />
              <p className="text-xs text-slate-500 mt-2 ml-4">thin</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
              <Spinner md thick />
              <p className="text-xs text-slate-500 mt-2 ml-4">thick</p>
            </div>
          </div>
        </section>

        {/* Animation Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Animation Variants</h2>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <p className="text-slate-600 mb-6">Control the spinning speed and state for different loading scenarios.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
                <Spinner md />
                <p className="text-xs text-slate-500 mt-2 ml-4">Default</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
                <Spinner md spinSlow />
                <p className="text-xs text-slate-500 mt-2 ml-4">spinSlow</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
                <Spinner md spinFast />
                <p className="text-xs text-slate-500 mt-2 ml-4">spinFast</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
                <Spinner md pause />
                <p className="text-xs text-slate-500 mt-2 ml-4">pause</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visibility Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Visibility Variants</h2>
          <div className="flex flex-wrap gap-6">
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
              <Spinner md />
              <p className="text-xs text-slate-500 mt-2 ml-4">Default</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
              <Spinner md transparent />
              <p className="text-xs text-slate-500 mt-2 ml-4">transparent</p>
            </div>
          </div>
        </section>

        {/* Real-World Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Real-World Examples</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Button Loading States</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2">
                    <Spinner sm light />
                    Loading...
                  </button>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2">
                    <Spinner sm light />
                    Processing...
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg flex items-center gap-2">
                    <Spinner sm light />
                    Deleting...
                  </button>
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<button className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2">
  <Spinner sm light />
  Loading...
</button>`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Card Loading States</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-center h-32">
                      <Spinner md primary />
                    </div>
                    <p className="text-center text-sm text-slate-600 mt-2">Loading content...</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-center h-32">
                      <Spinner lg danger spinSlow />
                    </div>
                    <p className="text-center text-sm text-slate-600 mt-2">Error loading...</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-center h-32">
                      <Spinner xl light spinFast />
                    </div>
                    <p className="text-center text-sm text-slate-600 mt-2">Processing...</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
  <div className="flex items-center justify-center h-32">
    <Spinner md primary />
  </div>
  <p className="text-center text-sm text-slate-600 mt-2">Loading content...</p>
</div>`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Page Loading States</h3>
              <div className="space-y-4">
                <div className="p-8 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex flex-col items-center justify-center">
                    <Spinner xl primary spinSlow />
                    <p className="text-lg text-slate-700 mt-4">Loading application...</p>
                    <p className="text-sm text-slate-500 mt-2">Please wait while we prepare your workspace</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<div className="flex flex-col items-center justify-center">
  <Spinner xl primary spinSlow />
  <p className="text-lg text-slate-700 mt-4">Loading application...</p>
  <p className="text-sm text-slate-500 mt-2">Please wait while we prepare your workspace</p>
</div>`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Form Loading States</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-700">Username</label>
                      <div className="w-32 h-8 bg-slate-200 rounded flex items-center justify-center">
                        <Spinner xs />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-700">Email</label>
                      <div className="w-32 h-8 bg-slate-200 rounded flex items-center justify-center">
                        <Spinner xs />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-700">Status</label>
                      <div className="w-32 h-8 bg-slate-200 rounded flex items-center justify-center">
                        <Spinner xs primary />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<div className="flex items-center justify-between">
  <label className="text-sm font-medium text-slate-700">Username</label>
  <div className="w-32 h-8 bg-slate-200 rounded flex items-center justify-center">
    <Spinner xs />
  </div>
</div>`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Table Loading States</h3>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left">Name</th>
                        <th className="border border-slate-200 px-4 py-2 text-left">Status</th>
                        <th className="border border-slate-200 px-4 py-2 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          <div className="flex items-center gap-2">
                            <Spinner sm />
                            <span className="text-slate-400">Loading...</span>
                          </div>
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          <div className="flex items-center gap-2">
                            <Spinner sm primary />
                            <span className="text-slate-400">Checking...</span>
                          </div>
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          <div className="flex items-center gap-2">
                            <Spinner sm danger />
                            <span className="text-slate-400">Processing...</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<td className="border border-slate-200 px-4 py-2">
  <div className="flex items-center gap-2">
    <Spinner sm primary />
    <span className="text-slate-400">Checking...</span>
  </div>
</td>`}</pre>
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
              // Color
              'light', 'primary', 'danger',
              // Border
              'thin', 'thick',
              // Animation
              'spinSlow', 'spinFast', 'pause',
              // Layout
              'inline', 'block', 'centered',
              // Visibility
              'transparent'
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
                  { prop: 'ariaLabel', desc: 'Accessibility label for screen readers', type: 'string', default: '"loading"' },
                  { prop: 'className', desc: 'Additional CSS classes', type: 'string', default: '""' }
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
                <pre className="break-all">{`// Default spinner
<Spinner />

// Size variants
<Spinner xs />
<Spinner sm />
<Spinner md />
<Spinner lg />
<Spinner xl />

// Color variants
<Spinner light />
<Spinner primary />
<Spinner danger />

// Animation variants
<Spinner spinSlow />
<Spinner spinFast />
<Spinner pause />

// Border variants
<Spinner thin />
<Spinner thick />

// Layout variants
<Spinner inline />
<Spinner block />
<Spinner centered />

// Visibility variants
<Spinner transparent />

// Combinations
<Spinner xl primary thick spinSlow centered />
<Spinner sm danger spinFast inline />
<Spinner lg light thin transparent block />`}</pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
