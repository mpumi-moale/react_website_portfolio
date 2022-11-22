import React from "react";
import Header from "./components/Header/Header";
import About from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
