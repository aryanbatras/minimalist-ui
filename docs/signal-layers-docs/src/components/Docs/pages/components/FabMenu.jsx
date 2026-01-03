import { DocsLayout } from "../../layout/DocsLayout.jsx";
import { FabMenu } from "../../../signal-layers";

export function FabMenuPage() {
  return (
    <DocsLayout>
      <div className="mb-32 max-w-6xl mx-auto px-6">
        <h1 className="text-7xl font-light mb-8 text-black tracking-tight">FabMenu</h1>
        <p className="text-xl text-slate-600 mb-20 leading-relaxed">
          Floating action button with expandable menu actions.
        </p>

        {/* Example */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Example</h2>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <FabMenu 
              xl 
              reactHover
              icon="+" 
              actions={[
                { icon: "📝", label: "New Note", onClick: () => alert("New Note") },
                { icon: "📷", label: "Take Photo", onClick: () => alert("Take Photo") },
                { icon: "🎨", label: "Draw", onClick: () => alert("Draw") }
              ]} 
            /> Visible at bottom right (default position)
            <pre className="mt-4 bg-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">{`
<FabMenu 
    xl 
    reactHover
    icon="+" 
    actions={[
        { icon: "📝", label: "New Note", onClick: () => alert("New Note") },
        { icon: "📷", label: "Take Photo", onClick: () => alert("Take Photo") },
        { icon: "🎨", label: "Draw", onClick: () => alert("Draw") }
    ]} 
/>
                `}</pre>
          </div>
        </section>

        {/* Signal Reference */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Signals</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4 text-slate-700">Position</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {['bottomRight', 'bottomLeft', 'topRight', 'topLeft'].map((signal) => (
                  <div key={signal} className="bg-slate-50 p-3 rounded-lg font-mono text-sm text-center">
                    {signal}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 text-slate-700">Size</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {['sm', 'md', 'lg', 'xl'].map((signal) => (
                  <div key={signal} className="bg-slate-50 p-3 rounded-lg font-mono text-sm text-center">
                    {signal}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 text-slate-700">Actions Layout</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {['actionsTop', 'actionsBottom', 'actionsLeft', 'actionsRight'].map((signal) => (
                  <div key={signal} className="bg-slate-50 p-3 rounded-lg font-mono text-sm text-center">
                    {signal}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 text-slate-700">State & Interaction</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {['disabled', 'reactHover'].map((signal) => (
                  <div key={signal} className="bg-slate-50 p-3 rounded-lg font-mono text-sm text-center">
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data Properties */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Data Properties</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4 text-slate-700">Required</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
                  <div className="font-mono text-sm font-medium min-w-24">icon</div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-700">Icon or content for the FAB button</div>
                    <div className="text-xs text-slate-500 mt-1">ReactNode</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
                  <div className="font-mono text-sm font-medium min-w-24">actions</div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-700">Array of action objects</div>
                    <div className="text-xs text-slate-500 mt-1">{"Array&lt;{icon, label?, onClick}&gt;"}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4 text-slate-700">Optional</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
                  <div className="font-mono text-sm font-medium min-w-24">className</div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-700">Additional CSS classes</div>
                    <div className="text-xs text-slate-500 mt-1">string</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}