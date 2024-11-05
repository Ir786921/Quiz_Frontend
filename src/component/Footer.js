import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png"; // Adjust the path to your logo

const Footer = () => {
  return (
    <footer className="tw-bg-gray-900 tw-text-white tw-pt-10 tw-pb-5 tw-px-6">
      <div className="tw-container tw-mx-auto tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-2 tw-gap-8">
        {/* Branding Section */}
        <div className="tw-flex tw-flex-col tw-items-start">
          <Link to="/" className="tw-flex tw-items-center tw-space-x-3">
            <img src={logo} alt="Testify Logo" className="tw-h-12 tw-w-12" />
            <h3 className="tw-text-2xl tw-font-semibold">Testify</h3>
          </Link>
          <p className="tw-mt-4 tw-text-gray-400 tw-max-w-xs">
            Transforming talent acquisition through tech-powered testing solutions.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="tw-text-lg tw-font-semibold tw-mb-4">Quick Links</h4>
          <ul className="tw-space-y-2">
            <li>
              <Link to="/about" className="tw-text-gray-400 hover:tw-text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="tw-text-gray-400 hover:tw-text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/test-library" className="tw-text-gray-400 hover:tw-text-white">
                Test Library
              </Link>
            </li>
            <li>
              <Link to="/contact" className="tw-text-gray-400 hover:tw-text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h4 className="tw-text-lg tw-font-semibold tw-mb-4">Contact Us</h4>
          <p className="tw-text-gray-400">
            <i className="fa-solid fa-phone tw-mr-2"></i> +1 (123) 456-7890
          </p>
          <p className="tw-text-gray-400">
            <i className="fa-solid fa-envelope tw-mr-2"></i> support@testify.com
          </p>
          <p className="tw-text-gray-400">
            <i className="fa-solid fa-map-marker-alt tw-mr-2"></i> 123 Testify St,
            Innovation City, TX
          </p>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="tw-text-lg tw-font-semibold tw-mb-4">Follow Us</h4>
          <div className="tw-flex tw-space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-text-gray-400 hover:tw-text-blue-500"
            >
              <i className="fab fa-facebook-f tw-text-2xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-text-gray-400 hover:tw-text-blue-400"
            >
              <i className="fab fa-twitter tw-text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-text-gray-400 hover:tw-text-blue-700"
            >
              <i className="fab fa-linkedin tw-text-2xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-text-gray-400 hover:tw-text-pink-500"
            >
              <i className="fab fa-instagram tw-text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="tw-border-t tw-border-gray-700 tw-mt-8 tw-pt-4 tw-text-center">
        <p className="tw-text-gray-500">&copy; {new Date().getFullYear()} Testify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
