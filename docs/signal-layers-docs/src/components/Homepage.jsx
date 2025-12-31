import { FaGithub } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MagnifyingCursor } from "./MagnifyingCursor";
import { useState, useEffect, useRef } from "react";
import { Button } from "./signal-layers";
export function Homepage(){

    const [code, setCode] = useState('');
   
   
const text = [
    'ripple cta size2xl uppercase hoverGlow',
    'danger pill animateBounce',
    'primary lg rounded hoverEnlarge',
    'success square animatePulse',
    'link text2xl hoverGlow semibold',
    'ghost circle hoverSpin transitionSlow',
    'warning sizeXl bold hoverRotate activeExplode',
    'secondary neumorphism hoverFade uppercase',
    'outline pill hoverScale animateBounce',
    'primary roundedFull hoverLift ripple',
    'danger square hoverSpin activeShrink',
    'success lg animatePulse hoverEnlarge',
    'ghost size2xl transitionSlow hoverRotate',
    'cta bold uppercase hoverGlow activeExplode',
    'warning pill hoverBounce animateSpin',
    'secondary square hoverFade light',
    'outline circle hoverScale ripple',
    'primary neumorphism lg hoverLift',
    'danger size2xl animateBounce uppercase',
    'success rounded hoverGlow activeRipple'
];
   
    const tindex = useRef(0);
    const direction = useRef(1);
    useEffect(() => {
        setTimeout(() => {
            const t = text[tindex.current];
            if(direction.current === 1 && code.length < t.length){
                setCode(t.slice(0, code.length + 1));
            } else{
                if(direction.current == 1) {
                    direction.current = -1;
                }
                const newLength = code.length - 1;
                setCode(t.slice(0, newLength));
                if(newLength == 0){  
                    tindex.current = (tindex.current + 1) % text.length;
                    direction.current = 1;
                }
            }   
        }, (code.length === text[tindex.current].length || code.length == 0) ? 2000 : 100);
    }, [code]);

const buttonProps = {
    // Colors
    primary: code.includes('primary'),
    secondary: code.includes('secondary'),
    danger: code.includes('danger'),
    warning: code.includes('warning'),
    success: code.includes('success'),
    cta: code.includes('cta'),
    ghost: code.includes('ghost'),
    outline: code.includes('outline'),
    link: code.includes('link'),
    neumorphism: code.includes('neumorphism'),
    
    // Sizes
    sizeXs: code.includes('sizeXs'),
    sizeSm: code.includes('sizeSm'),
    sizeMd: code.includes('sizeMd'),
    sizeLg: code.includes('sizeLg'),
    sizeXl: code.includes('sizeXl'),
    size2xl: code.includes('size2xl'),
    
    // Shapes
    rounded: code.includes('rounded'),
    square: code.includes('square'),
    pill: code.includes('pill'),
    circle: code.includes('circle'),
    
    // Text
    uppercase: code.includes('uppercase'),
    lowercase: code.includes('lowercase'),
    bold: code.includes('bold'),
    semibold: code.includes('semibold'),
    light: code.includes('light'),
    thin: code.includes('thin'),
    
    // Interactions
    hoverGlow: code.includes('hoverGlow'),
    hoverEnlarge: code.includes('hoverEnlarge'),
    hoverScale: code.includes('hoverScale'),
    hoverRotate: code.includes('hoverRotate'),
    hoverBounce: code.includes('hoverBounce'),
    hoverSpin: code.includes('hoverSpin'),
    
    // Active states
    activeRipple: code.includes('activeRipple'),
    activeExplode: code.includes('activeExplode'),
    activeShrink: code.includes('activeShrink'),
    
    // Animations
    animatePulse: code.includes('animatePulse'),
    animateBounce: code.includes('animateBounce'),
    animateSpin: code.includes('animateSpin'),
    
    // Special
    ripple: code.includes('ripple'),
    transitionSlow: code.includes('transitionSlow')
};





    
    const [copyCodeToggle, setCopyCodeToggle] = useState(false);
    const handleCodeClick = () => {
        navigator.clipboard.writeText("npx signal-layers copy");
        setCopyCodeToggle(true);
        setTimeout(() => setCopyCodeToggle(false), 1500);
    }
    return(
    <>

        <MagnifyingCursor/>

        {/* Navigation Bar */}
        <div className="h-16 w-full flex flex-row items-center justify-end px-4 py-4 gap-2 bg-gray-300">
            <div className="flex flex-row items-center justify-center gap-6">
                <p className="text-lg font-normal cursor-pointer hover:text-gray-500">Docs</p>
                <p className="text-lg font-normal cursor-pointer hover:text-gray-500">Components</p>
                <FaGithub className="h-auto w-6 cursor-pointer hover:text-gray-500"/>
            </div>
        </div>

        {/* Hero Section */}
        <div className="min-h-screen min-w-screen p-16 flex flex-col items-center justify-center gap-6 bg-gray-300">
            
            
            <h1 className="text-5xl lg:text-9xl font-bold">Signal UI</h1>
            <p className="text-2xl pb-8">Simple. Clean. Intent-driven.</p>    

                {/* Code Block */}
            <div className=" bg-black/80 h-20 w-84 rounded-md relative cursor-pointer flex items-center justify-center" onClick={handleCodeClick}>
                <div className="h-2 w-2 bg-red-500/50 rounded-full absolute top-1 left-1 hover:bg-red-500"></div>
                <div className="h-2 w-2 bg-yellow-500/50 rounded-full absolute top-1 left-4 hover:bg-yellow-500"></div>
                <div className="h-2 w-2 bg-green-500/50 rounded-full absolute top-1 left-7 hover:bg-green-500"></div>
                <div className="font-mono text-lg text-white/90 ">npx signal-layers copy</div>
                {copyCodeToggle && (
                        <>
                            <div className="absolute -top-10 text-white bg-green-600 px-2 py-1 rounded-md font-extralight text-base">Copied!</div>
                            <IoMdArrowDropdown className="absolute -top-4 h-6 w-6 text-green-600" />
                        </>
                    )
                }
            </div>

                    <div className="flex flex-col items-center justify-around gap-10">

                        <div className="pt-6">
                            {'<Button ' + code + ' />'}
                            <span className={`inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse`}></span>
                        </div>
                        
                        <div>
                             <Button {...buttonProps}>
                                Get Started 
                            </Button>
                        </div>

                    </div>

        </div>

        {/* What is Signal UI Section */}
        <div className="min-h-screen min-w-screen p-8 bg-gray-300 flex flex-col items-center justify-start">
            <h1 className="text-4xl lg:text-8xl pb-6">What is Signal UI</h1>

            <p className="text-xl max-w-xl lg:max-w-3xl lg:text-3xl text-justify pb-4">
                Signal UI is a component library where you own the code. Copy once, customize forever. No dependencies, no version conflicts, no documentation hunting.
            </p>

            <p className="text-xl max-w-xl lg:max-w-3xl lg:text-3xl text-justify pb-4">
                Components understand intent, not configuration. You don't pass props or variants. You tell the component what you want: `primary lg hoverGlow`. It responds accordingly.
            </p>

            <p className="text-xl max-w-xl lg:max-w-3xl lg:text-3xl text-justify pb-4">
                Each component has dimensions—tone, size, shape, interaction. Signals group these dimensions into meaningful intent. A signal can affect one dimension or multiple at once.
            </p>

            <p className="text-xl max-w-xl lg:max-w-3xl lg:text-3xl text-justify pb-4">
                The file is the documentation. Read the component, understand its capabilities. No external docs, no API references. The code explains itself.
            </p>

            <p className="text-xl max-w-xl lg:max-w-3xl lg:text-3xl text-justify pb-4">
                This isn't another abstraction layer. It's not just copy-paste components. It's the middle ground: semantic intent that you completely own.
            </p>

            <div className="mt-12 max-w-4xl">
                <h3 className="text-3xl font-bold mb-6 text-center">How it Works</h3>
                <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                        <h4 className="text-2xl font-bold mb-3">1. Copy</h4>
                        <p className="text-lg lg:text-xl">Run one command. The component file is now in your project.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                        <h4 className="text-2xl font-bold mb-3">2. Customize</h4>
                        <p className="text-lg lg:text-xl">Add signals, remove signals, modify behavior. The file is yours.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                        <h4 className="text-2xl font-bold mb-3">3. Use</h4>
                        <p className="text-lg lg:text-xl">Express intent through signals. No documentation needed.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Key Differentiators Section */}
        <div className="min-h-screen min-w-screen p-8 bg-gray-300 flex flex-col items-center justify-start">
            <h1 className="text-4xl lg:text-8xl pb-6">Why Signal UI is Different</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <h3 className="text-2xl font-bold mb-4">No Dependency Hell</h3>
                    <p className="text-xl text-justify">Copy once, own forever. No package updates, version conflicts, or breaking changes. The code is yours to keep and modify.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <h3 className="text-2xl font-bold mb-4">No Variant Explosion</h3>
                    <p className="text-xl text-justify">Intent-driven signals instead of endless enums. No more digging through docs to find the right combination of props.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <h3 className="text-2xl font-bold mb-4">No Documentation Hunting</h3>
                    <p className="text-xl text-justify">Self-documenting code that reads like natural language. The component tells you what it can do.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <h3 className="text-2xl font-bold mb-4">No Design Lock-in</h3>
                    <p className="text-xl text-justify">Adapt to any design system in seconds. Remove signals, add new ones, or modify existing behavior without breaking anything.</p>
                </div>
            </div>

            <div className="mt-12 max-w-4xl">
                <h3 className="text-3xl font-bold mb-6 text-center">The Perfect Balance</h3>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/20">
                                <th className="text-left pb-4 text-sm">Approach</th>
                                <th className="text-center pb-4 pr-1 text-sm">Abstraction</th>
                                <th className="text-center pb-4 pr-1 text-sm">Ownership</th>
                                <th className="text-center pb-4 text-sm">Customization</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-white/10">
                                <td className="py-2 text-sm">Traditional UI Libraries</td>
                                <td className="text-center py-2 pr-1 text-sm lg:text-3xl lg:py-4">High</td>
                                <td className="text-center py-2 pr-1 text-sm  lg:text-3xl lg:py-4">Low</td>
                                <td className="text-center py-2 text-sm lg:text-3xl lg:py-4">Limited</td>
                            </tr>
                            <tr className="border-b border-white/10">
                                <td className="py-2 text-sm">Copyable Components</td>
                                <td className="text-center py-2 pr-1 text-sm lg:text-3xl lg:py-4">Low</td>
                                <td className="text-center py-2 pr-1 text-sm lg:text-xl lg:py-4">High</td>
                                <td className="text-center py-2 text-sm lg:py-4 lg:text-xl">Complex</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-bold text-sm">Signal UI</td>
                                <td className="text-center py-2 pr-1 text-sm lg:text-xl lg:py-4">Balanced</td>
                                <td className="text-center py-2 pr-1 text-sm lg:text-xl lg:py-4">Full</td>
                                <td className="text-center py-2 text-sm lg:text-xl lg:py-4">Simple</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


        <div className="min-h-screen min-w-screen p-8 bg-gray-300 flex flex-col items-center justify-start">
            <h1 className="text-4xl lg:text-8xl pb-6">The Idea Behind Signal UI</h1>

            <p className="text-xl max-w-xl lg:max-w-3xl lg:text-3xl text-justify pb-4">
                I started Signal UI because I was tired of choosing between two bad options: either get locked into someone else's design system with endless configuration, or copy-paste components so complex you're afraid to touch them. There had to be a better way.
            </p>

            <p className="text-xl max-w-xl lg:max-w-3xl lg:text-3xl text-justify pb-4">
                The breakthrough was realizing that components should understand intent, not configuration. When I want a large button with a ripple effect, I should just say that. No digging through docs for the right prop combination, no wrestling with variant systems. The component should know what I mean because I'm speaking its language.
            </p>

            <p className="text-xl max-w-xl lg:max-w-3xl lg:text-3xl text-justify pb-4">
                This led to the concept of signals—simple, declarative expressions of intent that map directly to visual and behavioral dimensions. A signal like `primary lg hoverGlow` isn't just a string of classes; it's a conversation with your component. Each signal targets specific dimensions—tone, size, interaction—and they work together without conflicts or complexity.
            </p>

            <p className="text-xl max-w-xl lg:max-w-3xl lg:text-3xl text-justify pb-4">
                But signals aren't just about styling. They're about ownership. When you copy a Signal UI component, you're not getting a black box—you're getting a starting point. The file becomes yours. You can remove signals, add new ones, or modify existing behavior. The component adapts to your design system, not the other way around.
            </p>

            <p className="text-xl max-w-xl lg:max-w-3xl lg:text-3xl text-justify pb-4">
                This is where we diverge from both traditional UI libraries and utility-first approaches. Traditional libraries give you power but take away ownership. Utility classes give you ownership but no semantic meaning. Signal UI gives you both—semantic intent signals that you own completely, with zero dependencies and no hidden magic.
            </p>

            <p className="text-xl max-w-xl lg:max-w-3xl lg:text-3xl text-justify pb-4">
                The result is something that feels like it should have always existed: components that are simple enough to understand in seconds, powerful enough for production use, and flexible enough to become truly yours. No documentation required, no build process needed, no vendor lock-in. Just clean, intentional code that does exactly what you tell it to do.
            </p>
        </div>

        {/* Features Section
        <div className="min-h-screen min-w-screen p-8 flex flex-col items-center justify-center gap-4 bg-gray-300">
            <div className="grid grid-cols-2 gap-8 w-full px-8 py-8 md:px-16 lg:px-24 xl:px-32 bg-red-500/50">
                <div className="bg-white/50 p-4 rounded-md flex flex-col items-center justify-start gap-2 overflow-hidden">
                    <p className="text-xs font-bold uppercase text-center">Card Title</p>
                    <p className="text-xs font-light text-center wrap-break-word overflow-hidden">Card Description</p>
                </div>
                <div className="bg-white/50 p-4 rounded-md flex flex-col items-center justify-start gap-2 overflow-hidden">
                    <p className="text-xs font-bold uppercase text-center">Card Title</p>
                    <p className="text-xs font-light text-center wrap-break-word overflow-hidden">Card Description</p>
                </div>
                <div className="bg-white/50 p-4 rounded-md flex flex-col items-center justify-start gap-2 overflow-hidden">
                    <p className="text-xs font-bold uppercase text-center">Card Title</p>
                    <p className="text-xs font-light text-center wrap-break-word overflow-hidden">Card Description</p>
                </div>
                <div className="bg-white/50 p-4 rounded-md flex flex-col items-center justify-start gap-2 overflow-hidden">
                    <p className="text-xs font-bold uppercase text-center">Card Title</p>
                    <p className="text-xs font-light text-center wrap-break-word overflow-hidden">Card Description</p>
                </div>
            </div>
        </div>  */}

        {/* Footer Section */}
        <div className="h-10 w-full flex flex-row items-center justify-center gap-2 bg-gray-300">
            <p className="text-xs font-light">2025</p>
            <p className="text-xs font-light">Signal UI</p>
        </div>
        
    </>
    )
}