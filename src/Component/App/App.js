import React from "react";
import Login from "../Login/Login";
import {Routes, Route} from "react-router-dom";
import Update from "../Update/Update";
import './App.css';
import Forget from "../Foget/Forget";
import Create from "../Create/Create";
import '../Item/Item.css'

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Create /> } />
          <Route path="/login" element={<Login /> } />
          <Route path="/update" element={<Update /> } />
          <Route path="/forget" element={<Forget /> } />
      </Routes>

    </div>
  );
}

export default App;
