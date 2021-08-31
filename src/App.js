import React from "react";
import "./App.css";
import ComponentA from "./ComponentA";
export const NameContext = React.createContext();
function App() {
  return (
    <div className="App">
      <NameContext.Provider value={"maayan"}>
        <ComponentA />
      </NameContext.Provider>
    </div>
  );
}

export default App;
