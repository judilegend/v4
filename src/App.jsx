import { useState, useRef, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Acceuil from "./components/acceuil";
import Product from "./components/Product";
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  return (
    <main>
      <Navbar />
      <Acceuil />
      <Product />
      <Footer />
    </main>
  );
}

export default App;
