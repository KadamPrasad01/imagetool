import React, { useState } from "react";
import { searchImages } from "../src/services/api";

const SearchBar = ({ onSearch, searchHistory = [], setSearchHistory }) => {
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!term.trim()) return;

    try {
      setLoading(true);
      const res = await searchImages(term);
      onSearch(term, res.data.images);
      setTerm("");
      setShowDropdown(false);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectHistory = async (searchTerm) => {
    setTerm(searchTerm);
    setShowDropdown(false);
    try {
      setLoading(true);
      const res = await searchImages(searchTerm);
      onSearch(searchTerm, res.data.images);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-inner transition-all w-full"
      >
        <i className="ri-search-line text-2xl pr-2 text-gray-500"></i>

        <input
          type="text"
          placeholder="Search stunning images..."
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
          className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 outline-none text-base"
        />

        <button
          type="submit"
          disabled={loading}
          className={`ml-3 px-4 py-1.5 text-sm font-medium text-white rounded-full transition-all duration-300 ${
            loading
              ? "bg-zinc-300 cursor-not-allowed"
              : "bg-zinc-600 hover:bg-zinc-700 shadow-sm"
          }`}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {showDropdown && searchHistory.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-20">
          {searchHistory.map((item, index) => (
            <li
              key={index}
              onMouseDown={() => handleSelectHistory(item)} 
              className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <i className="ri-history-line text-gray-400 mr-2"></i>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
