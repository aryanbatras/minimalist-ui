import { Link } from "react-router-dom";
export function Section3() {
  return (
      <div className="space-y-16">
        {/* High-Level Overview */}
        <div className="space-y-8">
          <h3 className="text-3xl font-light text-black">How Signals Flow Through Your Components</h3>
          <div className="text-lg text-slate-700 leading-relaxed space-y-6 text-justify">
            <p>
              Signal UI transforms your semantic intent into beautiful, responsive components through a natural flow. 
              Think of it as having a conversation with your UI:
            </p>
            <p>
              You express what you want → Signal UI translates it into the perfect implementation
            </p>

            <div className="space-y-16">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h4 className="text-lg font-light text-black mb-4">Your Code:</h4>
                <pre className="text-base font-mono text-slate-800">
    {`<Button primary lg hoverEnlarge pressShrink>
    Get Started
    </Button>`}
                </pre>
                </div>
                <div className="text-center text-slate-400">↓ Signal UI processes this ↓</div>
            </div>
          </div>
        </div>

        {/* Natural Flow */}
        <div className="space-y-0">
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="space-y-4">
                <h4 className="text-xl font-light text-black">You Declare Your Intent</h4>
                <p className="text-slate-700">
                  Start with semantic props that describe what you want: 
                  <code className="bg-white px-2 py-1 rounded text-sm ml-2">primary</code>, 
                  <code className="bg-white px-2 py-1 rounded text-sm ml-2">lg</code>, 
                  <code className="bg-white px-2 py-1 rounded text-sm ml-2">hoverEnlarge</code>
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-slate-400">↓</div>
                <div className="flex-1 text-slate-600 text-sm">Your intent is captured and organized</div>
              </div>

              {/* Step 2 */}
              <div className="space-y-4">
                <h4 className="text-xl font-light text-black">Styles Are Organized by Dimension</h4>
                <p className="text-slate-700">
                  CSS classes are grouped naturally: size, color, hover, focus, animation. 
                  Each dimension works independently without conflicts.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-slate-400">↓</div>
                <div className="flex-1 text-slate-600 text-sm">Styles are prepared and grouped</div>
              </div>

              {/* Step 3 */}
              <div className="space-y-4">
                <h4 className="text-xl font-light text-black">Data Flows to Sub-Components</h4>
                <p className="text-slate-700">
                  Component data flows naturally to child elements, ensuring everything 
                  stays synchronized and predictable.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-slate-400">↓</div>
                <div className="flex-1 text-slate-600 text-sm">Interactive behaviors are added</div>
              </div>

              {/* Step 4 */}
              <div className="space-y-4">
                <h4 className="text-xl font-light text-black">State Management Handles Interactions</h4>
                <p className="text-slate-700">
                  Hover, click, and focus states are managed with intelligent priority resolution, 
                  so interactions feel natural and responsive.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-slate-400">↓</div>
                <div className="flex-1 text-slate-600 text-sm">Your perfect component is rendered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Principles */}
        <div className="space-y-8 mb-16">
          <h3 className="text-3xl font-light text-black">Design Principles</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="text-xl font-light text-black mb-4">Intention Over Configuration</h4>
              <p className="text-slate-700 leading-relaxed">
                Say what you want, not how to configure it. <code className="bg-slate-200 px-2 py-1 rounded text-sm">primary</code> instead of 
                <code className="bg-slate-200 px-2 py-1 rounded text-sm">variant="primary"</code>. 
                90% less cognitive load.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="text-xl font-light text-black mb-4">Dimensional Independence</h4>
              <p className="text-slate-700 leading-relaxed">
                Size never affects color. Animation never impacts layout. Each signal works independently without side effects.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="text-xl font-light text-black mb-4">Signal Coherence</h4>
              <p className="text-slate-700 leading-relaxed">
                One signal can affect multiple dimensions. <code className="bg-slate-200 px-2 py-1 rounded text-sm">primary</code> changes color, shadow, hover, and focus together.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="text-xl font-light text-black mb-4">Order Preservation</h4>
              <p className="text-slate-700 leading-relaxed">
                Last signal wins. Simple, predictable, no magic. Just like CSS cascade.
              </p>
            </div>
          </div>
        </div>

        
        {/* Deep Dive */}
        <div className="space-y-8">
          <Link 
            to="/docs/architecture"
            onClick={() => window.scrollTo(0, 0)}
            className="block bg-linear-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
          >
            <div className="space-y-6 hover:scale-[1.01] transition-all duration-300">
              <div className="flex items-center gap-3">
                <h3 className="text-3xl font-light text-black group-hover:text-slate-800 transition-colors">Technical Architecture</h3>
              </div>
              
              <div className="text-lg text-slate-700 leading-relaxed space-y-4">
                <p>
                  Explore the complete signal processing pipeline, four-level architecture, 
                  and implementation patterns that enable component composition without configuration complexity.
                </p>
                
                <div className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-sm">View complete technical documentation</span>
                </div>
              </div>
            </div>
          </Link>
        </div>



      </div>
  );
}
