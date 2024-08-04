// src/components/About.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.from(".about-content", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }, []);

  return (
    <section id="about" className="bg-gray-100 py-12">
      <div className="mx-auto px-4 container">
        <h2 className="mb-8 font-bold text-3xl text-center">About Us</h2>
        <div className="mx-auto max-w-3xl text-center about-content">
          <p>We provide the best Indian cuisine catering services for your events. With years of experience and a passion for food, we ensure that your guests have a memorable dining experience.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
