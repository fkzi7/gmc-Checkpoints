import { useState } from "react";


function ShowComponents() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide content" : "Show content"}
      </button>
      {isVisible && <p>Click to Hide</p>}
    </div>
  );
}

export default ShowComponents;
