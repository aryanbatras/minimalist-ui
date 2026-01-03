import { DocsLayout } from "../../layout/DocsLayout.jsx";
import { ProgressBar } from "../../../signal-layers";
import { useState } from "react";

export function ProgressBarPage() {
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
    return `<ProgressBar ${signalNames} ${propNames} />`;
  };

  const CopyProgressBar = ({ signals, props = {} }) => {
    const code = generateCode(signals, props);
    const isCopied = copied === code;

    const handleClick = (e) => {
      e.stopPropagation();
      copyToClipboard(code);
    };
    
    return (
      <div className="group cursor-pointer">
        <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
          <ProgressBar {...signals} {...props} />
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
        <h1 className="text-7xl font-light mb-8 text-black tracking-tight">Progress Bar</h1>
        <p className="text-xl text-slate-600 mb-20 leading-relaxed">
          Customizable progress bar with various themes, sizes, and layouts. Pure intention.
        </p>

        {/* Signal Combinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Signal Combinations</h2>
          <div className="flex flex-wrap gap-4">
            <CopyProgressBar signals={{lg: true, primary: true, square: true}} props={{value: 75}} />
            <CopyProgressBar signals={{xl: true, success: true, centered: true}} props={{value: 90}} />
            <CopyProgressBar signals={{md: true, danger: true, square: true}} props={{value: 30}} />
            <CopyProgressBar signals={{sm: true, primary: true, inline: true}} props={{value: 45}} />
          </div>
        </section>

        {/* Size Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Size Variants</h2>
          <div className="flex flex-wrap gap-4">
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
              <ProgressBar xs value={60} />
              <p className="text-xs text-slate-500 mt-2 ml-4">xs</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
              <ProgressBar sm value={60} />
              <p className="text-xs text-slate-500 mt-2 ml-4">sm</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
              <ProgressBar md value={60} />
              <p className="text-xs text-slate-500 mt-2 ml-4">md</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
              <ProgressBar lg value={60} />
              <p className="text-xs text-slate-500 mt-2 ml-4">lg</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
              <ProgressBar xl value={60} />
              <p className="text-xs text-slate-500 mt-2 ml-4">xl</p>
            </div>
          </div>
        </section>

        {/* Tone Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Tone Variants</h2>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <p className="text-slate-600 mb-6">Color schemes for different states and contexts.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
                <ProgressBar md value={60} />
                <p className="text-xs text-slate-500 mt-2 ml-4">Default</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
                <ProgressBar md primary value={60} />
                <p className="text-xs text-slate-500 mt-2 ml-4">primary</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
                <ProgressBar md success value={60} />
                <p className="text-xs text-slate-500 mt-2 ml-4">success</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
                <ProgressBar md danger value={60} />
                <p className="text-xs text-slate-500 mt-2 ml-4">danger</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
                <ProgressBar md neutral value={60} />
                <p className="text-xs text-slate-500 mt-2 ml-4">neutral</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
                <ProgressBar md transparent value={60} />
                <p className="text-xs text-slate-500 mt-2 ml-4">transparent</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shape Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Shape Variants</h2>
          <div className="flex flex-wrap gap-4">
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
              <ProgressBar md value={60} />
              <p className="text-xs text-slate-500 mt-2 ml-4">Default (Rounded)</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center min-h-[100px]">
              <ProgressBar md square value={60} />
              <p className="text-xs text-slate-500 mt-2 ml-4">square</p>
            </div>
          </div>
        </section>

        {/* Real-World Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Real-World Examples</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">File Upload Progress</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">document.pdf</span>
                    <span className="text-sm text-slate-500">75%</span>
                  </div>
                  <ProgressBar responsive primary value={75} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">image.jpg</span>
                    <span className="text-sm text-slate-500">100%</span>
                  </div>
                  <ProgressBar responsive success value={100} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">video.mp4</span>
                    <span className="text-sm text-slate-500">30%</span>
                  </div>
                  <ProgressBar responsive value={30} />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<div className="space-y-2">
  <div className="flex items-center justify-between">
    <span className="text-sm font-medium text-slate-700">document.pdf</span>
    <span className="text-sm text-slate-500">75%</span>
  </div>
  <ProgressBar responsive primary value={75} />
</div>`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Form Completion</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Profile Setup</span>
                    <span className="text-sm text-slate-500">60%</span>
                  </div>
                  <ProgressBar lg primary value={60} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Preferences</span>
                    <span className="text-sm text-slate-500">25%</span>
                  </div>
                  <ProgressBar lg neutral value={25} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Security</span>
                    <span className="text-sm text-slate-500">90%</span>
                  </div>
                  <ProgressBar lg success value={90} />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<div className="space-y-2">
  <div className="flex items-center justify-between">
    <span className="text-sm font-medium text-slate-700">Profile Setup</span>
    <span className="text-sm text-slate-500">60%</span>
  </div>
  <ProgressBar lg primary value={60} />
</div>`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Task Progress</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="text-sm font-medium text-slate-700 mb-2">Development</h4>
                    <ProgressBar md primary value={85} />
                    <p className="text-xs text-slate-500 mt-2">85% Complete</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="text-sm font-medium text-slate-700 mb-2">Design</h4>
                    <ProgressBar md success value={100} />
                    <p className="text-xs text-slate-500 mt-2">100% Complete</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="text-sm font-medium text-slate-700 mb-2">Testing</h4>
                    <ProgressBar md danger value={40} />
                    <p className="text-xs text-slate-500 mt-2">40% Complete</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="text-sm font-medium text-slate-700 mb-2">Documentation</h4>
                    <ProgressBar md neutral value={20} />
                    <p className="text-xs text-slate-500 mt-2">20% Complete</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
  <h4 className="text-sm font-medium text-slate-700 mb-2">Development</h4>
  <ProgressBar md primary value={85} />
  <p className="text-xs text-slate-500 mt-2">85% Complete</p>
</div>`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Loading States</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Loading Resources</span>
                    <span className="text-sm text-slate-500">45%</span>
                  </div>
                  <ProgressBar responsive primary value={45} />
                  <p className="text-xs text-slate-500 mt-2">Fetching data from server...</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Processing</span>
                    <span className="text-sm text-slate-500">80%</span>
                  </div>
                  <ProgressBar responsive success value={80} />
                  <p className="text-xs text-slate-500 mt-2">Almost complete...</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Error</span>
                    <span className="text-sm text-slate-500">Failed</span>
                  </div>
                  <ProgressBar responsive danger value={100} />
                  <p className="text-xs text-slate-500 mt-2">Connection timeout</p>
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
  <div className="flex items-center justify-between mb-2">
    <span className="text-sm font-medium text-slate-700">Loading Resources</span>
    <span className="text-sm text-slate-500">45%</span>
  </div>
  <ProgressBar responsive primary value={45} />
  <p className="text-xs text-slate-500 mt-2">Fetching data from server...</p>
</div>`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Skill Levels</h3>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">JavaScript</span>
                    <span className="text-sm text-slate-500">Expert</span>
                  </div>
                  <ProgressBar lg primary value={95} />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">React</span>
                    <span className="text-sm text-slate-500">Advanced</span>
                  </div>
                  <ProgressBar lg primary value={85} />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">CSS</span>
                    <span className="text-sm text-slate-500">Intermediate</span>
                  </div>
                  <ProgressBar lg neutral value={70} />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Python</span>
                    <span className="text-sm text-slate-500">Beginner</span>
                  </div>
                  <ProgressBar lg danger value={30} />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<div className="space-y-3">
  <div className="flex items-center justify-between">
    <span className="text-sm font-medium text-slate-700">JavaScript</span>
    <span className="text-sm text-slate-500">Expert</span>
  </div>
  <ProgressBar lg primary value={95} />
</div>`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Signal Reference */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Signal Reference</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              // Shape
              'square',
              // Tone
              'primary', 'success', 'danger', 'neutral', 'transparent',
              // Size
              'xs', 'sm', 'md', 'lg', 'xl', 'responsive',
              // Layout
              'inline', 'block', 'centered'
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
                  { prop: 'value', desc: 'Current progress value (0-100)', type: 'number', default: '0' },
                  { prop: 'max', desc: 'Maximum value for progress calculation', type: 'number', default: '100' },
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
                <pre className="break-all">{`// Default progress bar
<ProgressBar value={75} />

// Size variants
<ProgressBar xs value={60} />
<ProgressBar sm value={60} />
<ProgressBar md value={60} />
<ProgressBar lg value={60} />
<ProgressBar xl value={60} />
<ProgressBar responsive value={60} />

// Tone variants
<ProgressBar primary value={75} />
<ProgressBar success value={90} />
<ProgressBar danger value={30} />
<ProgressBar neutral value={50} />
<ProgressBar transparent value={40} />

// Shape variants
<ProgressBar square value={60} />

// Layout variants
<ProgressBar inline value={60} />
<ProgressBar block value={60} />
<ProgressBar centered value={60} />

// Custom max value
<ProgressBar value={75} max={200} />

// Combinations
<ProgressBar lg primary square value={85} />
<ProgressBar responsive success centered value={100} />
<ProgressBar sm danger inline value={45} />`}</pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
