// src/components/Contact.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    gsap.from(".contact-form", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }, []);

  return (
    <div id="contact" className="py-12">
      <div className="mx-auto px-4 text-center container">
        <h2 className="mb-8 font-bold text-3xl">Get in Touch</h2>
        <form action="#" method="POST" className="mx-auto max-w-lg contact-form">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="focus:border-yellow-500 px-4 py-2 border rounded-lg w-full focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="focus:border-yellow-500 px-4 py-2 border rounded-lg w-full focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea id="message" name="message" className="focus:border-yellow-500 px-4 py-2 border rounded-lg w-full focus:outline-none"></textarea>
          </div>
          <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded font-bold text-white">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
