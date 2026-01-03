import { DocsLayout } from "../layout/DocsLayout";
export function DocsArchitecture() {
    return (
    <DocsLayout>
      <div className="max-w-6xl space-y-24 text-lg leading-relaxed font-normal">
      <div className="space-y-16">
        <h1 className="text-7xl font-light text-black tracking-tight leading-tight">Signal UI: Architecture Overview</h1>
        
        <div className="space-y-8">
          <h2 className="text-5xl font-light text-black leading-tight">Core Signal Processing Pipeline</h2>
          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl  text-justify">
            The createSignalUtils function implements a four-level signal processing architecture that addresses fundamental challenges 
            in modern frontend development. This system provides a systematic approach to managing component behavior through 
            distinct signal levels: inputSignal for intent capture, layerSignal for CSS organization, dataSignal for information flow, 
            and stateSignal for reactive state management. The implementation leverages functional programming patterns, React's hook 
            system, and JavaScript's logical operators to create a zero-dependency solution for component composition.
          </p>
          
          <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 shadow-sm">
            <pre className="text-base font-mono text-slate-800 overflow-x-auto leading-relaxed">
{`const [inputSignal, layerSignal, dataSignal, stateSignal] = [
  { ...contract },    // Level 1: Intent Declaration
  {},                 // Level 2: Layer Organization
  {},                 // Level 3: Data Flow
  {}                  // Level 4: State Management
];`}
            </pre>
          </div>

          <p className="text-slate-700 leading-relaxed  text-xl lg:text-2xl text-justify">
            The signal initialization uses array destructuring with spread operator to create a shallow copy of contract object. 
            This approach prevents accidental mutation of original props while maintaining referential equality for unchanged values, 
            which is critical for React's reconciliation algorithm. The remaining signal levels are initialized as empty objects, 
            enabling lazy initialization patterns that minimize memory allocation and garbage collection pressure.
          </p>
        </div>

        <div className="space-y-10">
          <h2 className="text-5xl font-light text-black leading-tight">Layer Signal: Single-Class Constraint and Component Scoping</h2>
          
          <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 shadow-sm">
            <pre className="text-base font-mono text-slate-800 overflow-x-auto leading-relaxed">
{`const layer =
  (name, scope) =>
  (className) => (
    (layerSignal[scope] ||= {}),
    (layerSignal[scope][name] ||= []),
    (layerSignal[scope][name][0] = className)
  );`}
            </pre>
          </div>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The layer function implements a triply-curried function pattern that creates a hierarchical CSS organization system. 
            The critical design decision to use index [0] for className assignment enforces a single Tailwind CSS class per layer, 
            preventing class conflicts that would occur with multiple utilities targeting the same CSS properties. This constraint ensures 
            predictable behavior and eliminates specificity conflicts that plague traditional CSS-in-JS solutions.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The scope parameter creates component-level isolation for a component's multiple dimensions within its layers, not across 
            different components. Within a Button component, scope "btn" organizes layers like size, color, hover, and focus. 
            Within a Card component, scope "card" organizes its own layers. This hierarchical structure (layerSignal.scope.name.className) 
            provides organization within a component while preventing naming conflicts between different components.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            This architecture directly addresses limitations in utility-first CSS frameworks like Tailwind CSS. While Tailwind provides 
            excellent utility classes, it lacks semantic grouping capabilities. The layer system enables developers to group related 
            utilities into meaningful signals that can affect multiple dimensions simultaneously—color, shadow, hover states—while 
            maintaining the ability to override any individual utility when needed. The single-class constraint prevents CSS specificity 
            conflicts while maintaining composability.
          </p>
        </div>

        <div className="space-y-10">
          <h2 className="text-5xl font-light text-black leading-tight">State Signal: React Hooks Compliance and Priority Resolution</h2>
          
          <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 shadow-sm">
            <pre className="text-base font-mono text-slate-800 overflow-x-auto leading-relaxed">
{`const state = (name, priority = 0, initial = false) => (
  ((stateSignal._hooks ||= {})[name] ||= (() => {
    const [get, set] = useState(initial);
    return { get, set };
  })()),
  priority &&
    (!stateSignal._priority || priority > stateSignal._priority) &&
    ((stateSignal[name] = stateSignal._hooks[name]),
    (stateSignal._priority = priority))
);`}
            </pre>
          </div>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The state function solves the fundamental problem of conditional React hooks while providing priority-based state resolution. 
            The _hooks registry ensures that React hooks are called in the same order on every render, satisfying the Rules of Hooks 
            while still enabling conditional state behavior. This two-phase registration pattern—first registering hooks with priority 0, 
            then activating with higher priority—maintains hook order invariants critical for React's rendering optimization and prevents 
            the "Rendered more hooks than during the previous render" error.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The priority resolution system implements a maximum-finding algorithm that enables multiple state signals to compete for 
            dominance. In the Dropdown component, both reactHover and reactClick states are registered with different priorities. 
            When priority is greater than 0, the system checks if either no priority exists yet or the new priority is higher than the 
            current maximum. If so, it updates both the active state reference and the priority tracking. This creates complex interaction 
            patterns like hover-to-open menus that stay open when clicked, without manual state management logic.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The double-parentheses pattern {`((...))`} creates an immediately-invoked function expression that executes hook registration 
            while maintaining clean syntax. This pattern ensures immediate hook registration during the state function call, which is 
            critical for maintaining the hook order invariant that React requires for optimal performance. The IIFE pattern also creates 
            a closure that captures the initial value, ensuring that each hook instance maintains its own state without interference.
          </p>
        </div>

        <div className="space-y-10">
          <h2 className="text-5xl font-light text-black leading-tight">Data Signal: Prop Drilling Elimination</h2>
          
          <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 shadow-sm">
            <pre className="text-base font-mono text-slate-800 overflow-x-auto leading-relaxed">
{`const data = (name, key = name) =>
  inputSignal[key] && (dataSignal[name] = inputSignal[key]);`}
            </pre>
          </div>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The data function implements a conditional signal transfer mechanism that eliminates prop drilling in React applications. 
            The logical AND operator serves as both a conditional check and assignment operator, implementing short-circuit evaluation 
            that prevents null and undefined values from propagating through the signal pipeline. This pattern maintains data integrity 
            while being more efficient than explicit if statements due to JavaScript's built-in optimization for logical operations.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            In the Card component, this system enables sophisticated composition patterns where input props like "image", "title", 
            "description", and "buttonLabel" are transformed into semantic data signals consumed by internal sub-components 
            (CardMedia, CardBody, CardActions) without prop drilling. This creates a clean data flow where the parent component 
            handles data transformation and child components handle presentation, maintaining the single responsibility principle while enabling 
            complex component composition.
          </p>
        </div>

        <div className="space-y-10">
          <h2 className="text-5xl font-light text-black leading-tight">Class Generation: Performance-Optimized Compilation</h2>
          
          <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 shadow-sm">
            <pre className="text-base font-mono text-slate-800 overflow-x-auto leading-relaxed">
{`const classes = (layers = {}) =>
  Object.values(layers)
    .map((l) => l[0])
    .filter(Boolean)
    .join(" ");`}
            </pre>
          </div>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The classes function implements a performance-optimized flattening algorithm that transforms the organized layerSignal 
            structure into CSS class strings. Object.values creates a shallow reference to layer values, avoiding additional hash 
            table operations. The map operation extracts the first element ([0]) from each layer array, which contains the CSS class 
            string. The filter(Boolean) operation removes falsy values, preventing empty class strings from appearing in the final output. 
            The join operation performs a single string concatenation, creating the final className string.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            This pipeline minimizes intermediate object creation and maximizes rendering performance. The single concatenation is 
            optimized by JavaScript engines and creates only one final string, avoiding the multiple string operations that plague 
            many CSS-in-JS systems that use template literals or string concatenation in loops. The filter operation is particularly 
            important for preventing CSS class conflicts and maintaining clean HTML output.
          </p>
        </div>

        <div className="space-y-10">
          <h2 className="text-5xl font-light text-black leading-tight">Component Architecture: Multi-Layer Organization Patterns</h2>
          
          <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 shadow-sm">
            <pre className="text-base font-mono text-slate-800 overflow-x-auto leading-relaxed">
{`// Button Component: 19-Layer Architecture
const btn = {
  size: layer("size", "btn"),
  border: layer("border", "btn"),
  shape: layer("shape", "btn"),
  color: layer("color", "btn"),
  shadow: layer("shadow", "btn"),
  text: layer("text", "btn"),
  textLayer: layer("textLayer", "btn"),
  textWeight: layer("textWeight", "btn"),
  textSize: layer("textSize", "btn"),
  textTransform: layer("textTransform", "btn"),
  textDecoration: layer("textDecoration", "btn"),
  hover: layer("hover", "btn"),
  active: layer("active", "btn"),
  focus: layer("focus", "btn"),
  layout: layer("layout", "btn"),
  animation: layer("animation", "btn"),
  rippleBase: layer("ripple", "btn")
};

// Card Component: Multi-Component Architecture
const card = { base: layer("base", "card"), ... };
const image = { base: layer("base", "image"), ... };
const title = { base: layer("base", "title"), ... };
const description = { base: layer("base", "description"), ... };`}
            </pre>
          </div>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl font-light text-justify">
            Component architecture demonstrates sophisticated multi-layer organization patterns. The Button component organizes its 
            19 layers into semantic groups (size, color, hover, focus, animation) within "btn" scope. Each layer represents 
            an independent dimension, ensuring that changing size never affects color, modifying animation doesn't impact layout, and 
            adjusting typography leaves shadows untouched. This dimensional independence is crucial for predictable customization.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The Card component extends this pattern to multiple sub-components, each with its own layer organization. 
            Coherent signal modification patterns enable single signals to affect multiple dimensions. In the Card component, the "xl" 
            signal modifies title size, description size, card spacing, and image size simultaneously, ensuring visual harmony. 
            The comma operator enables multiple function calls within a single expression, creating concise syntax for coordinated 
            modifications.
          </p>
        </div>

        <div className="space-y-10">
          <h2 className="text-5xl font-light text-black leading-tight">Advanced Signal Combinations and Coherence</h2>
          
          <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 shadow-sm">
            <pre className="text-base font-mono text-slate-800 overflow-x-auto leading-relaxed">
{`// Complex Signal Combination
inputSignal.primary && (
  btn.color("bg-blue-600 text-white"),
  btn.shadow("shadow-sm shadow-blue-500/40"),
  btn.hover("hover:bg-blue-700 hover:scale-105"),
  btn.active("active:bg-blue-800 active:scale-90")
);

// Dimensional Independence
inputSignal.lg && btn.size("px-6 py-3");
inputSignal.rounded && btn.shape("rounded-lg");
inputSignal.bounceIn && btn.animation("transition-all duration-300");

// Signal Coherence: Single Signal, Multiple Layers
inputSignal.brand && (
  btn.color("bg-brand-primary text-white"),
  btn.shadow("shadow-lg shadow-brand/20"),
  btn.hover("hover:bg-brand-secondary"),
  btn.focus("focus:ring-2 focus:ring-brand/50")
);`}
            </pre>
          </div>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            Advanced signal combinations demonstrate the power of coherent signal design. A single signal like "primary" can 
            affect multiple dimensions simultaneously: color, shadow, hover states, active states, and focus styles. This coherence 
            ensures that brand consistency is maintained across all visual aspects without requiring multiple separate signals. 
            The comma operator in JavaScript enables multiple function calls within a single expression, allowing signals to trigger 
            cascading modifications across multiple layers.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The dimensional independence principle ensures that signals don't interfere with each other. A size signal (lg) 
            doesn't affect color, a shape signal (rounded) doesn't affect animation, and an animation signal (bounceIn) doesn't 
            affect layout. This independence enables infinite customization possibilities without creating unexpected side effects. 
            The order preservation rule ensures that when multiple signals modify the same layer, the last signal wins, providing 
            predictable override behavior.
          </p>
        </div>

        <div className="space-y-10">
          <h2 className="text-5xl font-light text-black leading-tight">Performance Engineering: Zero Overhead Design</h2>
          
          <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 shadow-sm">
            <pre className="text-base font-mono text-slate-800 overflow-x-auto leading-relaxed">
{`// Lazy Initialization: Zero Cost Until Needed
layerSignal[scope] ||= {}  // Only creates if needed
layerSignal[scope][name] ||= []  // Only creates if needed

// Short-Circuit Evaluation: No Unnecessary Processing
inputSignal[key] && (dataSignal[name] = inputSignal[key]);

// Hook Registry: Prevents Duplicate React Hooks
stateSignal._hooks ||= {}[name] ||= (() => {
  const [get, set] = useState(initial);
  return { get, set };
})();

// Efficient Class Generation: Minimal Iterations
Object.values(layers).map((l) => l[0]).filter(Boolean).join(" ");`}
            </pre>
          </div>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The signal engine implements multiple performance optimizations that ensure zero overhead for unused features. Lazy 
            initialization through the logical OR assignment operator ({`||=`}) prevents object creation until absolutely necessary. 
            This reduces memory allocation for components with many potential layers but few active signals. The pattern ensures that 
            memory is allocated only for features that are actually used, preventing the memory bloat that plagues traditional 
            UI libraries where all features are loaded regardless of usage.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            Short-circuit evaluation in the data function prevents unnecessary assignments when input signals are absent. 
            This optimization is particularly important for components with many optional props, as it avoids processing 
            signals that aren't provided by the developer. The logical AND operator serves as both a conditional check and 
            assignment, implementing an efficient pattern that minimizes computational overhead.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The hook registry prevents duplicate React hook creation, which is essential for performance and correctness. By ensuring 
            each state name gets exactly one useState instance, the system prevents memory leaks and inconsistent state behavior. 
            This singleton pattern for hooks maintains React's rendering optimizations while enabling flexible state management. 
            The class generation function uses efficient array operations with minimal iterations, creating only one final string.
          </p>
        </div>

        <div className="space-y-10">
          <h2 className="text-5xl font-light text-black leading-tight">Frontend Ecosystem Integration and Technical Context</h2>
          
          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The signal architecture addresses fundamental challenges across the entire frontend ecosystem. In React development, it solves 
            prop drilling, hook rules compliance, and component composition issues. In CSS architecture, it provides semantic grouping 
            that utility-first frameworks lack while maintaining their transparency. In component libraries, it eliminates configuration 
            complexity and variant explosion while preserving developer ownership.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            Compared to traditional UI libraries like Material-UI or Chakra UI, this approach eliminates the need for complex 
            theme systems, variant props, and component composition patterns. Material-UI requires understanding the theme object, 
            variant enums, and style overrides. Chakra UI requires knowledge of style props, theme customization, and component 
            composition patterns. The signal system provides direct intent mapping without these cognitive overheads.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            Unlike CSS-in-JS solutions like styled-components or emotion, the signal architecture provides semantic organization 
            without runtime overhead. CSS-in-JS solutions typically require runtime style computation, dynamic class generation, and 
            style injection, which can impact performance. The signal system pre-defines all styles as static Tailwind classes, 
            leveraging the browser's native CSS optimization while providing semantic organization.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            Compared to utility-first frameworks like Tailwind CSS, the signal system enables coherent signal grouping. Tailwind provides 
            excellent utility classes but lacks semantic grouping capabilities. Developers must manually combine utilities for each component 
            variation, leading to repetitive code and inconsistent design systems. The signal system allows developers to group related 
            utilities into meaningful signals that express intent clearly while maintaining the ability to override any individual utility.
          </p>
        </div>

        <div className="space-y-10">
          <h2 className="text-5xl font-light text-black leading-tight">Technical Implementation Patterns and Best Practices</h2>
          
          <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 shadow-sm">
            <pre className="text-base font-mono text-slate-800 overflow-x-auto leading-relaxed">
{`// Error Handling: Defensive Programming
layerSignal[scope] ||= {}  // Creates if undefined
layerSignal[scope][name] ||= []  // Creates if undefined

// Memory Management: Singleton Pattern
stateSignal._hooks ||= {}[name] ||= (() => {
  const [get, set] = useState(initial);
  return { get, set };
})();

// Extensibility: Array Structure for Future Features
layerSignal[scope][name] = [];  // Can store multiple classes
layerSignal[scope][name][0] = className;  // Current: single class
// Future: layerSignal[scope][name][1] = secondClass;

// React Optimization: Stable References
const { layer, data, state, classes } = createSignalUtils(contract);
// Same functions on every render, no recreation`}
            </pre>
          </div>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The implementation demonstrates comprehensive error handling through defensive programming patterns. Lazy initialization 
            prevents undefined reference errors by creating objects as needed. The guaranteed index access ([0]) ensures className 
            assignment always succeeds, preventing array index out of bounds errors while maintaining the single-class constraint. 
            This defensive approach ensures the engine never throws TypeError when accessing nested properties.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            Memory management uses singleton patterns to prevent leaks and ensure efficient resource utilization. The hook registry 
            maintains exactly one useState instance per logical state, preventing duplicate registrations which would lead to memory 
            leaks and inconsistent state behavior. The priority tracking system uses a single _priority property rather than maintaining 
            a full priority queue, minimizing memory overhead while still providing the necessary conflict resolution.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The architecture is designed for extensibility, using data structures that accommodate future enhancements. The array 
            structure in layerSignal allows for multiple classes per layer, enabling features like class precedence, conditional classes, 
            or animation sequences. The current single-class constraint could be relaxed in future versions while maintaining backward 
            compatibility through the guaranteed [0] index access pattern.
          </p>
        </div>

        <div className="space-y-10">
          <h2 className="text-5xl font-light text-black leading-tight">Animation System Architecture and Signal Integration</h2>
          
          <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 shadow-sm">
            <pre className="text-base font-mono text-slate-800 overflow-x-auto leading-relaxed">
{`// Default Animation Foundation
btn.animation("transition-all duration-300 cursor-pointer");
btn.hover("hover:scale-105 hover:shadow-md");
btn.active("active:scale-90 active:shadow-md");

// Signal-Based Animation Override
inputSignal.bounceIn && (
  btn.animation("transition-all duration-300"),
  btn.hover("hover:animate-bounce hover:scale-105"),
  btn.active("active:scale-90")
);

inputSignal.slideIn && (
  btn.animation("transition-all duration-300 transform"),
  btn.hover("hover:translate-x-2"),
  btn.active("active:translate-x-1")
);

// Complex Animation Combinations
inputSignal.pulse && (
  btn.animation("animate-pulse"),
  btn.hover("hover:animate-none hover:scale-105")
);`}
            </pre>
          </div>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The animation system is built on the principle that animations should be declarative, composable, and performance-optimized. 
            Unlike traditional animation libraries that require complex configuration objects and keyframe definitions, Signal UI animations 
            are expressed through semantic signals that describe intent directly. The animation layer controls base transition properties, 
            while hover, active, and focus layers control state-specific animations.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            Signal-based animation override enables developers to replace default animations with semantic signals. The bounceIn signal 
            affects animation, hover, and active layers to create a complete bouncing animation experience. The slideIn signal uses 
            transform properties for GPU-accelerated animations. Each animation signal modifies specific layers coherently, ensuring 
            that all related animation properties work together without conflicts.
          </p>
        </div>

        <div className="space-y-10">
          <h2 className="text-5xl font-light text-black leading-tight">Real-World Implementation Patterns and Use Cases</h2>
          
          <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 shadow-sm">
            <pre className="text-base font-mono text-slate-800 overflow-x-auto leading-relaxed">
{`// Dropdown: Complex State Management
state("reactHover", 0);
state("reactClick", 0);
inputSignal.reactHover && state("reactHover", 1);
state("reactClick", 1);

// Usage: Priority-Based Resolution
{(stateSignal.reactClick?.get || stateSignal.reactHover?.get) && 
  dataSignal.items?.map((item, i) => (
    <DropdownItem key={i} item={item} />
  ))
}

// FabMenu: Coordinated State Updates
onClick={() => {
  action.onClick?.();
  stateSignal.reactClick?.set &&
  stateSignal.reactClick?.set(!stateSignal.reactClick.get);
}}

// Card: Multi-Component Data Flow
inputSignal.image && data("image");
inputSignal.title && data("title");
inputSignal.description && data("description");
inputSignal.buttonLabel && data("buttonLabel");

// Coherent Size Modifications
inputSignal.xl && (
  title.size("text-4xl"),
  description.size("text-2xl"),
  card.spacing("gap-10"),
  image.size("w-auto h-96")
);`}
            </pre>
          </div>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl font-light text-justify">
            Real-world implementations demonstrate sophisticated patterns that solve complex UI challenges. The Dropdown component 
            uses priority-based state resolution to handle hover and click interactions seamlessly. The reactHover state has priority 0, 
            while reactClick has priority 1, ensuring that click state takes precedence when both are active. This creates intuitive 
            user behavior where hover opens the menu, but click keeps it open even after hover ends.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The FabMenu component demonstrates coordinated state updates where action buttons can trigger their own onClick handlers 
            while also toggling the menu state. The optional chaining ({`?.`}) ensures that the code doesn't throw errors 
            when state signals are not available, providing robust error handling without explicit null checks. This pattern enables 
            complex interaction patterns with minimal code complexity.
          </p>

          <p className="text-slate-700 leading-relaxed text-xl lg:text-2xl text-justify">
            The Card component showcases multi-component data flow where input props are transformed into semantic data signals 
            consumed by internal sub-components. This eliminates prop drilling while maintaining clean separation between data 
            transformation and presentation. The coherent size modifications demonstrate how a single signal can affect multiple 
            sub-components simultaneously, ensuring visual harmony across the entire card component.
          </p>
        </div>
      </div>
    </div>
    </DocsLayout>
  );
}
