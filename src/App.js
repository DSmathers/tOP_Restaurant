import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import { BrowserRouter as Router } from 'react-router-dom'
import Body from "./components/Body";

function App() {
  return (
    <Router>
      <Header />
      <Body />
      <Footer />
    </Router>
  );
}

export default App;
