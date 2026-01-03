import { DocsLayout } from "../../layout/DocsLayout.jsx";
import { Dropdown } from "../../../signal-layers";
import { useState } from "react";

export function DropdownPage() {
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

  const generateCode = (signals, menuName, items) => {
    const signalNames = Object.keys(signals)
      .filter(key => signals[key])
      .map(key => key === '2xl' ? '"2xl"' : key)
      .join(' ');
    const itemsArray = items.map(item => 
      item.onItemSelect ? `{label: "${item.label}", onItemSelect: () => alert("${item.label} clicked")}` : `{label: "${item.label}"}`
    ).join(', ');
    return `<Dropdown ${signalNames} menuName="${menuName}" items={[${itemsArray}]} />`;
  };

  const CopyDropdown = ({ signals, menuName, items }) => {
    const code = generateCode(signals, menuName, items);
    const isCopied = copied === code;

    const handleClick = (e) => {
      e.stopPropagation();
      copyToClipboard(code);
    };
    
    return (
      <div className="group cursor-pointer">
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
          <Dropdown {...signals} menuName={menuName} items={items} />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1">
          <span className="text-xs text-slate-400 font-mono" onItemSelect={handleClick}>
            {isCopied ? '✓ Copied' : 'Copy'}
          </span>
        </div>
      </div>
    );
  };

  const basicItems = [
    { label: "Edit", onItemSelect: () => alert("Edit clicked") },
    { label: "Delete", onItemSelect: () => alert("Delete clicked") },
    { label: "Share", onItemSelect: () => alert("Share clicked") }
  ];

  const userActions = [
    { label: "View Profile", onItemSelect: () => alert("View Profile clicked") },
    { label: "Settings", onItemSelect: () => alert("Settings clicked") },
    { label: "Logout", onItemSelect: () => alert("Logout clicked") }
  ];

  const navigationItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Analytics", href: "/analytics" },
    { label: "Reports", href: "/reports" }
  ];

  const filterOptions = [
    { label: "All Items", onItemSelect: () => alert("Filter: All Items") },
    { label: "Active", onItemSelect: () => alert("Filter: Active") },
    { label: "Inactive", onItemSelect: () => alert("Filter: Inactive") },
    { label: "Archived", onItemSelect: () => alert("Filter: Archived") }
  ];

  const exportOptions = [
    { label: "Export as PDF", onItemSelect: () => alert("Export PDF") },
    { label: "Export as Excel", onItemSelect: () => alert("Export Excel") },
    { label: "Export as CSV", onItemSelect: () => alert("Export CSV") },
    { label: "Print", onItemSelect: () => alert("Print") }
  ];

  const languageOptions = [
    { label: "English", onItemSelect: () => alert("Language: English") },
    { label: "Spanish", onItemSelect: () => alert("Language: Spanish") },
    { label: "French", onItemSelect: () => alert("Language: French") },
    { label: "German", onItemSelect: () => alert("Language: German") },
    { label: "Japanese", onItemSelect: () => alert("Language: Japanese") }
  ];

  const themeOptions = [
    { label: "Light Mode", onItemSelect: () => alert("Theme: Light") },
    { label: "Dark Mode", onItemSelect: () => alert("Theme: Dark") },
    { label: "Auto", onItemSelect: () => alert("Theme: Auto") },
    { label: "System Default", onItemSelect: () => alert("Theme: System") }
  ];

  return (
    <DocsLayout>
      <div className="mb-32 max-w-6xl mx-auto px-6">
        <h1 className="text-7xl font-light mb-8 text-black tracking-tight">Dropdown</h1>
        <p className="text-xl text-slate-600 mb-20 leading-relaxed">
          Contextual menus with infinite positioning. Pure intention.
        </p>

        {/* Position Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Position Variants</h2>
          <div className="flex flex-wrap gap-6">
            <CopyDropdown signals={{bottom: true}} menuName="Bottom" items={basicItems} />
            <CopyDropdown signals={{top: true}} menuName="Top" items={basicItems} />
            <CopyDropdown signals={{right: true}} menuName="Right" items={basicItems} />
            <CopyDropdown signals={{left: true}} menuName="Left" items={basicItems} />
            <CopyDropdown signals={{center: true}} menuName="Center" items={basicItems} />
            <CopyDropdown signals={{start: true}} menuName="Start" items={basicItems} />
            <CopyDropdown signals={{end: true}} menuName="End" items={basicItems} />
          </div>
        </section>

        {/* Size Variations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Size Variations</h2>
          <div className="flex flex-wrap gap-6">
            <CopyDropdown signals={{xs: true}} menuName="XS" items={basicItems} />
            <CopyDropdown signals={{sm: true}} menuName="SM" items={basicItems} />
            <CopyDropdown signals={{md: true}} menuName="MD" items={basicItems} />
            <CopyDropdown signals={{lg: true}} menuName="LG" items={basicItems} />
            <CopyDropdown signals={{xl: true}} menuName="XL" items={basicItems} />
          </div>
        </section>


        {/* Interactive Modes */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Interactive Modes</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Click vs Hover Interaction</h3>
              <div className="flex flex-wrap gap-6">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Dropdown lg menuName="Click to Open" items={basicItems} />
                  <p className="text-sm text-slate-600 mt-3">Click interaction (default)</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Dropdown lg reactHover menuName="Hover to Open" items={basicItems} />
                  <p className="text-sm text-slate-600 mt-3">Hover interaction</p>
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Dropdown lg menuName="Click to Open" items={[{label: "Edit", onItemSelect: () => alert("Edit clicked")}, {label: "Delete", onItemSelect: () => alert("Delete clicked")}, {label: "Share", onItemSelect: () => alert("Share clicked")}]} />
<Dropdown lg reactHover menuName="Hover to Open" items={[{label: "Edit", onItemSelect: () => alert("Edit clicked")}, {label: "Delete", onItemSelect: () => alert("Delete clicked")}, {label: "Share", onItemSelect: () => alert("Share clicked")}]} />`}</pre>
              </div>
            </div>
          </div>
        </section>


        {/* Dropdown Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Dropdown Examples</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">User Account Menu</h3>
              <div className="flex flex-wrap gap-6">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Dropdown lg menuName="Account" items={userActions} />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Dropdown lg right menuName="Profile" items={userActions} />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Dropdown lg center menuName="User" items={userActions} />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Dropdown lg menuName="Account" items={[{label: "View Profile", onItemSelect: () => alert("View Profile clicked")}, {label: "Settings", onItemSelect: () => alert("Settings clicked")}, {label: "Logout", onItemSelect: () => alert("Logout clicked")}]} />
<Dropdown lg right menuName="Profile" items={[{label: "View Profile", onItemSelect: () => alert("View Profile clicked")}, {label: "Settings", onItemSelect: () => alert("Settings clicked")}, {label: "Logout", onItemSelect: () => alert("Logout clicked")}]} />
<Dropdown lg center menuName="User" items={[{label: "View Profile", onItemSelect: () => alert("View Profile clicked")}, {label: "Settings", onItemSelect: () => alert("Settings clicked")}, {label: "Logout", onItemSelect: () => alert("Logout clicked")}]} />`}</pre>
              </div>
            </div>


            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Data Table Actions</h3>
              <div className="flex flex-wrap gap-6">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Dropdown sm menuName="Actions" items={basicItems} />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Dropdown sm menuName="Edit" items={basicItems} />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Dropdown sm menuName="View" items={basicItems} />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Dropdown sm menuName="Actions" items={[{label: "Edit", onItemSelect: () => alert("Edit clicked")}, {label: "Delete", onItemSelect: () => alert("Delete clicked")}, {label: "Share", onItemSelect: () => alert("Share clicked")}]} />
<Dropdown sm menuName="Edit" items={[{label: "Edit", onItemSelect: () => alert("Edit clicked")}, {label: "Delete", onItemSelect: () => alert("Delete clicked")}, {label: "Share", onItemSelect: () => alert("Share clicked")}]} />
<Dropdown sm menuName="View" items={[{label: "Edit", onItemSelect: () => alert("Edit clicked")}, {label: "Delete", onItemSelect: () => alert("Delete clicked")}, {label: "Share", onItemSelect: () => alert("Share clicked")}]} />`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Use Cases */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Specialized Use Cases</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Filter Dropdown</h3>
              <div className="flex flex-wrap gap-6">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Dropdown lg menuName="Filter By" items={filterOptions} />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Dropdown lg right menuName="Status" items={filterOptions} />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Dropdown lg menuName="Filter By" items={[{label: "All Items", onItemSelect: () => alert("Filter: All Items")}, {label: "Active", onItemSelect: () => alert("Filter: Active")}, {label: "Inactive", onItemSelect: () => alert("Filter: Inactive")}, {label: "Archived", onItemSelect: () => alert("Filter: Archived")}]} />
<Dropdown lg right menuName="Status" items={[{label: "All Items", onItemSelect: () => alert("Filter: All Items")}, {label: "Active", onItemSelect: () => alert("Filter: Active")}, {label: "Inactive", onItemSelect: () => alert("Filter: Inactive")}, {label: "Archived", onItemSelect: () => alert("Filter: Archived")}]} />`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Export Options</h3>
              <div className="flex flex-wrap gap-6">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Dropdown lg menuName="Export" items={exportOptions} />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Dropdown lg left menuName="Download" items={exportOptions} />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Dropdown lg menuName="Export" items={[{label: "Export as PDF", onItemSelect: () => alert("Export PDF")}, {label: "Export as Excel", onItemSelect: () => alert("Export Excel")}, {label: "Export as CSV", onItemSelect: () => alert("Export CSV")}, {label: "Print", onItemSelect: () => alert("Print")}]} />
<Dropdown lg left menuName="Download" items={[{label: "Export as PDF", onItemSelect: () => alert("Export PDF")}, {label: "Export as Excel", onItemSelect: () => alert("Export Excel")}, {label: "Export as CSV", onItemSelect: () => alert("Export CSV")}, {label: "Print", onItemSelect: () => alert("Print")}]} />`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Settings & Preferences</h3>
              <div className="flex flex-wrap gap-6">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Dropdown xl menuName="Language" items={languageOptions} />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Dropdown xl menuName="Theme" items={themeOptions} />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Dropdown xl menuName="Language" items={[{label: "English", onItemSelect: () => alert("Language: English")}, {label: "Spanish", onItemSelect: () => alert("Language: Spanish")}, {label: "French", onItemSelect: () => alert("Language: French")}, {label: "German", onItemSelect: () => alert("Language: German")}, {label: "Japanese", onItemSelect: () => alert("Language: Japanese")}]} />
<Dropdown xl menuName="Theme" items={[{label: "Light Mode", onItemSelect: () => alert("Theme: Light")}, {label: "Dark Mode", onItemSelect: () => alert("Theme: Dark")}, {label: "Auto", onItemSelect: () => alert("Theme: Auto")}, {label: "System Default", onItemSelect: () => alert("Theme: System")}]} />`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Signal Reference */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Signal Reference</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              // Position
              'bottom', 'top', 'right', 'left', 'start', 'center', 'end',
              // Size
              'xs', 'sm', 'md', 'lg', 'xl',
              // Layout
              'block', 'inline', 'centered',
              // State
              'disabled',
              // Interaction
              'reactHover'
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
              <h3 className="text-lg font-medium mb-4 text-slate-700">Required Properties</h3>
              <div className="space-y-3">
                {[
                  { prop: 'items', desc: 'Array of menu items with label, optional href, and onItemSelect', type: 'Array<Object>', required: true },
                  { prop: 'menuName', desc: 'Text displayed on the dropdown trigger button', type: 'string', required: true }
                ].map(({ prop, desc, type, required }) => (
                  <div key={prop} className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
                    <div className="font-mono text-sm font-medium min-w-20">{prop}</div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-700">{desc}</div>
                      <div className="text-xs text-slate-500 mt-1">Type: {type} {required && '| Required'}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4 text-slate-700">Event Handlers</h3>
              <div className="space-y-3">
                {[
                  { prop: 'onItemSelect', desc: 'Called when a menu item is clicked', type: '(item: Object) => void' },
                  { prop: 'onMenuClick', desc: 'Called when the dropdown trigger is clicked', type: '() => void' }
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
                  { prop: 'className', desc: 'Additional CSS classes for the dropdown container', type: 'string', default: '""' }
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

        {/* Item Structure Reference */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Item Structure Reference</h2>
          
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-medium mb-4 text-slate-700">Menu Item Object</h3>
            <div className="space-y-3">
              {[
                { prop: 'label', desc: 'Display text for the menu item', type: 'string', required: true },
                { prop: 'onItemSelect', desc: 'Function called when item is clicked', type: '() => void', optional: true },
                { prop: 'href', desc: 'URL for navigation items (creates link instead of button)', type: 'string', optional: true }
              ].map(({ prop, desc, type, required, optional }) => (
                <div key={prop} className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
                  <div className="font-mono text-sm font-medium min-w-20">{prop}</div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-700">{desc}</div>
                    <div className="text-xs text-slate-500 mt-1">Type: {type} {required && '| Required'} {optional && '| Optional'}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
              <pre className="break-all">{`// Action Item
{ label: "Edit", onItemSelect: () => alert("Edit clicked") }

// Navigation Item  
{ label: "Dashboard", href: "/dashboard" }

// Combined Usage
const items = [
  { label: "View Profile", onItemSelect: () => alert("View Profile") },
  { label: "Settings", href: "/settings" },
  { label: "Logout", onItemSelect: () => alert("Logout") }
]`}</pre>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
