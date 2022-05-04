import logo from "./logo.svg";
import "./App.css";
<<<<<<< HEAD
<<<<<<< Updated upstream

=======
import Home from "./Pages/Home";
>>>>>>> 545d527d246f2e023229b4c325b423f650fef54b
import { Navbar, SubNav } from "./Components/Navbar";
import { Routes } from "react-router-dom";

function App() {
<<<<<<< HEAD
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
=======
    return (
        <div className="App">
            <Navbar />
            <SubNav />
            <Home />
        </div>
    );
>>>>>>> 545d527d246f2e023229b4c325b423f650fef54b
}

export default App;
