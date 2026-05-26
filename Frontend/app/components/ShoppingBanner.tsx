"use client";

import { useEffect, useState } from "react";

export default function ShoppingBanner() {
  

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {

    const targetDate = new Date();

    targetDate.setDate(targetDate.getDate() + 5);

    const interval = setInterval(() => {

      const now = new Date().getTime();

      const distance =
        targetDate.getTime() - now;

      const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (distance %
          (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
          (1000 * 60)
      );

      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTime({
        days,
        hours,
        minutes,
        seconds,
      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="shoppingSection">

      {/* LEFT */}

      <div className="shoppingContent">

        <p className="shoppingTag">
          🧺 Don’t Miss!!
        </p>

        <h1>
          Let&apos;s Shopping <br />
          Today
        </h1>

        {/* TIMER */}

        <div className="timer">

          <div className="timeBox">
            <h2>{time.days}</h2>
            <span>Day</span>
          </div>

          <div className="timeBox">
            <h2>{time.hours}</h2>
            <span>Hrs</span>
          </div>

          <div className="timeBox">
            <h2>{time.minutes}</h2>
            <span>Min</span>
          </div>

          <div className="timeBox">
            <h2>{time.seconds}</h2>
            <span>Sec</span>
          </div>

        </div>

        {/* BUTTON */}

        <button
          className="shopBtn"
          onClick={() => window.location.href = "/productlist"}
        >
          Check it Out!
        </button>

      </div>

      {/* RIGHT IMAGE */}

      <div className="shoppingImage">

        <img
          src="/watch-banner.png"
          alt="watch"
        />

      </div>

    </section>
  );
}

