import React from "react";

export const SearchInput = ({ query, setQuery, searchJasa }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchJasa(); 
    }
  };

  return (
    <div className="flex-grow max-w-lg mx-auto">
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan kata kunci pencarian"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress} // Add the key press handler here
            required
          />
        </div>
      </div>
    </div>
  );
};
