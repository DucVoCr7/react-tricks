import React from "react";

import "./App.css";
import { Learn } from "./Learn";

function App() {
  React.useEffect(() => {
    if (window.location.hash) {
      const idElement = window.location.hash.slice(1);
      const element = document.getElementById(idElement);
      const elementPositionY = element.getBoundingClientRect().top;
      const marginOffset = 50;
      const offsetPosition = elementPositionY + window.scrollY - marginOffset;
      window.scrollTo({ top: offsetPosition });
    }
  }, []);
  return (
    <div className="App">
      <Learn.ScrollToElement />
    </div>
  );
}

export default App;
