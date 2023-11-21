import { useEffect, useState } from "react";
import { cn } from "../utils/styling";

function TrafficLight() {
  const baseStyles = "rounded-full w-12 aspect-square bg-gray-500";
  const [state, setState] = useState<"red" | "yellow" | "green">("red");

  useEffect(() => {
    setTimeout(() => {
      setState("yellow");
    }, 5000);
  });

  return (
    <div className="flex flex-col gap-5 border-2 border-black p-2 rounded-lg bg-gray-800">
      <div
        className={cn(baseStyles, { "bg-red-500": state === "red" })}
        onClick={() => setState("red")}
      ></div>
      <div
        className={cn(baseStyles, { "bg-yellow-500": state === "yellow" })}
        onClick={() => setState("yellow")}
      ></div>
      <div
        className={cn(baseStyles, { "bg-green-500": state === "green" })}
        onClick={() => setState("green")}
      ></div>
    </div>
  );
}

export default TrafficLight;
