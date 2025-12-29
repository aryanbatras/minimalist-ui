import { Slider } from "signal-layers";

export default function App() {
  return (
    <div className="items-center justify-center flex h-screen w-screen p-8">
        {/* <Slider sm danger min={100} max={200} /> */}
        {/* <Slider min={100} max={200} step={25} square/> */}
        <Slider defaultValue={50} onChange={(v) => console.log(v)} bubbleXl bubbleCircle />
    </div>
  );
}


