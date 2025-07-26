'use client';
import { useRef } from 'react';

const ads = [
  { src: '/advertise1.webp', link: '/https://www.sayidaty.net/%D8%A3%D9%86%D8%A7%D9%82%D8%A9/%D9%85%D8%AC%D9%88%D9%87%D8%B1%D8%A7%D8%AA-%D9%88%D8%B3%D8%A7%D8%B9%D8%A7%D8%AA/1802622-%D8%A7%D9%84%D9%85%D8%B5%D9%85%D9%85%D8%A9-%D8%A7%D9%84%D9%84%D8%A8%D9%86%D8%A7%D9%86%D9%8A%D8%A9-%D8%A5%D9%84%D9%8A%D8%B2-%D8%A8%D9%8A%D8%B7%D8%A7%D8%B1-%D8%AA%D9%83%D8%B4%D9%81-%D8%A3%D8%B3%D8%B1%D8%A7%D8%B1-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D8%AC%D9%88%D9%87%D8%B1%D8%A7%D8%AA-%D8%AA%D8%AC%D9%85%D8%B9-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D8%A3%D9%86%D8%A7%D9%82%D8%A9' },
  { src: '/advertise2.avif', link: '/product/2' },
  { src: '/advertise3.avif', link: '/product/3' },
  { src: '/advertise4.webp', link: '/product/4' },
  { src: '/advertise5.webp', link: '/product/5' },
  { src: '/advertise6.avif', link: '/product/6' },
  { src: '/advertise7.avif', link: '/product/7' },
  { src: '/advertise8.webp', link: '/product/8' },
  { src: '/advertise9.avif', link: '/product/9' },
];

export default function AdvertiseSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
   <>
  <div className="text-black font-luxenta font-bold text-[30px] px-[40px] py-5 rounded-lg">
  <h1>As Featured In</h1>
</div>
    <div className="relative max-w-7xl mx-auto  flex items-center">
        
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="bg-white shadow-lg p-3 rounded-full z-10 mr-4 hover:bg-gray-100"
      >
        ◀
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth gap-10 snap-x snap-mandatory no-scrollbar"
      >
        
        {ads.map((ad, idx) => (
          <div
            key={idx}
            className="snap-start flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/6 lg:w-1/9"
          >
            <a href={ad.link} target="_blank" rel="noopener noreferrer">
              <img
                src={ad.src}
                alt={`Advertise ${idx + 1}`}
                className="w-full h-[100px] object-contain hover:scale-105 transition-transform"
              />
            </a>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="bg-white shadow-lg p-3 rounded-full z-10 ml-4 hover:bg-gray-100"
      >
        ▶
      </button>
    </div>


<div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

  {/* Image 1 */}
  <div className="relative overflow-hidden rounded-lg group">
    <img
      src="/facets.jpg"
      alt="FACETS"
      className="w-full h-[250px] object-cover transform transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="relative text-white text-xl font-semibold px-6 py-3">
        FACETS
        {/* Border Effect with Gap */}
        <span className="absolute -inset-12 border-2 border-white rounded-lg opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500"></span>
      </span>
    </div>
  </div>

  {/* Image 2 */}
  <div className="relative overflow-hidden rounded-lg group">
    <img
      src="/slopes.webp"
      alt="SLOPES"
      className="w-full h-[250px] object-cover transform transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="relative text-white text-xl font-semibold px-6 py-3">
        SLOPES
        <span className="absolute -inset-12 border-2 border-white rounded-lg opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500"></span>
      </span>
    </div>
  </div>

  {/* Image 3 */}
  <div className="relative overflow-hidden rounded-lg group">
    <img
      src="/kaleido.jpg"
      alt="KALEIDO"
      className="w-full h-[250px] object-cover transform transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="relative text-white text-xl font-semibold px-6 py-3">
        KALEIDO
        <span className="absolute -inset-12 border-2 border-white rounded-lg opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500"></span>
      </span>
    </div>
  </div>

  {/* Image 4 */}
  <div className="relative overflow-hidden rounded-lg group">
    <img
      src="/screws.jpg"
      alt="THE SCREW"
      className="w-full h-[250px] object-cover transform transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="relative text-white text-xl font-semibold px-6 py-3">
        THE SCREW
        <span className="absolute -inset-12 border-2 border-white rounded-lg opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500"></span>
      </span>
    </div>
  </div>

</div>



    </>
  );
}
