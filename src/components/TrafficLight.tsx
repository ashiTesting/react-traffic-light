import { useEffect, useState } from "react";
import { cn } from "../utils/styling";

const STOP_DELAY = 5000;
const WAIT_DELAY = 2000;
const GO_DELAY = 6000;

type LightState = "stop" | "wait" | "go";

interface Props {
  initialState?: LightState;
}

function TrafficLight({ initialState }: Props) {
  const baseStyles = "rounded-full w-12 aspect-square bg-gray-500";
  const [state, setState] = useState<LightState>(initialState ?? "stop");

  useEffect(() => {
    let id: number | null = null;

    if (state === "stop") {
      id = setTimeout(() => {
        setState("wait");
      }, STOP_DELAY);
    } else if (state === "wait") {
      id = setTimeout(() => {
        setState("go");
      }, WAIT_DELAY);
    } else if (state === "go") {
      id = setTimeout(() => {
        setState("stop");
      }, GO_DELAY);
    }

    return () => {
      if (id) {
        clearTimeout(id);
      }
    };
  }, [state]);

  return (
    <div className="flex flex-col gap-5 border-2 border-black p-2 rounded-lg bg-gray-800">
      <div className={cn(baseStyles, { "bg-red-500": state === "stop" })}></div>
      <div
        className={cn(baseStyles, { "bg-yellow-500": state === "wait" })}
      ></div>
      <div className={cn(baseStyles, { "bg-green-500": state === "go" })}></div>
    </div>
  );
}

export default TrafficLight;
