import React from "react";
import LandingPage from "./components/LandingPage";
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <LandingPage />
    </div>
  );
}

export default App;
