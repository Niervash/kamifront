import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form className="flex-grow max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </form>
  );
};
