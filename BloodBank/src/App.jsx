import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./App.css";
import ImageGallery from "./components/ImageGallary";

function App() {
  const Images=[
    '/d1.jpg',
    '/d3.jpg',
    '/d3.jpg',
    '/d4.jpg',
    '/d5.jpg'
  ];
  return (
    <>
      <Navbar />
      <ImageGallery images={Images}></ImageGallery>
      
      
      
    </>
  );
}

export default App;
