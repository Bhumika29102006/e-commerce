// components/Footer.tsx

"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP FEATURES */}

      <div className="footerFeatures">

        <div className="featureBox">
          <div className="featureIcon">📦</div>

          <div>
            <h3>Fast &amp; Secure Delivery</h3>
            <p>Tell about your service.</p>
          </div>
        </div>

        <div className="featureBox">
          <div className="featureIcon">🏅</div>

          <div>
            <h3>Money Back Guarantee</h3>
            <p>Within 10 days.</p>
          </div>
        </div>

        <div className="featureBox">
          <div className="featureIcon">↩</div>

          <div>
            <h3>24 Hour Return Policy</h3>
            <p>No question ask.</p>
          </div>
        </div>

        <div className="featureBox">
          <div className="featureIcon">💬</div>

          <div>
            <h3>Pro Quality Support</h3>
            <p>24/7 Live support.</p>
          </div>
        </div>

      </div>

      {/* MAIN FOOTER */}

      <div className="footerMain">

        <div className="footerColumn">

          <h2>Support</h2>

          <p>
            685 Market Street, <br />
            Las Vegas, LA 95820, <br />
            United States.
          </p>

          <p>✉ example@domain.com</p>

          <p>📞 (+01) 850–315–5862</p>

        </div>

        <div className="footerColumn">

          <h2>Account</h2>

          <ul>
            <li><Link href="/login" style={{ color: "inherit", textDecoration: "none" }}>My Account</Link></li>
            <li><Link href="/login" style={{ color: "inherit", textDecoration: "none" }}>Login</Link> / <Link href="/signup" style={{ color: "inherit", textDecoration: "none" }}>Register</Link></li>
            <li><Link href="/productlist" style={{ color: "inherit", textDecoration: "none" }}>Cart</Link></li>
            <li>Wishlist</li>
            <li><Link href="/productlist" style={{ color: "inherit", textDecoration: "none" }}>Shop</Link></li>
          </ul>

        </div>

        <div className="footerColumn">

          <h2>Quick Link</h2>

          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>

        </div>

        <div className="footerColumn">

          <h2>Download App</h2>

          <p>
            Save $3 With App &amp; New User only
          </p>

          <div className="appArea">

            <img
              src="/qr.png"
              alt="QR Code for eTrade App"
              className="qr"
            />

            <div className="storeButtons">

              <img src="/appstore.png" alt="Download on App Store" />

              <img src="/googleplay.png" alt="Get it on Google Play" />

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footerBottom">

        <div className="socialIcons">
          <span>f</span>
          <span>◎</span>
          <span>𝕏</span>
          <span>in</span>
          <span>🎮</span>
        </div>

        <p>
          © 2025. All rights reserved by eTrade.
        </p>

        <div className="paymentArea">

          <span>Accept For</span>

          <img src="/paypal.png" alt="PayPal" />
          <img src="/mastercard.png" alt="Mastercard" />
          <img src="/visa.png" alt="Visa" />

        </div>

      </div>

    </footer>
  );
}