// src/components/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(".rotate-image", 
      { opacity: 0, scale: 0.5 }, 
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        stagger: 0.3, 
        scrollTrigger: {
          trigger: ".rotate-image",
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const rotateX = ((clientY / innerHeight) - 0.5) * 30;
      const rotateY = ((clientX / innerWidth) - 0.5) * -30;

      gsap.to(".rotate-image", {
        rotateX,
        rotateY,
        duration: 0.5,
        ease: "power1.out"
      });
    };

    const heroElement = heroRef.current;
    heroElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(path/to/your/image.jpg)' }}>
      <div className="flex justify-center items-center bg-black bg-opacity-50 h-full">
        <div className="relative z-10 px-4 text-center text-white">
          <h2 className="font-bold text-4xl md:text-6xl">Taste the Tradition</h2>
          <p className="mt-4 text-lg md:text-xl">Experience the best of Indian cuisine at your next event</p>
          <a href="#menu" className="inline-block bg-yellow-500 hover:bg-yellow-600 mt-8 px-4 py-2 rounded font-bold text-white">Explore Our Menu</a>
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative w-full h-full">
            <img src="" className="absolute rotate-image" style={{ top: '20%', left: '50%', transform: 'translate(-50%, -50%)', width: '100px', height: '100px' }} alt="Dish 1" />
            <img src="" className="absolute rotate-image" style={{ top: '50%', left: '80%', transform: 'translate(-50%, -50%)', width: '100px', height: '100px' }} alt="Dish 2" />
            <img src="" className="absolute rotate-image" style={{ top: '80%', left: '50%', transform: 'translate(-50%, -50%)', width: '100px', height: '100px' }} alt="Dish 3" />
            <img src="" className="absolute rotate-image" style={{ top: '50%', left: '20%', transform: 'translate(-50%, -50%)', width: '100px', height: '100px' }} alt="Dish 4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
