import React from 'react';

function SearchBar() {
  return (
    <div className="flex items-center justify-center w-full p-4 bg-transparent">
      <input
        type="text"
        placeholder="Search..."
        className="w-full max-w-md p-2 border border-gray-300 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="ml-2 p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
