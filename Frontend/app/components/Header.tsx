"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search.trim()) {
      router.push(`/productlist?search=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <>
      {/* Top Black Bar */}
      <div className="topBar">
        <div 
          className="logo" 
          style={{ cursor: "pointer", transition: "opacity 0.2s" }} 
          onClick={() => router.push("/")}
        >
          eTrade
        </div>

        <button 
          className="buyBtn" 
          onClick={() => router.push("/productlist")}
          style={{ transition: "all 0.2s ease" }}
        >
          Shop Now
        </button>
      </div>

      {/* Search Area */}
      <div className="searchSection">
        <div 
          className="brand" 
          style={{ cursor: "pointer", transition: "opacity 0.2s" }} 
          onClick={() => router.push("/")}
        >
          eTrade
        </div>

        <div className="searchBox">
          <input
            type="text"
            placeholder="What are you looking for... (Press Enter to Search)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        <div className="selectors">
          <select style={{ cursor: "pointer", outline: "none" }}>
            <option>USD</option>
          </select>

          <select style={{ cursor: "pointer", outline: "none" }}>
            <option>EN</option>
          </select>
        </div>
      </div>
    </>
  );
}