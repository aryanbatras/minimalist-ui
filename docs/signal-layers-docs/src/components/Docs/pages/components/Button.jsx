import { DocsLayout } from "../../layout/DocsLayout.jsx";
import { Button } from "../../../signal-layers";
import { useState } from "react";

export function ButtonPage() {
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

  const generateCode = (signals, label) => {
    const signalNames = Object.keys(signals)
      .filter(key => signals[key])
      .map(key => key === '2xl' ? '"2xl"' : key)
      .join(' ');
    return `<Button ${signalNames}>${label}</Button>`;
  };

  const CopyButton = ({ signals, children }) => {
    const code = generateCode(signals, children);
    const isCopied = copied === code;

      
    const handleClick = (e) => {
      e.stopPropagation();
      copyToClipboard(code);
    };
    
    
    return (
      <div className="group cursor-pointer inline-block">
        <Button {...signals}>
          {children}
        </Button>
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
        <h1 className="text-7xl font-light mb-8 text-black tracking-tight">Button</h1>
        <p className="text-xl text-slate-600 mb-20 leading-relaxed">
          Infinite signal combinations. Pure intention.
        </p>

         {/* Ripple Effect */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Ripple Effect</h2>
          <div className="flex flex-wrap gap-4">
            <CopyButton signals={{primary:true, ripple: true}}>primary ripple</CopyButton>
          </div>
        </section>  

        {/* Tone/Visual Group */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Tone/Visual Variants</h2>
          <div className="flex flex-wrap gap-4">
            <CopyButton signals={{primary: true}}>primary</CopyButton>
            <CopyButton signals={{secondary: true}}>secondary</CopyButton>
            <CopyButton signals={{outline: true}}>outline</CopyButton>
            <CopyButton signals={{ghost: true}}>ghost</CopyButton>
            <CopyButton signals={{link: true}}>link</CopyButton>
            <CopyButton signals={{danger: true}}>danger</CopyButton>
            <CopyButton signals={{warning: true}}>warning</CopyButton>
            <CopyButton signals={{success: true}}>success</CopyButton>
          </div>
        </section>

        {/* Refined Color Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Refined Color Variants</h2>
          <div className="flex flex-wrap gap-4">
            <CopyButton signals={{gentle: true}}>gentle</CopyButton>
            <CopyButton signals={{warm: true}}>warm</CopyButton>
            <CopyButton signals={{cool: true}}>cool</CopyButton>
            <CopyButton signals={{minimalist: true}}>minimalist</CopyButton>
            <CopyButton signals={{shine: true}}>shine</CopyButton>
            <CopyButton signals={{fresh: true}}>fresh</CopyButton>
            <CopyButton signals={{depth: true}}>depth</CopyButton>
            <CopyButton signals={{plush: true}}>plush</CopyButton>
            <CopyButton signals={{bold: true}}>bold</CopyButton>
            <CopyButton signals={{sleek: true}}>sleek</CopyButton>
          </div>
        </section>

        {/* Premium Visual Effects */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Premium Visual Effects</h2>
          <div className="flex flex-wrap gap-4">
            <CopyButton signals={{glass: true}}>glass</CopyButton>
            <CopyButton signals={{glassDark: true}}>glassDark</CopyButton>
            <CopyButton signals={{gradientPrimary: true}}>gradientPrimary</CopyButton>
            <CopyButton signals={{gradientSunset: true}}>gradientSunset</CopyButton>
            <CopyButton signals={{gradientOcean: true}}>gradientOcean</CopyButton>
            <CopyButton signals={{gradientForest: true}}>gradientForest</CopyButton>
            <CopyButton signals={{bright: true}}>bright</CopyButton>
            <CopyButton signals={{deep: true}}>deep</CopyButton>
            <CopyButton signals={{calm: true}}>calm</CopyButton>
            <CopyButton signals={{smooth: true}}>smooth</CopyButton>
            <CopyButton signals={{clean: true}}>clean</CopyButton>
          </div>
        </section>

        {/* Premium Combinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Premium Signal Combinations</h2>
          <div className="flex flex-wrap gap-4">
            <CopyButton signals={{gradientPrimary: true, lg: true, bold: true}}>gradientPrimary lg bold</CopyButton>
            <CopyButton signals={{bright: true, xl: true, bounceIn: true}}>bright xl bounceIn</CopyButton>
            <CopyButton signals={{glass: true, md: true, magnetic: true}}>glass md magnetic</CopyButton>
            <CopyButton signals={{deep: true, lg: true, elastic: true}}>deep lg elastic</CopyButton>
            <CopyButton signals={{clean: true, slideUp: true}}>clean slideUp</CopyButton>
            <CopyButton signals={{gentle: true, hoverGlow: true}}>gentle hoverGlow</CopyButton>
            <CopyButton signals={{smooth: true, zoom: true}}>smooth zoom</CopyButton>
            <CopyButton signals={{fresh: true, rotate: true}}>fresh rotate</CopyButton>
            <CopyButton signals={{calm: true, depth: true}}>calm depth</CopyButton>
            <CopyButton signals={{plush: true, liquid: true}}>plush liquid</CopyButton>
          </div>
        </section>

        {/* Core Signal Combinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Core Signal Combinations</h2>
          <div className="flex flex-wrap gap-4">
            <CopyButton signals={{primary: true, lg: true, bold: true}}>primary lg bold</CopyButton>
            <CopyButton signals={{danger: true, xl: true, uppercase: true, hoverScale: true}}>danger xl uppercase hoverScale</CopyButton>
            <CopyButton signals={{success: true, rounded: true}}>success rounded</CopyButton>
            <CopyButton signals={{outline: true, lg: true}}>outline lg</CopyButton>
            <CopyButton signals={{ghost: true, md: true, hoverBounce: true, activeShrink: true}}>ghost md hoverBounce activeShrink</CopyButton>
            <CopyButton signals={{gradientPrimary: true, pill: true, lg: true, magnetic: true}}>gradientPrimary pill lg magnetic</CopyButton>
            <CopyButton signals={{glass: true, rounded: true, slideUp: true}}>glass rounded slideUp</CopyButton>
            <CopyButton signals={{neumorphism: true, lg: true, hoverEnlarge: true}}>neumorphism lg hoverEnlarge</CopyButton>
            <CopyButton signals={{bright: true, pill: true, bounceIn: true}}>bright pill bounceIn</CopyButton>
            <CopyButton signals={{deep: true, rounded: true, elastic: true}}>deep rounded elastic</CopyButton>
          </div>
        </section>

        {/* Enhanced Size Group */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Enhanced Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <CopyButton signals={{xs: true}}>xs</CopyButton>
            <CopyButton signals={{sm: true}}>sm</CopyButton>
            <CopyButton signals={{md: true}}>md</CopyButton>
            <CopyButton signals={{lg: true}}>lg</CopyButton>
            <CopyButton signals={{xl: true}}>xl</CopyButton>
            <CopyButton signals={{"2xl": true}}>2xl</CopyButton>
          </div>
        </section>

        {/* Text Layer Group */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Text Control</h2>
          <div className="flex flex-wrap gap-4">
            <CopyButton signals={{bold: true}}>bold</CopyButton>
            <CopyButton signals={{semibold: true}}>semibold</CopyButton>
            <CopyButton signals={{light: true}}>light</CopyButton>
            <CopyButton signals={{uppercase: true}}>uppercase</CopyButton>
            <CopyButton signals={{capitalize: true}}>capitalize</CopyButton>
            <CopyButton signals={{underline: true}}>underline</CopyButton>
          </div>
        </section>

        {/* State Group */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">States</h2>
          <div className="flex flex-wrap gap-4">
            <CopyButton signals={{loading: true}}>loading</CopyButton>
            <CopyButton signals={{disabled: true}}>disabled</CopyButton>
            <CopyButton signals={{selected: true}}>selected</CopyButton>
            <CopyButton signals={{pressed: true}}>pressed</CopyButton>
          </div>
        </section>

        {/* Enhanced Shape Group */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Enhanced Shapes</h2>
          <div className="flex flex-wrap gap-4">
            <CopyButton signals={{square: true}}>square</CopyButton>
            <CopyButton signals={{rounded: true}}>rounded</CopyButton>
            <CopyButton signals={{pill: true}}>pill</CopyButton>
            <CopyButton signals={{aspectSquare: true}}>aspectSquare</CopyButton>
          </div>
        </section>

        {/* Enhanced Interaction Group */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Interactions</h2>
          <div className="flex flex-wrap gap-4">
            <CopyButton signals={{hoverGlow: true}}>hoverGlow</CopyButton>
            <CopyButton signals={{hoverScale: true}}>hoverScale</CopyButton>
            <CopyButton signals={{hoverBounce: true}}>hoverBounce</CopyButton>
            <CopyButton signals={{hoverPulse: true}}>hoverPulse</CopyButton>
            <CopyButton signals={{activeShrink: true}}>activeShrink</CopyButton>
            <CopyButton signals={{animatePulse: true}}>animatePulse</CopyButton>
            <CopyButton signals={{animateBounce: true}}>animateBounce</CopyButton>
            <CopyButton signals={{bounceIn: true}}>bounceIn</CopyButton>
            <CopyButton signals={{slideIn: true}}>slideIn</CopyButton>
            <CopyButton signals={{slideUp: true}}>slideUp</CopyButton>
            <CopyButton signals={{zoom: true}}>zoom</CopyButton>
            <CopyButton signals={{rotate: true}}>rotate</CopyButton>
            <CopyButton signals={{pulseGlow: true}}>pulseGlow</CopyButton>
            <CopyButton signals={{magnetic: true}}>magnetic</CopyButton>
            <CopyButton signals={{liquid: true}}>liquid</CopyButton>
            <CopyButton signals={{elastic: true}}>elastic</CopyButton>
            <CopyButton signals={{wobble: true}}>wobble</CopyButton>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
