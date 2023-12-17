import Header from "../components/headers";
import Footer from "../components/footer";
import IndividualIntervalsExample from "../components/carousel";
// import '../public/images/1.jpg'
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
      <Header pageName={'Home'} />
      {isLoading ? (
        <div id="preloader">
          <div class="line"></div>
        </div>
      ) :
        <div style={{ "background-color": "black" }}>
          <IndividualIntervalsExample />
          <Footer />
        </div>
      }
    </>
  );
}
