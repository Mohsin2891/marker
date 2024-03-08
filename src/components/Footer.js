import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <span className="text-lg">
            © 2024 MovieApp, Inc. All rights reserved.
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/terms" className="hover:underline">
            Terms of Use
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
