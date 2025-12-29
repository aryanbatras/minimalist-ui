import { CheckBox } from "signal-layers";
import { useState } from "react";

export default function App() {
  return (
    <div className="items-center justify-center flex h-screen w-screen gap-2 p-8">
        <CheckBox label="label"  />
        {/* <CheckBox checked labelStart /> */}
        {/* <CheckBox danger invalid errorMsg="Required" /> */}
    </div>
  );    
}
