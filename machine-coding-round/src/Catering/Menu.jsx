// src/components/Menu.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  useEffect(() => {
    gsap.from(".menu-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".menu-item",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }, []);

  return (
    <section id="menu" className="py-12">
      <div className="mx-auto px-4 container">
        <h2 className="mb-8 font-bold text-3xl text-center">Our Menu</h2>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center menu-item">
            <img src="" alt="Dish 1" className="rounded-lg w-full h-64 object-cover" />
            <h3 className="mt-4 font-bold text-xl">Dish 1</h3>
            <p className="mt-2">Description of Dish 1</p>
          </div>
          {/* Add more menu items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Menu;
