//import logo from './logo.svg';
//import './App.css';
import React, { useEffect } from 'react';
import './Components/Css/Main.css';
import ServiceCards from './Components/Cards/ServiceCard.jsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Main() {
  useGSAP(() => {
    //gsap.from('#title', { duration: 2.5, x: '-100vw', ease: 'power1.out', delay: 0.5});
    gsap.from('#title', { duration: 2.5, opacity: 0, ease: 'power1.out', delay: 0.5});
  }, []);
  
  useEffect(() => {
    const title = document.getElementById('title');
    const text = title.textContent;
    title.textContent = ''; // Clear the original text

    const chars = text.split('').map(char => {
      const span = document.createElement('span');
      if (char === ' ') {
        span.style.marginRight = '5px'; // Add a margin to simulate space between words
      }
      span.textContent = char;
      span.className = 'split-char';
      return span;
    });

    chars.forEach((span, i) => {
      title.appendChild(span);
      span.style.animationDelay = `${i * 0.05}s`;
    });
  }, []);  // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <header className="main_title">
        <h1 id="title">Excel Manipulation Services</h1>
        <p>“Empowering Your Data, One Formula at a Time”</p>
      </header>   
      <div className="services_container">
        <ServiceCards 
        title="VLOOKUP"
        desc="Quickly search and find your data with precision using our VLOOKUP service."
        btnText="Use VLOOKUP"/>
        <ServiceCards className="overlay"
        title="SUM"
        desc="Easily calculate the sum of your data sets with our efficient SUM tool."
        btnText="Use SUM" />
        <ServiceCards className="overlay"
        title="IF Statement"
        desc="Make data-driven decisions with conditional logic using our IF Statement service."
        btnText="Use IF Statement" />
        
      </div>     

        {/* Add more services as needed */}
    </div>
    
  );
}

export default Main;

