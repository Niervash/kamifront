import React from "react";

export const SearchInput = ({ query, setQuery, searchJasa }) => {
  return (
    <div className="flex-grow max-w-lg mx-auto">
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </div>
        {/* <button
          onClick={searchJasa}
          className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
        >
          Cari
        </button> */}
      </div>
    </div>
  );
};
