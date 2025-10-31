// App.jsx
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from "../components/SearchBar";
import ImageArea from "../components/ImageArea";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import { searchImages } from "../src/services/api"; 

function App() {
  const [images, setImages] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const { isAuthenticated, isLoading, user } = useAuth0();

  const trendingTopics = ["Nature","Technology","Travel","Animals","Food","Art","Mountains","Beach","Architecture",];

  const handleSearch = (term, results) => {
    setImages(results);

    setSearchHistory((prev) => {
      const filtered = prev.filter((item) => item !== term);
      return [term, ...filtered].slice(0, 5); 
    });
  };

  const handleTrendingClick = async (term) => {
    try {
      const res = await searchImages(term);
      setImages(res.data.images); 
      handleSearch(term, res.data.images); 
    } catch (error) {
      console.error("Error fetching trending images:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-[#E1E1E1]">
        <div className="max-w-md w-full mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-zinc-900 mb-10 py-2 leading-tight">
              ImageTool
            </h1>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 transform hover:scale-[1.02] transition-all duration-300 border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-500 mb-6">
                Sign in to continue to your workspace
              </p>
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E1E1E1]">

      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto h-16 flex justify-between items-center px-6">
          <div className="flex gap-2 items-center">
            <img
              src="https://imgs.search.brave.com/dmHwf1xRfSqK_VNtJk-fYd6HieRaBtzOFhjW3R_k7Ck/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzE5LzIvY2FtZXJh/LWxlbnMtbG9nby1w/bmdfc2Vla2xvZ28t/MTkwNDMxLnBuZw"
              alt="logo"
              className="h-10 w-10 rounded-full border border-gray-300"
            />
            <h1 className="text-2xl font-bold text-zinc-900">ImageTool</h1>
          </div>

          <SearchBar
            onSearch={handleSearch}
            searchHistory={searchHistory}
            setSearchHistory={setSearchHistory}
          />

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img
                src={user?.picture}
                alt={user?.name}
                className="w-8 h-8 rounded-full border border-gray-300"
              />
              <p className="text-gray-700 text-sm font-medium">{user?.name}</p>
            </div>
            <LogoutButton />
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto mt-5 px-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Trending Searches
        </h2>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map((topic, index) => (
            <button
              key={index}
              onClick={() => handleTrendingClick(topic)}
              className="px-4 py-1.5 bg-white text-gray-700 border border-gray-300 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200"
            >
              {topic}
            </button>
          ))}
        </div>
      </section>

      <main className="max-w-6xl mx-auto mt-6">
        <ImageArea images={images} />
      </main>
    </div>
  );
}

export default App;
