'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:col-span-1 w-full">
      <div
        className="flex justify-between items-center lg:block cursor-pointer border-b lg:border-none py-2"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-semibold text-black uppercase text-sm">{title}</h3>
        <div
  className={`lg:hidden text-black transition-transform duration-300 ease-in-out ${
    open ? 'rotate-180' : 'rotate-0'
  }`}
>
  {open ? <FiChevronUp /> : <FiChevronDown />}
</div>
      </div>
      <ul className={`overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-in-out lg:overflow-visible lg:transition-none ${
    open
      ? 'max-h-[500px] opacity-100 translate-y-0 mt-2'
      : 'max-h-0 opacity-0 -translate-y-2'
  } lg:max-h-full lg:opacity-100 lg:translate-y-0 lg:mt-2`}>
        {children}
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-white border-t-[2px] border-black border-solid text-black text-sm">
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <FooterSection title="Support">
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">FAQ</a></li>
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Ring Sizer</a></li>
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Contact Us</a></li>
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Privacy Policy</a></li>
          </FooterSection>

          <FooterSection title="About Us">
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">About JOUBIJOUX®</a></li>
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Our Materials</a></li>
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Our Core Values</a></li>
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Our Blog</a></li>
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Affiliate Program</a></li>
          </FooterSection>

          <FooterSection title="Shop Collection">
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Versa</a></li>
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Poison Drop Capsule</a></li>
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">The Screw</a></li>
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Facets</a></li>
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Slopes</a></li>
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Kaleido</a></li>
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Limited Collection</a></li>
          </FooterSection>

          <FooterSection title="Shop Category">
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Necklaces & Chokers</a></li>
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Bracelets</a></li>
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Rings</a></li>
            <li className=' text-gray-400 hover:underline cursor-pointer text-[13px]'><a href="#">Earrings</a></li>
          </FooterSection>

          <div className="w-full">
            <h3 className="font-semibold mb-3 uppercase text-[15px]">Stay Connected</h3>
            <div className="mb-3 text-[12px] text-gray-400">
              <div className='flex gap-2 mb-1 hover:underline cursor-pointer'>
                <a href="#"><FaFacebookF /></a>
                <p>FACEBOOK</p>
              </div>
              <div  className='flex gap-2 mb-1 hover:underline cursor-pointer'>
                <a href="#"><FaInstagram /></a>
                <p>INSTAGRAM</p>
              </div>
                <div  className='flex gap-2 mb-1 hover:underline cursor-pointer'>
                    <a href="#"><FaTiktok /></a>
                    <p>TIKTOK</p>
                </div>
              <div  className='flex gap-2 mb-1 hover:underline cursor-pointer'>
                <a href="#"><FaLinkedinIn /></a>
                <p>LINKEDIN</p>
              </div>
            </div>
            <h4 className="font-semibold mb-2 uppercase text-sm">Sign Up Now & Save 10%</h4>
            <form className="flex border-b border-black py-1">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 outline-none text-sm bg-transparent placeholder:text-gray-600"
              />
              <button type="submit" className="text-sm font-semibold uppercase">Get Code</button>
            </form>
          </div>
        </div>

        {/* Logo Centered */}
        <div className="flex justify-end">
          <div className=" px-20 py-10">
            <Image src="/logo.avif" alt="Logo" width={100} height={100} className=" w-[350px] h-[100px] sm:w-[150px] sm:h-[90px]" />
          </div>
        </div>

{/* Address & Payments */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <div className=" lg:text-left leading-5">
            <p>JOUBIJOUX BOUTIQUE STUDIO, SHEIKH ZAYED ROAD
            <br className=" hidden sm:block" />
            POISON DROP STORE, DUBAI HILLS MALL, FIRST FLOOR
            <br className=" hidden sm:block" />
            DUBAI, UAE</p>
          </div>

          <div className="flex justify-between gap-4">
            <Image src="/visa.avif" alt="Visa" width={50} height={50} className='w-[40px] h-[25px]' />
            <Image src="/mastercard.avif" alt="Mastercard" width={80} height={50}  className='w-[40px] h-[25px]' />
            <Image src="/amex.avif" alt="Amex" width={80} height={50}  className='w-[40px] h-[25px]' />
             <Image src="/tabby.avif" alt="Amex" width={50} height={50}  className='w-[40px] h-[25px]' />
            <Image src="/applepay.avif" alt="Apple Pay" width={80} height={50}  className='w-[40px] h-[25px]' />
          </div>

        <div className="text-xs mb-10 text-gray-400">
          <p>2025 JOUBIJOUX® ALL RIGHTS RESERVED.</p>
          <p><a href="#" className="hover:underline mt-2 sm:mt-0">TERMS OF SERVICE</a></p>
         
        </div>

        </div>

       

      </div>
    </footer>
  );
}
