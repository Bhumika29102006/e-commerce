"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  const categories = [
    "Fashion",
    "Electronics",
    "Home Decor",
    "Medicine",
    "Furniture",
    "Crafts",
    "Accessories",
    "Camera",
  ];

  // Retrieve user session upon mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user session:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    alert("Logged out successfully");
    router.push("/");
    // Refresh to update components referencing auth
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div className="navbarWrapper">
      <nav className="navbar">
        {/* CATEGORY DROPDOWN */}
        <div className="categoryWrapper">
          <button
            className="categoryBtn"
            onClick={() => setOpen(!open)}
            style={{ transition: "background-color 0.2s" }}
          >
            ☰ Categories
          </button>

          {open && (
            <div className="categoryDropdown">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="categoryItem"
                  onClick={() => {
                    setOpen(false);
                    router.push(`/productlist?category=${encodeURIComponent(item)}`);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* NAV LINKS */}
        <ul className="navLinks">
          {[
            { name: "Home", path: "/" },
            { name: "Shop", path: "/productlist" },
            { name: "About", path: "/" },
            { name: "Contact", path: "/" },
          ].map((item, index) => (
            <li
              key={index}
              className={active === item.name ? "activeNav" : ""}
              onClick={() => {
                setActive(item.name);
                router.push(item.path);
              }}
              style={{ transition: "color 0.2s" }}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* ICONS & AUTH SESSION PROFILE */}
        <div className="navIcons" style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <span>♡</span>

          <Link href="/productlist" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="cartIcon" style={{ cursor: "pointer" }}>
              🛒
              <div className="cartCount">0</div>
            </div>
          </Link>

          {user ? (
            <div className="userProfile" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span 
                className="profileBadge" 
                style={{
                  background: "linear-gradient(135deg, #3577f0 0%, #2563eb 100%)",
                  color: "white",
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "15px",
                  boxShadow: "0 2px 8px rgba(37, 99, 235, 0.3)",
                  cursor: "default"
                }}
              >
                {user.name ? user.name[0].toUpperCase() : "U"}
              </span>

              <span 
                className="userName" 
                style={{ 
                  fontWeight: "600", 
                  color: "#333", 
                  fontSize: "15px",
                  maxWidth: "110px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                }}
              >
                Hi, {user.name.split(" ")[0]}
              </span>

              <button 
                onClick={handleLogout} 
                style={{
                  background: "#ff497c",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "14px",
                  marginLeft: "10px",
                  boxShadow: "0 2px 5px rgba(255, 73, 124, 0.2)",
                  transition: "all 0.2s ease"
                }}
              >
                Log out
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <span>👤</span>

              <Link href="/login">
                <button 
                  style={{
                    background: "#3577f0",
                    color: "white",
                    border: "none",
                    padding: "8px 18px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "14px",
                    boxShadow: "0 2px 8px rgba(53, 119, 240, 0.2)",
                    transition: "all 0.2s ease"
                  }}
                >
                  Log in
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}