import Header from "../components/headers";
import Landing from "../components/landing";
import Services from "../components/services";
import AboutUs from "../components/aboutUs";
import Portfolio from "../components/portfolio";
import Testimonial from "../components/testimonials";
import Contactus from "../components/contactus";
import Footer from "../components/footer";
import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [section, setSection] = useState('home'); // Set default section to 'home'
  const landingRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutUsRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactUsRef = useRef(null);

  useEffect(() => {
    if (section === 'home' && landingRef.current) {
      landingRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'services' && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'aboutUs' && aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'portfolio' && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'testimonials' && testimonialRef.current) {
      testimonialRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contactUs' && contactUsRef.current) {
      contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section]);

  function changeSection(data) {
    setSection(data);
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header pageName={'Home'} changeSection={changeSection} section={section} />
      <div id='home' ref={landingRef}><Landing /></div>
      <div id='services' ref={servicesRef}><Services /></div>
      <div id='aboutUs' ref={aboutUsRef}><AboutUs /></div>
      <div id='portfolio' ref={portfolioRef}><Portfolio /></div>
      <div id='testimonials' ref={testimonialRef} className="flex-grow-1"><Testimonial /></div>
      {/* <div id='contactUs' ref={contactUsRef} className="flex-grow-1"><Contactus /></div> */}
      <Footer />
    </div >
  );
}
