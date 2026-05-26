// components/Hero.tsx

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="hero">

      <div className="heroText">

        <p className="watchTag">
          Smartwatch
        </p>

        <h1>
          Blossom <br />
          Smart <br />
          Watch
        </h1>

        <button
          onClick={() => router.push("/productlist")}
          style={{ transition: "color 0.2s ease" }}
        >
          Shop Now →
        </button>

      </div>

      <div className="heroImage">

        <Image
          src="/watch.png"
          alt="Blossom Smart Watch - Premium E-Commerce"
          width={420}
          height={420}
          priority
        />

      </div>

    </div>
  );
}