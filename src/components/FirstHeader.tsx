import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";


const FirstHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); 
  const buttonRef = useRef<HTMLDivElement>(null); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center p-4 relative">

      <div className="sm:hidden" ref={buttonRef}>
        <button onClick={toggleMenu} className="text-3xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className="hidden sm:flex items-center space-x-4">
        <div className="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full cursor-pointer">
          <FaUser className="text-lg" />
        </div>
        <div className="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full cursor-pointer">
          <FaSearch className="text-lg" />
        </div>
      </div>

      <h1 className="text-4xl font-extralight font-mono">MovieHive</h1>

      <div className="hidden sm:block">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Button
        </button>
      </div>

      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-24 left-0 w-full bg-white p-4 sm:hidden shadow-lg flex flex-col items-center space-y-4 z-50`}
      >
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full cursor-pointer">
            <FaUser className="text-lg" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full cursor-pointer">
            <FaSearch className="text-lg" />
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
          Button
        </button>
      </div>
    </div>
  );
};

export default FirstHeader;
