import logo from "./logo.svg";
import "./App.css";
<<<<<<< Updated upstream

import { Navbar, SubNav } from "./Components/Navbar";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SubNav />
=======
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
function App() {
  return (
    <div>
      <Cart/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
