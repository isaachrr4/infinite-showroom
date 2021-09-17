import React, { useState } from "react";
import "./App.css";
import Nav from "../src/components/Nav";

import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";

function App() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
     
      default:
        return <About />;
    }
  };

  return (
    <div class="bg-red-800 sm:bg-black-800">
      <main>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </main>
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default App;
