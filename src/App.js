import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ScanqrCode from "./Component/ScanqrCode";
import Makeqrcode from "./Component/Makeqrcode";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/makeqrcode">
            <Makeqrcode />
          </Route>
          <Route path="/">
            <ScanqrCode />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
