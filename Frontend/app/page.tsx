// app/page.tsx

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";


import Feature from "./components/Feature";
import NewArrivals from "./components/NewArrivals";
import BestSeller from "./components/BestSeller";
import ShoppingBanner from "./components/ShoppingBanner";
import ProductItem from "./components/ProductItem";
import TestimonialSecction from "./components/TestimonialSection";
import NewArrivalSection from "./components/NewArrivalSection";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <main className="home">

      <Header />

      <Navbar />
    

      {/* FIRST SECTION */}
      <section className="heroSection">

        

        <Hero />


      </section>

      {/* SECOND SECTION */}
      <Feature />

      {/* THIRD SECTION */}
      <NewArrivals />
      <Link href="/productlist" className="productLink">
  View All Products
</Link>

      {/* FOURTH SECTION */}
      <BestSeller />

      {/* FIFTH SECTION */}
      <ShoppingBanner />

      {/* SIXTH SECTION */}
      <ProductItem 
       />

      {/* SEVENTH SECTION */}
      <TestimonialSecction />

      {/* EIGHTH SECTION */}
      <NewArrivalSection />

      {/* NINTH SECTION */}
      <NewsLetter />

      {/* TENTH SECTION */}
      <Footer/>

      


    </main>
  );
}