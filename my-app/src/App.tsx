import React from "react";
import "./App.css";
import Header from "./components/organisms/header";
import Footer from "./components/organisms/footer";
import Homepage from "./components/organisms/homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
