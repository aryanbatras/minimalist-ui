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

      </div>
    </div>
  );
}