import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import AdminPanel from './admin-pannel/AdminPanel';
import Login from './components/login/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <Router>
      
      <Nav isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path="/" element={
          <>
          <Header />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonial />
            <Contact />
            
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/dashboard" element={isLoggedIn ? <AdminPanel /> : <Login onLogin={() => setIsLoggedIn(true)} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;