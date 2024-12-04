import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md mx-auto sm:hidden z-10">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-3 pl-10 pr-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default SearchBar;
