import React from "react";
import "./App.css";
import useWindowSize from "./useWindowSize";
function App() {
  const { width } = useWindowSize();
  // console.log(height);
  return (
    <div>
      {width < 500 ? (
        <h1 style={{ backgroundColor: "red" }}>ini ukuran handphone</h1>
      ) : width < 800 ? (
        <h1 style={{ backgroundColor: "yellow" }}>ini ukuran Tablet</h1>
      ) : (
        <h1 style={{ backgroundColor: "green" }}>Ini ukuran Monitor</h1>
      )}
    </div>
  );
}
export default App;
