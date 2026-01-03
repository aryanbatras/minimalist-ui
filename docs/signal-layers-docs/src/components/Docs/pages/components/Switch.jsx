import { DocsLayout } from "../../layout/DocsLayout.jsx";
import { Switch } from "../../../signal-layers";
import { useState } from "react";

export function SwitchPage() {
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
    // Always include onClick handler
    const onClickHandler = props.onClick ? '' : ' onClick={(checked) => console.log("Switch:", checked)}';
    return `<Switch ${signalNames} ${propNames}${onClickHandler} />`;
  };

  const CopySwitch = ({ signals, props = {} }) => {
    const code = generateCode(signals, props);
    const isCopied = copied === code;

    const handleClick = (e) => {
      e.stopPropagation();
      copyToClipboard(code);
    };
    
    return (
      <div className="group cursor-pointer">
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
          <Switch {...signals} {...props} />
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
        <h1 className="text-7xl font-light mb-8 text-black tracking-tight">Switch</h1>
        <p className="text-xl text-slate-600 mb-20 leading-relaxed">
          Toggle switch with customizable size, shape, and label positioning. Pure intention.
        </p>

        {/* Signal Combinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Signal Combinations</h2>
          <div className="flex flex-wrap gap-6">
            <CopySwitch signals={{xl: true, square: true, labelTop: true}} props={{label: "Advanced Mode", defaultChecked: true, onClick: (checked) => console.log("Advanced Mode:", checked)}} />
            <CopySwitch signals={{md: true, pill: true, labelLeft: true}} props={{label: "Premium Features", defaultChecked: false, onClick: (checked) => console.log("Premium Features:", checked)}} />
            <CopySwitch signals={{xl: true, square: true, labelBottom: true}} props={{label: "Experimental Features", defaultChecked: true, onClick: (checked) => console.log("Experimental Features:", checked)}} />
            <CopySwitch signals={{lg: true, pill: true, labelRight: true}} props={{label: "Auto-save", defaultChecked: true, onClick: (checked) => console.log("Auto-save:", checked)}} />
            <CopySwitch signals={{md: true, square: true, labelTop: true}} props={{label: "Beta Access", defaultChecked: false, onClick: (checked) => console.log("Beta Access:", checked)}} />
            <CopySwitch signals={{sm: true, pill: true, labelLeft: true}} props={{label: "Quick Mode", defaultChecked: true, onClick: (checked) => console.log("Quick Mode:", checked)}} />
          </div>
        </section>

        {/* Size Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Size Variants</h2>
          <div className="flex flex-wrap gap-6">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <Switch xs label="XS" defaultChecked={true} onClick={(checked) => console.log("XS:", checked)} />
              <p className="text-xs text-slate-500 mt-2">xs</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <Switch sm label="SM" defaultChecked={true} onClick={(checked) => console.log("SM:", checked)} />
              <p className="text-xs text-slate-500 mt-2">sm</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <Switch md label="MD" defaultChecked={true} onClick={(checked) => console.log("MD:", checked)} />
              <p className="text-xs text-slate-500 mt-2">md</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <Switch lg label="LG" defaultChecked={true} onClick={(checked) => console.log("LG:", checked)} />
              <p className="text-xs text-slate-500 mt-2">lg</p>
            </div>
          </div>
        </section>

        {/* Shape Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Shape Variants</h2>
          <div className="flex flex-wrap gap-6">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <Switch md label="Default (Pill)" defaultChecked={true} onClick={(checked) => console.log("Default:", checked)} />
              <p className="text-xs text-slate-500 mt-2">Default</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <Switch md square label="Square" defaultChecked={true} onClick={(checked) => console.log("Square:", checked)} />
              <p className="text-xs text-slate-500 mt-2">square</p>
            </div>
          </div>
        </section>

        {/* Label Positioning */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Label Positioning</h2>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <p className="text-slate-600 mb-6">Position labels around the switch for optimal user experience and layout flexibility.</p>
            <div className="flex flex-wrap gap-6">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Switch md labelRight label="Right Label" defaultChecked={true} onClick={(checked) => console.log("Right Label:", checked)} />
                <p className="text-xs text-slate-500 mt-2">labelRight</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Switch md labelLeft label="Left Label" defaultChecked={true} onClick={(checked) => console.log("Left Label:", checked)} />
                <p className="text-xs text-slate-500 mt-2">labelLeft</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Switch md labelTop label="Top Label" defaultChecked={true} onClick={(checked) => console.log("Top Label:", checked)} />
                <p className="text-xs text-slate-500 mt-2">labelTop</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Switch md labelBottom label="Bottom Label" defaultChecked={true} onClick={(checked) => console.log("Bottom Label:", checked)} />
                <p className="text-xs text-slate-500 mt-2">labelBottom</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Switch md labelHidden label="Hidden Label" defaultChecked={true} onClick={(checked) => console.log("Hidden Label:", checked)} />
                <p className="text-xs text-slate-500 mt-2">labelHidden</p>
              </div>
            </div>
          </div>
        </section>

        {/* State Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">State Variants</h2>
          <div className="flex flex-wrap gap-6">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <Switch md label="Default" defaultChecked={false} onClick={(checked) => console.log("Default:", checked)} />
              <p className="text-xs text-slate-500 mt-2">Unchecked</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <Switch md label="Default" defaultChecked={true} onClick={(checked) => console.log("Default:", checked)} />
              <p className="text-xs text-slate-500 mt-2">Checked</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <Switch md label="Disabled" disabled defaultChecked={false} onClick={(checked) => console.log("Disabled:", checked)} />
              <p className="text-xs text-slate-500 mt-2">Disabled Unchecked</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <Switch md label="Disabled" disabled defaultChecked={true} onClick={(checked) => console.log("Disabled:", checked)} />
              <p className="text-xs text-slate-500 mt-2">Disabled Checked</p>
            </div>
          </div>
        </section>

        {/* Real-World Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Real-World Examples</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Settings Panel</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-700">Enable notifications</span>
                  <Switch sm label="Notifications" defaultChecked={true} onClick={(checked) => console.log("Notifications:", checked)} />
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-700">Dark mode</span>
                  <Switch sm label="Dark Mode" onClick={(checked) => console.log("Dark Mode:", checked)} />
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-700">Auto-save</span>
                  <Switch sm label="Auto Save" defaultChecked={true} onClick={(checked) => console.log("Auto Save:", checked)} />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Switch sm label="Notifications" defaultChecked={true} />
<Switch sm label="Dark Mode" />
<Switch sm label="Auto Save" defaultChecked={true} />`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Feature Toggles</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-slate-700">Premium Features</div>
                    <div className="text-xs text-slate-500">Unlock advanced functionality</div>
                  </div>
                  <Switch md square label="Premium" onClick={(checked) => console.log("Premium:", checked)} />
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-slate-700">Beta Access</div>
                    <div className="text-xs text-slate-500">Try experimental features</div>
                  </div>
                  <Switch md pill label="Beta" defaultChecked={true} onClick={(checked) => console.log("Beta:", checked)} />
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-slate-700">Advanced Analytics</div>
                    <div className="text-xs text-slate-500">Detailed insights and reports</div>
                  </div>
                  <Switch md label="Analytics" onClick={(checked) => console.log("Analytics:", checked)} />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Switch md square label="Premium" />
<Switch md pill label="Beta" defaultChecked={true} />
<Switch md label="Analytics" />`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Privacy Controls</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-slate-700">Share Usage Data</div>
                    <div className="text-xs text-slate-500">Help us improve the product</div>
                  </div>
                  <Switch lg labelTop label="Share Data" onClick={(checked) => console.log("Share Data:", checked)} />
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-slate-700">Personalized Ads</div>
                    <div className="text-xs text-slate-500">Show relevant advertisements</div>
                  </div>
                  <Switch lg labelBottom label="Personalized Ads" onClick={(checked) => console.log("Personalized Ads:", checked)} />
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-slate-700">Location Services</div>
                    <div className="text-xs text-slate-500">Allow access to your location</div>
                  </div>
                  <Switch lg labelLeft label="Location" disabled onClick={(checked) => console.log("Location:", checked)} />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Switch lg labelTop label="Share Data" />
<Switch lg labelBottom label="Personalized Ads" />
<Switch lg labelLeft label="Location" disabled />`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Form Controls</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <Switch md label="Agree to Terms" onClick={(checked) => console.log("Agree to Terms:", checked)} />
                  </div>
                  <div className="text-xs text-slate-500">I agree to the terms and conditions</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <Switch md label="Subscribe to Newsletter" defaultChecked={true} onClick={(checked) => console.log("Subscribe to Newsletter:", checked)} />
                  </div>
                  <div className="text-xs text-slate-500">Receive updates and special offers</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <Switch md label="Remember Me" onClick={(checked) => console.log("Remember Me:", checked)} />
                  </div>
                  <div className="text-xs text-slate-500">Keep me signed in on this device</div>
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Switch md label="Agree to Terms" />
<Switch md label="Subscribe to Newsletter" defaultChecked={true} />
<Switch md label="Remember Me" />`}</pre>
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
              'xs', 'sm', 'md', 'lg',
              // Shape
              'square', 'pill',
              // Label Position
              'labelLeft', 'labelRight', 'labelTop', 'labelBottom', 'labelHidden',
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
                  { prop: 'id', desc: 'Unique identifier for the switch', type: 'string', default: 'auto-generated' },
                  { prop: 'label', desc: 'Text label for the switch', type: 'string', default: 'undefined' },
                  { prop: 'name', desc: 'Form field name', type: 'string', default: 'undefined' },
                  { prop: 'value', desc: 'Form field value', type: 'string', default: 'undefined' },
                  { prop: 'checked', desc: 'Controlled checked state', type: 'boolean', default: 'undefined' },
                  { prop: 'defaultChecked', desc: 'Initial checked state (uncontrolled)', type: 'boolean', default: 'false' },
                  { prop: 'disabled', desc: 'Disable the switch', type: 'boolean', default: 'false' },
                  { prop: 'required', desc: 'Mark as required in forms', type: 'boolean', default: 'false' },
                  { prop: 'readOnly', desc: 'Make the switch read-only', type: 'boolean', default: 'false' },
                  { prop: 'aria-label', desc: 'Accessibility label', type: 'string', default: 'undefined' },
                  { prop: 'aria-labelledby', desc: 'Accessibility label reference', type: 'string', default: 'undefined' },
                  { prop: 'aria-describedby', desc: 'Accessibility description reference', type: 'string', default: 'undefined' },
                  { prop: 'aria-invalid', desc: 'Accessibility invalid state', type: 'boolean', default: 'false' },
                  { prop: 'aria-checked', desc: 'Accessibility checked state', type: 'boolean', default: 'undefined' },
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
                <pre className="break-all">{`// Uncontrolled switch
<Switch label="Enable notifications" defaultChecked={true} onClick={(checked) => console.log("Notifications:", checked)} />

// Controlled switch
const [enabled, setEnabled] = useState(false);
<Switch label="Enable notifications" checked={enabled} onChange={setEnabled} onClick={(checked) => console.log("Enabled:", checked)} />

// With custom styling
<Switch lg square labelTop label="Advanced mode" defaultChecked={true} onClick={(checked) => console.log("Advanced mode:", checked)} />

// Disabled state
<Switch md label="Feature unavailable" disabled onClick={(checked) => console.log("Feature unavailable:", checked)} />

// Form integration
<Switch name="newsletter" label="Subscribe" required onClick={(checked) => console.log("Newsletter:", checked)} />`}</pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
