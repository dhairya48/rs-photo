import Header from "../components/headers";
import Landing from "../components/landing"
import Services from "../components/services"
import Portfolio from "../components/portfolio";
import Testimonial from "../components/testimonials";
import Contactus from "../components/contactus";
import Footer from "../components/footer";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed
  }, []);
  return (
    <>
      <head>
        <title>Sevenvows</title>
      </head>
      <Header pageName={'Home'} />
      <Landing />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contactus />
      <Footer />


    </>
  );
}


