import { DocsLayout } from "../../layout/DocsLayout.jsx";
import { Card } from "../../../signal-layers";
import { useState } from "react";

export function CardPage() {
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

  const generateCode = (signals, title, description, buttonLabel) => {
    const signalNames = Object.keys(signals)
      .filter(key => signals[key])
      .map(key => key === '2xl' ? '"2xl"' : key)
      .join(' ');
    return `<Card ${signalNames} title="${title}" description="${description}" buttonLabel="${buttonLabel}" />`;
  };

  const CopyCard = ({ signals, title, description, buttonLabel }) => {
    const code = generateCode(signals, title, description, buttonLabel);
    const isCopied = copied === code;

    const handleClick = (e) => {
      e.stopPropagation();
      copyToClipboard(code);
    };
    
    return (
      <div className="group cursor-pointer">
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
          <Card {...signals} title={title} description={description} buttonLabel={buttonLabel} />
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
        <h1 className="text-7xl font-light mb-8 text-black tracking-tight">Card</h1>
        <p className="text-xl text-slate-600 mb-20 leading-relaxed">
          Infinite signal combinations. Pure intention.
        </p>

        {/* Tone/Visual Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Tone/Visual Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CopyCard signals={{primary: true}} title="Primary Card" description="Primary themed card with blue accents" buttonLabel="Learn More" />
            <CopyCard signals={{secondary: true}} title="Secondary Card" description="Secondary themed card with gray accents" buttonLabel="Learn More" />
            <CopyCard signals={{success: true}} title="Success Card" description="Success themed card with green accents" buttonLabel="Learn More" />
            <CopyCard signals={{warning: true}} title="Warning Card" description="Warning themed card with yellow accents" buttonLabel="Learn More" />
            <CopyCard signals={{danger: true}} title="Danger Card" description="Danger themed card with red accents" buttonLabel="Learn More" />
            <CopyCard signals={{transparent: true}} title="Transparent Card" description="Transparent card with minimal styling" buttonLabel="Learn More" />
          </div>
        </section>

        {/* Enterprise Card Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Enterprise Card Examples</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Product Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Card 
                    primary 
                    lg
                    title="Premium Plan"
                    description="Advanced features for growing teams. Unlimited users and priority support."
                    buttonLabel="Get Started"
                  />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Card 
                    secondary 
                    lg
                    title="Standard Plan"
                    description="Perfect for small businesses. Essential features with standard support."
                    buttonLabel="Choose Plan"
                  />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Card 
                    transparent 
                    lg
                    title="Basic Plan"
                    description="Free tier for individuals. Core features with community support."
                    buttonLabel="Start Free"
                  />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Card primary lg title="Premium Plan" description="Advanced features..." buttonLabel="Get Started" />
<Card secondary lg title="Standard Plan" description="Perfect for small..." buttonLabel="Choose Plan" />
<Card transparent lg title="Basic Plan" description="Free tier for..." buttonLabel="Start Free" />`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Dashboard Analytics Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Card 
                    success
                    centered
                    title="Revenue"
                    description="$45,231"
                    buttonLabel="View Details"
                  />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Card 
                    primary
                    centered
                    title="Users"
                    description="2,543"
                    buttonLabel="View Details"
                  />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Card 
                    warning
                    centered
                    title="Conversion"
                    description="3.2%"
                    buttonLabel="View Details"
                  />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Card 
                    danger
                    centered
                    title="Bounce Rate"
                    description="42%"
                    buttonLabel="View Details"
                  />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Card success centered title="Revenue" description="$45,231" buttonLabel="View Details" />
<Card primary centered title="Users" description="2,543" buttonLabel="View Details" />
<Card warning centered title="Conversion" description="3.2%" buttonLabel="View Details" />
<Card danger centered title="Bounce Rate" description="42%" buttonLabel="View Details" />`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">User Profile Cards</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Card 
                    centered
                    secondary
                    imageCircle
                    image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    imageName="Michael Chen"
                    title="Michael Chen"
                    description="Lead Software Engineer"
                    buttonLabel="View Profile"
                    onButtonClick={() => alert("Michael Chen Profile clicked")}
                  />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Card 
                    centered
                    success
                    imageCircle
                    image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    imageName="Emily Davis"
                    title="Emily Davis"
                    description="Marketing Director"
                    buttonLabel="View Profile"
                    onButtonClick={() => alert("Emily Davis Profile clicked")}
                  />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Card secondary centered imageCircle image="https://..." imageName="Michael Chen" title="Michael Chen" description="Lead Software Engineer" buttonLabel="View Profile" onButtonClick={() => alert("Michael Chen Profile clicked")}/>
<Card success centered imageCircle image="https://..." imageName="Emily Davis" title="Emily Davis" description="Marketing Director" buttonLabel="View Profile" onButtonClick={() => alert("Emily Davis Profile clicked")}/>`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Size Variations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Size Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <CopyCard signals={{xs: true}} title="XS Card" description="Extra small card" buttonLabel="Action" />
            <CopyCard signals={{sm: true}} title="SM Card" description="Small card" buttonLabel="Action" />
            <CopyCard signals={{md: true}} title="MD Card" description="Medium card" buttonLabel="Action" />
            <CopyCard signals={{lg: true}} title="LG Card" description="Large card" buttonLabel="Action" />
            <CopyCard signals={{xl: true}} title="XL Card" description="Extra large card" buttonLabel="Action" />
          </div>
        </section>

        {/* Layout Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Layout Variants</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Text Alignment</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Card 
                    primary
                    leftAligned
                    title="Left Aligned"
                    description="Content aligned to the left side"
                    buttonLabel="Learn More"
                  />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Card 
                    secondary
                    centered
                    title="Centered"
                    description="Content aligned in the center"
                    buttonLabel="Learn More"
                  />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Card 
                    success
                    rightAligned
                    title="Right Aligned"
                    description="Content aligned to the right side"
                    buttonLabel="Learn More"
                  />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Card primary leftAligned title="Left Aligned" description="Content aligned..." buttonLabel="Learn More" />
<Card secondary centered title="Centered" description="Content aligned..." buttonLabel="Learn More" />
<Card success rightAligned title="Right Aligned" description="Content aligned..." buttonLabel="Learn More" />`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Interactive Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Card 
                    primary
                    interactive
                    title="Interactive Card"
                    description="Hover to see the scale effect"
                    buttonLabel="Click Me"
                    onClick={() => alert("Card clicked")}
                  />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Card 
                    secondary
                    title="Standard Card"
                    description="No hover effect applied"
                    buttonLabel="Click Me"
                  />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Card primary interactive title="Interactive Card" description="Hover to see..." buttonLabel="Click Me" onClick={() => alert("Card clicked")} />
<Card secondary title="Standard Card" description="No hover effect..." buttonLabel="Click Me" />`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Image Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Image Variants</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Image Aspect Ratios</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Card 
                    primary
                    imageLandscape
                    image="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop&auto=format&q=80"
                    imageName="Mountain Landscape"
                    title="Landscape Image"
                    description="16:9 aspect ratio image"
                    buttonLabel="View More"
                  />
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Card 
                    secondary
                    imageCircle
                    image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    imageName="Portrait"
                    title="Circular Image"
                    description="1:1 aspect ratio with circular crop"
                    buttonLabel="View More"
                  />
                </div>
              </div>
              <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
                <pre className="break-all">{`<Card primary imageLandscape image="https://..." imageName="Mountain Landscape" title="Landscape Image" description="16:9 aspect ratio" buttonLabel="View More" />
<Card secondary imageCircle image="https://..." imageName="Portrait" title="Circular Image" description="1:1 aspect ratio" buttonLabel="View More" />`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Combinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Advanced Signal Combinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CopyCard signals={{primary: true, lg: true, interactive: true}} title="Primary Large Interactive" description="Large primary card with hover effect" buttonLabel="Explore" />
            <CopyCard signals={{success: true, centered: true, xl: true}} title="Success Centered XL" description="Extra large success card with center alignment" buttonLabel="Continue" />
            <CopyCard signals={{danger: true, rightAligned: true, imageCircle: true}} title="Danger Right Circle" description="Danger card with right alignment and circular image" buttonLabel="Alert" />
            <CopyCard signals={{warning: true, interactive: true, md: true}} title="Warning Interactive MD" description="Medium warning card with hover effect" buttonLabel="Warning" />
            <CopyCard signals={{secondary: true, centered: true, lg: true}} title="Secondary Centered LG" description="Large secondary card with center alignment" buttonLabel="Details" />
            <CopyCard signals={{transparent: true, interactive: true, xl: true, onClick: () => alert("View clicked")}} title="Transparent Interactive XL" description="Extra large transparent card with hover effect" buttonLabel="View" />
          </div>
        </section>

        {/* E-commerce Product Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">E-commerce Product Grid</h2>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Card 
                  primary
                  imageLandscape
                  image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=450&fit=crop&auto=format&q=80"
                  imageName="Wireless Headphones"
                  title="Premium Headphones"
                  description="Noise-cancelling wireless headphones with 30hr battery"
                  buttonLabel="Add to Cart"
                  onButtonClick={() => alert("Added Premium Headphones to cart")}
                />
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Card 
                  secondary
                  imageLandscape
                  image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&h=450&fit=crop&auto=format&q=80"
                  imageName="Smart Watch"
                  title="Smart Watch Pro"
                  description="Advanced fitness tracking and health monitoring"
                  buttonLabel="Add to Cart"
                  onButtonClick={() => alert("Added Smart Watch Pro to cart")}
                />
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Card 
                  success
                  imageLandscape
                  image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=450&fit=crop&auto=format&q=80"
                  imageName="Laptop"
                  title="UltraBook Pro"
                  description="Lightweight laptop with powerful performance"
                  buttonLabel="Add to Cart"
                  onButtonClick={() => alert("Added UltraBook Pro to cart")}
                />
              </div>
            </div>
            <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
              <pre className="break-all">{`<Card primary imageLandscape image="https://..." imageName="Wireless Headphones" title="Premium Headphones" description="Noise-cancelling..." buttonLabel="Add to Cart" onButtonClick={() => alert("Added Premium Headphones to cart")}/>
<Card secondary imageLandscape image="https://..." imageName="Smart Watch" title="Smart Watch Pro" description="Advanced fitness..." buttonLabel="Add to Cart" onButtonClick={() => alert("Added Smart Watch Pro to cart")}/>
<Card success imageLandscape image="https://..." imageName="Laptop" title="UltraBook Pro" description="Lightweight laptop..." buttonLabel="Add to Cart" onButtonClick={() => alert("Added UltraBook Pro to cart")}/>`}</pre>
            </div>
          </div>
        </section>

        {/* Content Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Content Cards</h2>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Card 
                  primary
                  title="Getting Started"
                  description="Learn the basics of our platform with comprehensive tutorials and guides designed for beginners."
                  buttonLabel="Start Learning"
                />
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Card 
                  secondary
                  title="Advanced Features"
                  description="Explore powerful features and customization options to take your projects to the next level."
                  buttonLabel="Explore Features"
                />
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Card 
                  success
                  title="Best Practices"
                  description="Discover industry best practices and optimization techniques for maximum performance."
                  buttonLabel="Learn More"
                />
              </div>
            </div>
            <div className="mt-4 bg-slate-100 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-lg">
              <pre className="break-all">{`<Card primary title="Getting Started" description="Learn the basics..." buttonLabel="Start Learning" />
<Card secondary title="Advanced Features" description="Explore powerful..." buttonLabel="Explore Features" />
<Card success title="Best Practices" description="Discover industry..." buttonLabel="Learn More" />`}</pre>
            </div>
          </div>
        </section>

        {/* Signal Reference */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 text-slate-800">Signal Reference</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              // Size
              'xs', 'sm', 'md', 'lg', 'xl',
              // Layout
              'interactive', 'centered', 'rightAligned', 'leftAligned',
              // Image
              'imageCircle', 'imageLandscape',
              // Tone
              'primary', 'secondary', 'success', 'warning', 'danger', 'transparent'
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
              <h3 className="text-lg font-medium mb-4 text-slate-700">Content Properties</h3>
              <div className="space-y-3">
                {[
                  { prop: 'title', desc: 'Card title text', type: 'string' },
                  { prop: 'description', desc: 'Card description text', type: 'string' },
                  { prop: 'buttonLabel', desc: 'Button label text', type: 'string' }
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
              <h3 className="text-lg font-medium mb-4 text-slate-700">Image Properties</h3>
              <div className="space-y-3">
                {[
                  { prop: 'image', desc: 'Image URL or path', type: 'string' },
                  { prop: 'imageName', desc: 'Image alt text for accessibility', type: 'string' }
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
              <h3 className="text-lg font-medium mb-4 text-slate-700">Event Handlers</h3>
              <div className="space-y-3">
                {[
                  { prop: 'onButtonClick', desc: 'Called when button is clicked', type: '() => void' }
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
