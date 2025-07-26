"use client";
import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function JoubijouxHeaderWithSlider() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  // Slider data
  const slides = [
    {
      id: 1,
      title: "VERSA NEW COLLECTION",
      subtitle: "Playful & Stackable Fine Jewelry",
      description: "Discover our latest collection of elegant rings, necklaces, and earrings crafted with precision and love.",
      buttonText: "SHOP NOW",
      image: ""
    },
    {
      id: 2,
      title: "DIAMOND ELEGANCE",
      subtitle: "Timeless Beauty Redefined",
      description: "Experience the brilliance of our diamond collection, where each piece tells a story of sophistication.",
      buttonText: "EXPLORE",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='jewelry2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fff5f5;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23fed7d7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23jewelry2)'/%3E%3Ctext x='400' y='280' font-family='Arial, sans-serif' font-size='28' fill='%23666' text-anchor='middle'%3EDiamond%3C/text%3E%3Ctext x='400' y='320' font-family='Arial, sans-serif' font-size='28' fill='%23666' text-anchor='middle'%3ECollection%3C/text%3E%3C/svg%3E"
    },
    {
      id: 3,
      title: "STACKABLE RINGS",
      subtitle: "Mix, Match & Create Your Style",
      description: "Build your unique look with our versatile stackable rings designed for the modern woman.",
      buttonText: "DISCOVER",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='jewelry3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f0fff4;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23c6f6d5;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23jewelry3)'/%3E%3Ctext x='400' y='280' font-family='Arial, sans-serif' font-size='28' fill='%23666' text-anchor='middle'%3EStackable%3C/text%3E%3Ctext x='400' y='320' font-family='Arial, sans-serif' font-size='28' fill='%23666' text-anchor='middle'%3ERings Collection%3C/text%3E%3C/svg%3E"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index : any) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div
  className="w-full bg-[#dcf4ec] text-black text-[11px] font-semibold"
>
  <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 py-1 px-2">
    {/* Text */}
    <Link href={"#"} className="text-center text-[10px]">
      FREE SHIPPING | 15 DAYS EXCHANGE | Buy now Pay Later
    </Link>
    {/* Image */}
    <img
      src="/tabby.svg"
      alt="tabby"
      className="w-[40px] h-auto"
    />
  </div>
</div>

      


      {/* Hero Slider */}
      <section className="relative  overflow-hidden">
        <div className="relative w-full h-[610px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : 
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white max-w-4xl px-6">
                    <h2 className="text-5xl md:text-7xl font-light mb-4 tracking-wide">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl mb-2 font-light tracking-wide opacity-90">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>
                    <button className="bg-white text-gray-900 px-8 py-3 text-sm font-medium tracking-widest hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>

       
      </section>
    </>
  );
}