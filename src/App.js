import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './page/Home';
import Abouts from "./page/Abouts";
import Footer from "./components/Footer";
import PageNotFound from "./page/Error404NotFound";
import Fichelogements from "./page/Fichelogements";
import './style/main.scss';

function App() {

  return (
    <>
      <Header />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/abouts" element={<Abouts />} />
          <Route path="/fichelogements/:id"  element={<Fichelogements />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;