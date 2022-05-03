import logo from "./logo.svg";
import "./App.css";

import { Navbar, SubNav } from "./Components/Navbar";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SubNav />
    </div>
  );
}

export default App;
