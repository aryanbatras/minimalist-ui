import { DocsLayout } from "../layout/DocsLayout.jsx";
import { components } from "../Navigation/DocsData.jsx";
import { Link } from "react-router-dom";
export function ComponentLibrary() {
 
  return (

    <DocsLayout>
    <div className="mb-32">
      <h2 className="text-5xl font-light mb-16 text-black tracking-tight">Component Library</h2>
      
      <div className="space-y-12">
        {/* Introduction */}
        <div className="text-lg text-slate-700 leading-relaxed max-w-4xl">
          <p className="mb-6">
            Signal UI provides a complete set of production-ready components. Each component follows the same signal architecture, 
            ensuring consistent behavior and predictable customization across your entire application.
          </p>
          <p>
            Every component is fully owned by you - copy files, modify signals, 
            add new behaviors, or completely change the implementation.
          </p>
        </div>

        {/* Components Grid - Interactive Cards with Live Components */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component, index) => (
            <Link 
              key={index} 
              className="bg-white p-6 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              to={`/docs/components/${component.name.toLowerCase()}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="mb-4">
                <h3 className="text-xl font-light text-black mb-1">{component.name}</h3>
                <p className="text-sm text-slate-600">{component.description}</p>
              </div>

              {/* Live Component Preview */}
              <div className="mb-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                {component.component}
              </div>

              {/* Available Signals */}
              <div>
                <h4 className="text-xs font-medium text-slate-700 mb-2">Available Signals:</h4>
                <div className="flex flex-wrap gap-1">
                  {component.signals.map((signal, signalIndex) => (
                    <span 
                      key={signalIndex}
                      className="bg-slate-100 px-2 py-1 rounded text-xs font-mono text-slate-600 hover:bg-slate-200 transition-colors"
                    >
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Library Stats */}
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h3 className="text-xl font-light text-black mb-4">Library Overview</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-light text-slate-900 mb-1">10+</div>
              <div className="text-xs text-slate-600">Components</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-slate-900 mb-1">20+</div>
              <div className="text-xs text-slate-600">Signals per Component</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-slate-900 mb-1">0</div>
              <div className="text-xs text-slate-600">Dependencies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-slate-900 mb-1">100%</div>
              <div className="text-xs text-slate-600">Customizable</div>
            </div>
          </div>
        </div>

        <Link to="/docs/architecture" onClick={() => window.scrollTo(0, 0)}>
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <div className="hover:scale-[1.01] cursor-pointer">
          <h3 className="text-xl font-light text-black mb-3">Ready to Dive Deeper?</h3>
          <p className="text-slate-700 mb-4 text-sm">
            The next section explores the signal architecture that powers all these components. 
            You'll discover how signals flow through the system - from your initial intent declarations 
            through layer organization, data management, and state updates. This creates a predictable 
            pattern that makes every component behave consistently while remaining fully customizable.
          </p>
          <div className="flex items-center gap-3 text-xs text-slate-600">
            <span className="bg-slate-200 px-2 py-1 rounded font-mono">45 min read</span>
            <span className="bg-slate-200 px-2 py-1 rounded font-mono">Advanced</span>
            <span className="bg-slate-200 px-2 py-1 rounded font-mono">Technical Deep Dive</span>
          </div>
            </div>
         
        </div>
        </Link>
      </div>
    </div>
    </DocsLayout>
  );
}
