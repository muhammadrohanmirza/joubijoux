// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { useState } from 'react';
// import { FiMenu, FiX, FiSearch, FiHeart, FiShoppingBag } from 'react-icons/fi';

// const navItems = [
//   { label: 'Shop Collection', sub: ['Versa', 'The Screw', 'Facets', 'Slopes', 'Kaleido', 'Limited'] },
//   { label: 'Shop Category', sub: ['Necklaces & Chokers', 'Bracelets', 'Rings', 'Earrings'] },
//   { label: 'Trending', sub: ['Best Sellers', 'New Drops', 'Our Favorites'] },
//   { label: 'Gifts', sub: ['Most Gifted', 'Soft Glow', 'Steady Flame', 'Serious Love'] },
//   { label: 'Lookbook', sub: null },
//   { label: 'Blog', sub: null },
// ];

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header className="bg-white border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">

//           {/* Logo */}
//           <Link href="/" className="flex-shrink-0">
//             <Image src="/logo.png" alt="Joubijoux Logo" width={120} height={40} />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex space-x-6">
//             {navItems.map((item) => (
//               <div key={item.label} className="group relative">
//                 <Link
//                   href="#"
//                   className="text-sm font-medium text-black uppercase hover:underline"
//                 >
//                   {item.label}
//                 </Link>
//                 {item.sub && (
//                   <div className="absolute left-0 mt-2 w-48 bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
//                     <ul className="py-2">
//                       {item.sub.map((subItem) => (
//                         <li key={subItem}>
//                           <Link
//                             href="#"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                           >
//                             {subItem}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Search and Icons */}
//           <div className="flex items-center space-x-4">
//             <button className="p-2 text-gray-600 hover:text-black">
//               <FiSearch size={20} />
//             </button>
//             <Link href="#" className="text-gray-600 hover:text-black">
//               <FiHeart size={20} />
//             </Link>
//             <Link href="#" className="text-gray-600 hover:text-black">
//               <FiShoppingBag size={20} />
//             </Link>

//             {/* Mobile Menu Toggle */}
//             <button
//               className="lg:hidden p-2 text-gray-600 hover:text-black"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Panel */}
//       {mobileOpen && (
//         <nav className="lg:hidden border-t bg-white shadow">
//           <div className="px-4 py-3 space-y-2">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full border rounded px-3 py-2 text-sm"
//               />
//               <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
//             </div>
//             {navItems.map((item) => (
//               <div key={item.label} className="pt-2">
//                 <Link href="#" className="block text-sm font-semibold text-black uppercase">
//                   {item.label}
//                 </Link>
//                 {item.sub && (
//                   <ul className="mt-1 pl-4 space-y-1">
//                     {item.sub.map((sub) => (
//                       <li key={sub}>
//                         <Link href="#" className="text-gray-600 text-sm hover:underline">
//                           {sub}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// }


'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiHeart, FiShoppingBag, FiUser, FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="w-full bg-[#dcebe3] text-center py-2 text-[12px] font-medium text-black tracking-wide z-50 relative">
        FREE SHIPPING | 15 DAYS EXCHANGE | BUY NOW PAY LATER <span className="bg-[#1ca660] text-white px-2 py-[1px] rounded-sm ml-1 text-[10px]">tabby</span>
      </div>

      {/* Transparent Header */}
      <header className="absolute top-0 left-0 w-full z-40">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">

          {/* Left: User icon */}
          <Link href="#" className="text-white hover:text-gray-200">
            <FiUser size={20} />
          </Link>

          {/* Center: Logo */}
          <Link href="/">
            <Image src="/logo-white.png" alt="Logo" width={150} height={50} className="mx-auto" />
          </Link>

          {/* Right: Search, Wishlist, Cart */}
          <div className="flex items-center space-x-4 text-white">
            <button><FiSearch size={20} /></button>
            <Link href="#"><FiHeart size={20} /></Link>
            <Link href="#"><FiShoppingBag size={20} /></Link>

            {/* Mobile menu toggle */}
            <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="lg:hidden">
              {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex justify-center space-x-8 mt-2 text-white uppercase text-sm font-medium">
          <Link href="#">Shop Collection</Link>
          <Link href="#">Shop Category</Link>
          <Link href="#">Trending</Link>
          <Link href="#">Gifts</Link>
          <Link href="#">Lookbook</Link>
          <Link href="#">Blog</Link>
        </nav>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden bg-white text-black shadow-md">
            <nav className="flex flex-col px-4 py-4 space-y-2 text-sm uppercase font-medium">
              <Link href="#">Shop Collection</Link>
              <Link href="#">Shop Category</Link>
              <Link href="#">Trending</Link>
              <Link href="#">Gifts</Link>
              <Link href="#">Lookbook</Link>
              <Link href="#">Blog</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
