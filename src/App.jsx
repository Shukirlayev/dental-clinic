import React from 'react';
import './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Equipment from './components/Equipment';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-body bg-ivory text-navy overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <Equipment />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
}
