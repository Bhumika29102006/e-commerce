// app/productlist/page.tsx

"use client";
import Navbar from "../components/Navbar";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { products as fallbackProducts } from "./product";

function ProductListContent() {
  const [productList, setProductList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const search = searchParams ? searchParams.get("search") || "" : "";
  const category = searchParams ? searchParams.get("category") || "" : "";

  // ===== FETCH PRODUCTS FROM BACKEND DYNAMICALLY =====
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let url = "http://localhost:5000/api/products";
        const queryParams = [];

        if (search) {
          queryParams.push(`search=${encodeURIComponent(search)}`);
        }
        if (category) {
          queryParams.push(`category=${encodeURIComponent(category)}`);
        }

        if (queryParams.length > 0) {
          url += `?${queryParams.join("&")}`;
        }

        const response = await axios.get(url);
        setProductList(response.data);
      } catch (error) {
        console.warn("Backend products API not accessible, falling back to static list:", error);
        
        // Smart client-side fallback filtering
        let filtered = fallbackProducts;
        if (search) {
          filtered = filtered.filter((p) =>
            p.title.toLowerCase().includes(search.toLowerCase())
          );
        }
        if (category) {
          // If category filter is applied, map it or mock it gracefully
          console.log(`Mocking category filter for: ${category}`);
        }
        setProductList(filtered);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [search, category]);

  // ===== CART STATE =====
  const [cartItems, setCartItems] = useState<any[]>([]);

  // ===== ADD TO CART =====
  const addToCart = (product: any) => {
    setCartItems((prev) => [...prev, product]);
  };

  // ===== REMOVE FROM CART =====
  const removeFromCart = (indexToRemove: number) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
  };

  return (
    <div className="home">
      <Navbar/>
      
    <div className="productContainer">
      <h1 className="heading">
        {category ? `${category} Products` : search ? `Search Results for "${search}"` : "All Products"}
      </h1>

      {/* ===== PRODUCT TABLE ===== */}
      <table className="productTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", padding: "30px", fontWeight: "600", color: "#666" }}>
                Loading premium products from backend...
              </td>
            </tr>
          ) : productList.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", padding: "30px", fontWeight: "600", color: "#ff497c" }}>
                No products found matching your criteria.
              </td>
            </tr>
          ) : (
            productList.map((item) => {
              const itemKey = item._id || item.id;
              const displayId = item._id ? `${item._id.substring(18)}` : item.id;
              return (
                <tr key={itemKey}>
                  <td>{displayId}</td>
                  <td>
                    <img
                      src={item.image}
                      className="productImage"
                      alt={item.title}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="addBtn"
                      onClick={() => addToCart(item)}
                    >
                      Add To Cart
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {/* ===== CART TABLE ===== */}
      <h1 className="cartHeading">Cart Items</h1>

      {cartItems.length === 0 ? (
        <p className="emptyCart">No Items Added</p>
      ) : (
        <table className="cartTable">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item: any, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    className="cartImage"
                    alt=""
                  />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    className="removeBtn"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
}

export default function ProductListPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", padding: "50px" }}>Loading page content...</div>}>
      <ProductListContent />
    </Suspense>
  );
}

export default function ProductListPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", padding: "50px" }}>Loading page content...</div>}>
      <ProductListContent />
    </Suspense>
  );
}
