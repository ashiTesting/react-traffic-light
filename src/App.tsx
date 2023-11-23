import { useState } from "react";
import "./App.css";
import TrafficLight from "./components/TrafficLight";

function App() {
  const [isVisible, setVisible] = useState(true);
  return (
    <>
      <div className="w-screen h-screen flex gap-2 items-center justify-center bg-slate-500">
        {isVisible && <TrafficLight />}
        <TrafficLight />
        <TrafficLight />
        <TrafficLight initialState="go" />
      </div>
      <button
        className="bg-blue-400 px-4 py-2"
        onClick={() => setVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
    </>
  );
}

export default App;
