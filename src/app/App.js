import React from "react";
import HomePage from "../pages/home";
import {Route, Routes} from "react-router-dom";
import CustomerPage from "../pages/customer";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route  path="Customer" element={<CustomerPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
