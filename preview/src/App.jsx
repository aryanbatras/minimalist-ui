import { Button } from "signal-layers";

export default function App() {
  return (
    <div className="min-h-screen w-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Tone/Visual Group */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Tone/Visual Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
            <Button outline>Outline</Button>
            <Button ghost>Ghost</Button>
            <Button link>Link</Button>
            <Button danger>Danger</Button>
            <Button warning>Warning</Button>
            <Button success>Success</Button>
          </div>
        </section>

        {/* Enhanced Size Group */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Enhanced Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button sizeXs primary>Size XS</Button>
            <Button sizeSm primary>Size SM</Button>
            <Button sizeMd primary>Size MD</Button>
            <Button sizeLg primary>Size LG</Button>
            <Button sizeXl primary>Size XL</Button>
            <Button size2xl primary>Size 2XL</Button>
          </div>
        </section>

        {/* Text Layer Group */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Text Control</h2>
          <div className="flex flex-wrap gap-4">
            <Button primary bold>Bold</Button>
            <Button primary semibold>Semibold</Button>
            <Button primary light>Light</Button>
            <Button primary uppercase>Uppercase</Button>
            <Button primary capitalize>Capitalize</Button>
            <Button primary underline>Underline</Button>
            <Button primary textXl>Text XL</Button>
            <Button primary text2xl>Text 2XL</Button>
          </div>
        </section>

        {/* Enhanced Shape Group */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Enhanced Shapes</h2>
          <div className="flex flex-wrap gap-4">
            <Button primary radiusNone>Radius None</Button>
            <Button primary radius>Radius</Button>
            <Button primary radiusLg>Radius LG</Button>
            <Button primary radiusXl>Radius XL</Button>
            <Button primary radius2xl>Radius 2XL</Button>
            <Button primary radiusFull>Radius Full</Button>
            <Button primary aspectSquare>Square</Button>
          </div>
        </section>

        {/* Enhanced Interaction Group */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Enhanced Interactions</h2>
          <div className="flex flex-wrap gap-4">
            <Button primary hoverGlow>Hover Glow</Button>
            <Button primary hoverRotate>Hover Rotate</Button>
            <Button primary hoverScale>Hover Scale</Button>
            <Button primary hoverBounce>Hover Bounce</Button>
            <Button primary hoverPulse>Hover Pulse</Button>
            <Button primary activeGlow>Active Glow</Button>
            <Button primary focusRing>Focus Ring</Button>
            <Button primary focusScale>Focus Scale</Button>
          </div>
        </section>

        {/* Animation Group */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Animations & Transitions</h2>
          <div className="flex flex-wrap gap-4">
            <Button primary animateSpin>Spin</Button>
            <Button primary animatePulse>Pulse</Button>
            <Button primary animateBounce>Bounce</Button>
            <Button primary transitionFast>Fast Transition</Button>
            <Button primary transitionSlow>Slow Transition</Button>
            <Button primary transitionColors>Color Transition</Button>
          </div>
        </section>

        {/* State Group */}
        <section>
          <h2 className="text-2xl font-bold mb-4">States</h2>
          <div className="flex flex-wrap gap-4">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button primary selected>Selected</Button>
            <Button primary pressed>Pressed</Button>
          </div>
        </section>

        {/* Layout Group */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Layout & Positioning</h2>
          <div className="flex flex-wrap gap-4">
            <Button primary wFull>Full Width</Button>
            <Button primary wFit>Fit Width</Button>
            <Button primary m4>Margin 4</Button>
            <Button primary p4>Padding 4</Button>
            <Button primary gap4>Gap 4</Button>
            <Button primary flexRow>Flex Row</Button>
            <Button primary flexCol>Flex Col</Button>
          </div>
        </section>

        {/* Combinations */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Signal Combinations</h2>
          <div className="flex flex-wrap gap-4">
            <Button primary lg bold hoverGlow>Primary Large Bold Glow</Button>
            <Button danger xl uppercase hoverScale>Danger XL Uppercase Scale</Button>
            <Button success radius2xl animatePulse>Success Round Pulse</Button>
            <Button outline lg focusRing>Outline Large Focus Ring</Button>
            <Button ghost md hoverBounce activeGlow>Ghost Bounce Active Glow</Button>
          </div>
        </section>

        {/* Premium Visual Effects */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Clean Visual Effects</h2>
          <div className="flex flex-wrap gap-4">
            <Button glass>Glass</Button>
            <Button glassDark>Glass Dark</Button>
            <Button gradientPrimary>Gradient Primary</Button>
            <Button gradientSunset>Gradient Sunset</Button>
            <Button gradientOcean>Gradient Ocean</Button>
            <Button gradientForest>Gradient Forest</Button>
            <Button bright>Bright</Button>
            <Button deep>Deep</Button>
            <Button calm>Calm</Button>
            <Button smooth>Smooth</Button>
            <Button clean>Clean</Button>
          </div>
        </section>

        {/* Advanced Interactive Effects */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Clean Interactive Effects</h2>
          <div className="flex flex-wrap gap-4">
            <Button primary bounceIn>Bounce In</Button>
            <Button primary slideIn>Slide In</Button>
            <Button primary slideUp>Slide Up</Button>
            <Button primary zoom>Zoom</Button>
            <Button primary rotate>Rotate</Button>
            <Button primary pulseGlow>Pulse Glow</Button>
            <Button primary magnetic>Magnetic</Button>
            <Button primary liquid>Liquid</Button>
            <Button primary elastic>Elastic</Button>
            <Button primary wobble>Wobble</Button>
          </div>
        </section>

        {/* Clean State Combinations */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Clean State Combinations</h2>
          <div className="flex flex-wrap gap-4">
            <Button gentle>Gentle</Button>
            <Button warm>Warm</Button>
            <Button cool>Cool</Button>
            <Button minimalist>Minimalist</Button>
          </div>
        </section>

        {/* Clean Micro-interactions */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Clean Micro-interactions</h2>
          <div className="flex flex-wrap gap-4">
            <Button shine>Shine</Button>
            <Button fresh>Fresh</Button>
            <Button depth>Depth</Button>
            <Button plush>Plush</Button>
            <Button bold>Bold</Button>
            <Button sleek>Sleek</Button>
          </div>
        </section>

        {/* Clean Combinations */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Clean Signal Combinations</h2>
          <div className="flex flex-wrap gap-4">
            <Button gradientPrimary lg bold>Gradient Primary Large Bold</Button>
            <Button bright xl bounceIn>Bright XL Bounce</Button>
            <Button glass md magnetic>Glass Magnetic</Button>
            <Button deep lg elastic>Deep Elastic</Button>
            <Button clean slideUp>Clean Slide Up</Button>
            <Button gentle hoverGlow>Gentle Glow</Button>
            <Button smooth zoom>Smooth Zoom</Button>
            <Button fresh rotate>Fresh Rotate</Button>
            <Button calm depth>Calm Depth</Button>
            <Button plush liquid>Plush Liquid</Button>
          </div>
        </section>

        {/* Professional Production-Ready Styles */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Professional Production Styles</h2>
          <div className="flex flex-wrap gap-4">
            <Button apple>Apple</Button>
            <Button google>Google</Button>
            <Button spotify>Spotify</Button>
            <Button github>GitHub</Button>
            <Button slack>Slack</Button>
            <Button discord>Discord</Button>
            <Button twitter>Twitter</Button>
            <Button linkedin>LinkedIn</Button>
            <Button facebook>Facebook</Button>
            <Button amazon>Amazon</Button>
            <Button netflix>Netflix</Button>
            <Button microsoft>Microsoft</Button>
            <Button adobe>Adobe</Button>
            <Button dropbox>Dropbox</Button>
            <Button airbnb>Airbnb</Button>
            <Button uber>Uber</Button>
            <Button paypal>PayPal</Button>
            <Button stripe>Stripe</Button>
            <Button shopify>Shopify</Button>
          </div>
        </section>

        {/* Professional Combinations */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Professional Signal Combinations</h2>
          <div className="flex flex-wrap gap-4">
            <Button apple lg bold>Apple Large Bold</Button>
            <Button google md hoverScale>Google Scale</Button>
            <Button spotify xl bounceIn>Spotify Bounce</Button>
            <Button github hoverGlow>GitHub Glow</Button>
            <Button slack slideUp>Slack Slide</Button>
            <Button discord elastic>Discord Elastic</Button>
            <Button twitter zoom>Twitter Zoom</Button>
            <Button linkedin rotate>LinkedIn Rotate</Button>
            <Button facebook magnetic>Facebook Magnetic</Button>
            <Button amazon liquid>Amazon Liquid</Button>
            <Button netflix wobble>Netflix Wobble</Button>
            <Button microsoft pulseGlow>Microsoft Pulse</Button>
            <Button adobe depth>Adobe Depth</Button>
            <Button dropbox slideIn>Dropbox Slide</Button>
            <Button airbnb bounceIn>Airbnb Bounce</Button>
            <Button uber hoverEnlarge>Uber Enlarge</Button>
            <Button paypal slideUp>PayPal Slide</Button>
            <Button stripe zoom>Stripe Zoom</Button>
            <Button shopify rotate>Shopify Rotate</Button>
          </div>
        </section>

      </div>
    </div>
  );
}