import React from 'react';
import "./App.css"
import Header from "./components/header/Header.js";
import Content from "./components/content/content.js"

function App () {
  return (
    <div className="global">
      <Header />
      <Content />
    </div>    
    
  )
}

export default App;
