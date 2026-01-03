export function Section2() {
  return (
    <div className="mb-32">
      <h2 className="text-5xl font-light mb-16 text-black tracking-tight">Getting Started</h2>

        {/* Core Concept */}
        <div className="space-y-8">
          <h3 className="text-3xl font-light text-black">The Core Concept: Signals</h3>
          <div className="text-lg text-slate-700 leading-relaxed space-y-6 text-justify">
            <p>
              Signals are semantic props that express what you want, not how to configure it. 
              Each signal maps to specific CSS classes and behaviors, but you never have to think about implementation.
            </p>
            <p>
              Signals are grouped by intent, and intents are bound to specific dimensions. 
              Each dimension represents a layer, and layers are grouped by function. 
              This means intents are inherently organized by their dimensional purpose.
            </p>
            <p>
              When you want a "large green button," you're expressing two distinct intents: 
              size (large) and color (green). Each intent maps to a different dimension. 
              You would never say "garden button" or "sky button" because those don't represent 
              clear dimensional intents. Signals map to meaningful dimensions like size, color, 
              interaction, and shape - not abstract concepts.
            </p>
            <p>
              Here's how signals organize by dimensional intent:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h4 className="text-lg font-light text-black mb-3">Tone Dimension</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <div><code className="bg-slate-100 px-2 py-1 rounded">primary</code> - Main action intent</div>
                <div><code className="bg-slate-100 px-2 py-1 rounded">secondary</code> - Secondary action intent</div>
                <div><code className="bg-slate-100 px-2 py-1 rounded">danger</code> - Destructive action intent</div>
                <div><code className="bg-slate-100 px-2 py-1 rounded">brand</code> - Brand identity intent</div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h4 className="text-lg font-light text-black mb-3">Size Dimension</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <div><code className="bg-slate-100 px-2 py-1 rounded">xs</code> - Extra small intent</div>
                <div><code className="bg-slate-100 px-2 py-1 rounded">sm</code> - Small intent</div>
                <div><code className="bg-slate-100 px-2 py-1 rounded">md</code> - Medium intent (default)</div>
                <div><code className="bg-slate-100 px-2 py-1 rounded">lg</code> - Large intent</div>
                <div><code className="bg-slate-100 px-2 py-1 rounded">xl</code> - Extra large intent</div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h4 className="text-lg font-light text-black mb-3">Interaction Dimension</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <div><code className="bg-slate-100 px-2 py-1 rounded">hoverEnlarge</code> - Hover growth intent</div>
                <div><code className="bg-slate-100 px-2 py-1 rounded">pressShrink</code> - Press shrink intent</div>
                <div><code className="bg-slate-100 px-2 py-1 rounded">focusJump</code> - Focus emphasis intent</div>
                <div><code className="bg-slate-100 px-2 py-1 rounded">bounceIn</code> - Entrance animation intent</div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h4 className="text-lg font-light text-black mb-3">Shape Dimension</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <div><code className="bg-slate-100 px-2 py-1 rounded">rounded</code> - Rounded corner intent</div>
                <div><code className="bg-slate-100 px-2 py-1 rounded">pill</code> - Pill shape intent</div>
                <div><code className="bg-slate-100 px-2 py-1 rounded">square</code> - Square corner intent</div>
                <div><code className="bg-slate-100 px-2 py-1 rounded">circle</code> - Circular shape intent</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
