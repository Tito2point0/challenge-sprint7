import React from "react";
import Home from "./components/Home.js";
import { Route, Routes, Link } from "react-router-dom";


const App = () => {
  return (
    <div>
           <h1>Welcome to Pizza Joint</h1>
            <nav>
            <Link to="/pizza" id="pizza-form">Create Your Pizza</Link>
            <Link to="/">Home</Link>
            </nav>
            <Routes>
                <Route path="/pizza" element={<pizza />} />
                <Route path="/" element={<Home />} />
                </Routes>
           
        <div className="container">
      
                <h2> where the magic starts</h2>
        <pizza />
        </div>
    </div>
  );
};
export default App;
