import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ImageDisplay from "./components/ImageDisplay";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ImageDisplay imageSrc="./d1.jpg" />
    </>
  );
}

export default App;
