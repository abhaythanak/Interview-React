// src/components/ScrollingDishes.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const ScrollingDishes = () => {
  useEffect(() => {
    gsap.to(".dish", {
      xPercent: -100 * (4),
      ease: "none",
      scrollTrigger: {
        trigger: ".dish-container",
        start: "top center",
        end: () => `+=${document.querySelector(".dish-container").offsetWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });
  }, []);

  return (
    <section className="py-12">
      <div className="overflow-hidden">
        <div className="flex space-x-4 dish-container">
          <div className="flex-shrink-0 w-64 dish">
            <img src="" alt="Dish 1" className="rounded-lg w-full h-full object-cover" />
            <h3 className="mt-2 font-bold text-center">Dish 1</h3>
          </div>
          <div className="flex-shrink-0 w-64 dish">
            <img src="" alt="Dish 2" className="rounded-lg w-full h-full object-cover" />
            <h3 className="mt-2 font-bold text-center">Dish 2</h3>
          </div>
          <div className="flex-shrink-0 w-64 dish">
            <img src="" alt="Dish 3" className="rounded-lg w-full h-full object-cover" />
            <h3 className="mt-2 font-bold text-center">Dish 3</h3>
          </div>
          <div className="flex-shrink-0 w-64 dish">
            <img src="" alt="Dish 4" className="rounded-lg w-full h-full object-cover" />
            <h3 className="mt-2 font-bold text-center">Dish 4</h3>
          </div>
          <div className="flex-shrink-0 w-64 dish">
            <img src="" alt="Dish 5" className="rounded-lg w-full h-full object-cover" />
            <h3 className="mt-2 font-bold text-center">Dish 5</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingDishes;
