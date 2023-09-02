import { useEffect, useState } from 'react'
import AccountIcon from '../assets/icons/AccountIcon'


const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const handleResize = () => {
    setMenuOpen(false)
  };

  useEffect(() => {
    // Attach the resize event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect only runs on mount and unmount

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full">
      <ul className="w-full p-10 flex flex-row justify-between items-center">
        {/* Logo */}
        <li><a href="#!" className="text-white font-playfair text-3xl drop-shadow-3xl hover:text-white cursor-pointer font-medium">MNTN</a></li>
        {/* Hamburger Button */}
        <li className="md:hidden">
          <button
            className=" text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </li>
        <DesktopLinks />
        {menuOpen && <MobileLinks />}
      </ul>
    </nav >
  )
}

const MobileLinks = () => {
  return (
    <div className="absolute md:hidden py-3 left-0 right-0 top-24 bg-[rgba(255,255,255,0.3)]">
      {/* Navigation Links */}
      <li>
        <ul className="flex flex-col gap-3 items-center w-full">
          <li><a href="#!" className="text-[#333] drop-shadow-2xl">Equipment</a></li>
          <li><a href="#!" className="text-[#333] drop-shadow-2xl">About us</a></li>
          <li><a href="#!" className="text-[#333] drop-shadow-2xl">Blog</a></li>
        </ul>
      </li>
      {/* Account */}
      <li className="flex flex-row justify-center items-center gap-4 mt-3">
        <AccountIcon color={'#333'} />
        <a href="#!" className="text-[#333] drop-shadow-md focus:underline">Account</a>
      </li>
    </div>
  )
}

const DesktopLinks = () => {
  return (
    <>
      {/* Navigation Links */}
      <li className="md:flex hidden flex-grow max-w-md">
        <ul className="flex flex-row justify-around w-full">
          <li><a href="#!" className="text-white">Equipment</a></li>
          <li><a href="#!" className="text-white">About us</a></li>
          <li><a href="#!" className="text-white">Blog</a></li>
        </ul>
      </li>
      {/* Account */}
      <li className="md:flex hidden flex-row justify-center items-center gap-4">
        <AccountIcon color={'#fff'} />
        <a href="#!" className="text-white drop-shadow-md focus:underline">Account</a>
      </li>
    </>

  )
}


export default NavigationBar
