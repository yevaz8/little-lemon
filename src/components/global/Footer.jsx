import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer-section">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src="/assets/Asset 20@4x.png"
            width=""
            height=""
            alt="footer logo"
          />
        </div>
        <div className="footer-links-container">
          <div className="footer-links-section">
            <div>
              <p className="subtitle">DoorMat Nav</p>
            </div>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/reservations">Book a table</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-links-section">
            <div>
              <p className="subtitle">Contacts</p>
            </div>
            <div>
              <ul>
                <li>Chicago 1223</li>
                <li>+ 12345678900</li>
                <li>littelemon@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="footer-links-section">
            <div>
              <p className="subtitle">Social Media Links</p>
            </div>
            <div>
              <ul>
                <li>
                  <a>Twitter</a>
                </li>
                <li>
                  <a>Instagram</a>
                </li>
                <li>
                  <a>Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
