
import { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function ProgressTracker() {
    const [val, setVal] = useState(10);
    const setValuer = (e) => setVal(Number(e.target.value));
  
    return (
      <>
        <div className="App">
          <h1>Progress bar</h1>
          <ProgressBar width={val} />
          <form>
            <label htmlFor="html">Input Percentage:</label>
            <input type="number" onChange={setValuer} value={val} />
          </form>
        </div>
      </>
    );
  }
