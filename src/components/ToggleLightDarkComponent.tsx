import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";

export function LightDarkComponent() {
  const [switch1, setSwitch1] = useState(false);


  return (
    <div className="flex max-w-md flex-col gap-4">
      <ToggleSwitch checked={switch1} label="Toggle me" onChange={setSwitch1} />
    </div>
  );
}
