import { Card, Spinner, ProgressBar, Button } from "signal-layers";

export default function App() {
  return (
    <div className="items-center justify-center flex h-screen w-screen p-8">
      {/* <Card
        title="Build once. Think less."
        description="A calm UI system driven by contracts, not chaos."
        image="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg"
        buttonLabel="Explore More"
        onButtonClick={() => alert("Button clicked")}
        imageLandscape
        transparent
        interactive
        lg
      /> */}
      {/* <Spinner transparent /> */}
      <Button cta rounded lg hoverLift>Button</Button>
      <ProgressBar value={50} primary lg/>
    </div>
  );
}


