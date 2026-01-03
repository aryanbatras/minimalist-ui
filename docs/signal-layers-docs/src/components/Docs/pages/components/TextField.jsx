import { DocsLayout } from "../../layout/DocsLayout.jsx";
import { TextField } from "../../../signal-layers";
import { useState } from "react";

export function TextFieldPage() {
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

  const generateCode = (signals, label, type = 'text') => {
    const signalNames = Object.keys(signals)
      .filter(key => signals[key])
      .map(key => key === '2xl' ? '"2xl"' : key)
      .join(' ');
    return `<TextField type="${type}" ${signalNames} label="${label}" />`;
  };

  const CopyField = ({ signals, label, type = 'text' }) => {
    const code = generateCode(signals, label, type);
    const isCopied = copied === code;

    const handleClick = (e) => {
      e.stopPropagation();
      copyToClipboard(code);
    };
    
    return (
      <div className="group cursor-pointer">
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
          <TextField type={type} {...signals} label={label} />
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
        <h1 className="text-7xl font-light mb-8 text-black tracking-tight">TextField</h1>
        <p className="text-xl text-slate-600 mb-20 leading-relaxed">
          Infinite signal combinations. Pure intention.
        </p>

        {/* Style Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Style Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CopyField signals={{outline: true}} label="Outline" />
            <CopyField signals={{fill: true}} label="Fill" />
            <CopyField signals={{underline: true}} label="Underline" />
          </div>
        </section>

        {/* Tone/Visual Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Tone/Visual Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CopyField signals={{primary: true, outline: true}} label="Primary" />
            <CopyField signals={{neutral: true, outline: true}} label="Neutral" />
            <CopyField signals={{danger: true, outline: true}} label="Danger" />
          </div>
        </section>

        {/* Enterprise Form Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Enterprise Form Examples</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">User Registration</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="text" primary outline label="Full Name" />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="email" primary outline label="Email Address" />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="password" primary outline label="Password" />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="text" primary outline label="Company" />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className=" break-all">{`<TextField type="text" primary outline label="Full Name" />
<TextField type="email" primary outline label="Email Address" />
<TextField type="password" primary outline label="Password" />
<TextField type="text" primary outline label="Company" />`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Payment Processing</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="number" neutral outline label="Card Number" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <TextField type="date" neutral outline label="MM/YY" />
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <TextField type="number" neutral outline label="CVV" />
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className=" break-all">{`<TextField type="number" neutral outline label="Card Number" />
<TextField type="date" neutral outline label="MM/YY" />
<TextField type="number" neutral outline label="CVV" />`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Number Input Examples</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="number" primary outline label="Age" />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="number" primary outline label="Quantity" />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="number" primary outline label="Price" />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className=" break-all">{`<TextField type="number" primary outline label="Age" min={18} max={100} />
<TextField type="number" primary outline label="Quantity" min={1} step={1} />
<TextField type="number" primary outline label="Price" min={0} step={0.01} />`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Size Variations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Size Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <CopyField signals={{xs: true, outline: true}} label="Extra Small" type="text" />
            <CopyField signals={{sm: true, outline: true}} label="Small" type="text" />
            <CopyField signals={{md: true, outline: true}} label="Medium" type="text" />
            <CopyField signals={{lg: true, outline: true}} label="Large" type="text" />
            <CopyField signals={{xl: true, outline: true}} label="Extra Large" type="text" />
          </div>
        </section>

        {/* Layout Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Layout Variants</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Inline Layout</h3>
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-600">Name:</span>
                <div className="flex-1 max-w-xs">
                  <TextField type="text" inline outline label="Enter name" />
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Full Width</h3>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <TextField type="text" full outline label="Full width input" />
              </div>
            </div>
          </div>
        </section>

        {/* State Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">State Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CopyField signals={{disabled: true, outline: true}} label="Disabled" type="text" />
            <CopyField signals={{readonly: true, outline: true}} label="Read Only" type="text" />
            <CopyField signals={{invalid: true, outline: true}} label="Invalid" type="text" />
          </div>
        </section>

        {/* Validation Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Validation & Error States</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Required Field Validation</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="email" primary outline label="Email Address" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="password" primary outline label="Password" required pattern=".{8,}" />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className=" break-all">{`<TextField type="email" primary outline label="Email Address" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" />
<TextField type="password" primary outline label="Password" required pattern=".{8,}" />`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Pattern Validation</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="text" primary outline label="Phone Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="text" primary outline label="Postal Code" pattern="[A-Za-z]{2}[0-9]{4}" />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className=" break-all">{`<TextField type="text" primary outline label="Phone Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
<TextField type="text" primary outline label="Postal Code" pattern="[A-Za-z]{2}[0-9]{4}" />`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Number Validation with Constraints</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="number" primary outline label="Age (18-100)" min={18} max={100} />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="number" primary outline label="Quantity (1-10)" min={1} max={10} />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className=" break-all">{`<TextField type="number" primary outline label="Age (18-100)" min={18} max={100} />
<TextField type="number" primary outline label="Quantity (1-10)" min={1} max={10} />`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Custom Error Messages</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="email" primary outline label="Email Address" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" errorMsg="Please enter a valid email address" />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="password" primary outline label="Password" pattern=".{8,}" errorMsg="Password must be at least 8 characters" />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className=" break-all">{`<TextField type="email" primary outline label="Email Address" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" errorMsg="Please enter a valid email address" />
<TextField type="password" primary outline label="Password" pattern=".{8,}" errorMsg="Password must be at least 8 characters" />`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Shape Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Shape Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CopyField signals={{square: true, outline: true}} label="Square" type="text" />
            <CopyField signals={{outline: true}} label="Rounded (Default)" type="text" />
          </div>
        </section>

        {/* Advanced Combinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Advanced Signal Combinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CopyField signals={{primary: true, outline: true, lg: true}} label="Primary Large" type="text" />
            <CopyField signals={{danger: true, fill: true, md: true}} label="Danger Fill Medium" type="text" />
            <CopyField signals={{neutral: true, underline: true, full: true}} label="Neutral Full Underline" type="text" />
            <CopyField signals={{primary: true, outline: true, square: true, xl: true}} label="Primary Square XL" type="text" />
            <CopyField signals={{danger: true, outline: true, readonly: true}} label="Danger Readonly" type="text" />
            <CopyField signals={{neutral: true, fill: true, disabled: true}} label="Neutral Disabled Fill" type="text" />
          </div>
        </section>

        {/* Contact Form Example */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Complete Contact Form</h2>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="text" primary outline label="First Name" required pattern="[A-Za-z]{2,}" />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <TextField type="text" primary outline label="Last Name" required pattern="[A-Za-z]{2,}" />
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <TextField type="email" primary outline full label="Email Address" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" />
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <TextField type="text" primary outline full label="Subject" required pattern=".{5,}" />
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <TextField type="text" primary outline full label="Message" required pattern=".{10,}" />
              </div>
            </div>
            <div className="mt-6 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
              <pre className=" break-all">{`<div className="grid grid-cols-2 gap-6">
  <TextField type="text" primary outline label="First Name" required pattern="[A-Za-z]{2,}" />
  <TextField type="text" primary outline label="Last Name" required pattern="[A-Za-z]{2,}" />
</div>
<TextField type="email" primary outline full label="Email Address" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" />
<TextField type="text" primary outline full label="Subject" required pattern=".{5,}" />
<TextField type="text" primary outline full label="Message" required pattern=".{10,}" />`}</pre>
            </div>
          </div>
        </section>

        {/* Search Interface Example */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Search Interface</h2>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <TextField type="text" neutral outline full lg label="Search products, categories, brands..." />
            </div>
            <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
              <pre className=" break-all">{`<TextField type="text" neutral outline full lg label="Search products..." />`}</pre>
            </div>
          </div>
        </section>

        {/* Signal Reference */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Signal Reference</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              // Style
              'outline', 'fill', 'underline',
              // Size
              'xs', 'sm', 'md', 'lg', 'xl',
              // Tone
              'primary', 'neutral', 'danger',
              // Shape
              'square',
              // Layout
              'inline', 'block', 'full',
              // State
              'disabled', 'readonly', 'invalid'
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
              <h3 className="text-lg font-medium mb-4 text-slate-700">Core Properties</h3>
              <div className="space-y-3">
                {[
                  { prop: 'label', desc: 'Floating label text', type: 'string' },
                  { prop: 'value', desc: 'Controlled value', type: 'string | number' },
                  { prop: 'defaultValue', desc: 'Initial uncontrolled value', type: 'string | number' },
                  { prop: 'placeholder', desc: 'Placeholder text', type: 'string' },
                  { prop: 'name', desc: 'Form field name', type: 'string' }
                ].map(({ prop, desc, type }) => (
                  <div key={prop} className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
                    <div className="font-mono text-sm font-medium min-w-20">{prop}</div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-700">{desc}</div>
                      <div className="text-xs text-slate-500 mt-1">Type: {type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4 text-slate-700">Input Type & Validation</h3>
              <div className="space-y-3">
                {[
                  { prop: 'type', desc: 'Input type (text, email, password, number, etc.)', type: 'string', default: 'text' },
                  { prop: 'required', desc: 'Required field validation', type: 'boolean', default: 'false' },
                  { prop: 'pattern', desc: 'Regex pattern for validation', type: 'string' },
                  { prop: 'min', desc: 'Minimum value (for number type)', type: 'number' },
                  { prop: 'max', desc: 'Maximum value (for number type)', type: 'number' },
                  { prop: 'step', desc: 'Step increment (for number type)', type: 'number' }
                ].map(({ prop, desc, type, default: defaultValue }) => (
                  <div key={prop} className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
                    <div className="font-mono text-sm font-medium min-w-20">{prop}</div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-700">{desc}</div>
                      <div className="text-xs text-slate-500 mt-1">Type: {type}{defaultValue && ` | Default: ${defaultValue}`}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4 text-slate-700">State & Messages</h3>
              <div className="space-y-3">
                {[
                  { prop: 'disabled', desc: 'Disable the input', type: 'boolean', default: 'false' },
                  { prop: 'readOnly', desc: 'Make input read-only', type: 'boolean', default: 'false' },
                  { prop: 'errorMsg', desc: 'Custom error message', type: 'string' },
                  { prop: 'hintMsg', desc: 'Helper hint message (shows on focus)', type: 'string' },
                  { prop: 'ariaLabel', desc: 'Accessibility label', type: 'string' }
                ].map(({ prop, desc, type, default: defaultValue }) => (
                  <div key={prop} className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
                    <div className="font-mono text-sm font-medium min-w-20">{prop}</div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-700">{desc}</div>
                      <div className="text-xs text-slate-500 mt-1">Type: {type}{defaultValue && ` | Default: ${defaultValue}`}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4 text-slate-700">Event Handlers</h3>
              <div className="space-y-3">
                {[
                  { prop: 'onChange', desc: 'Called when value changes', type: '(value: string) => void' },
                  { prop: 'onFocus', desc: 'Called when input gains focus', type: '(value: string) => void' },
                  { prop: 'onBlur', desc: 'Called when input loses focus', type: '(value: string) => void' }
                ].map(({ prop, desc, type }) => (
                  <div key={prop} className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
                    <div className="font-mono text-sm font-medium min-w-20">{prop}</div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-700">{desc}</div>
                      <div className="text-xs text-slate-500 mt-1">Type: {type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4 text-slate-700">Styling</h3>
              <div className="space-y-3">
                {[
                  { prop: 'className', desc: 'Additional CSS classes', type: 'string', default: '""' }
                ].map(({ prop, desc, type, default: defaultValue }) => (
                  <div key={prop} className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
                    <div className="font-mono text-sm font-medium min-w-20">{prop}</div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-700">{desc}</div>
                      <div className="text-xs text-slate-500 mt-1">Type: {type}{defaultValue && ` | Default: ${defaultValue}`}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
