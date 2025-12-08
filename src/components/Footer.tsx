
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-anaro-charcoal border-t border-anaro-charcoal-lighter py-12">
      <div className="container-anaro">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/roman-siepelmeyer/"
              target="_blank"
              rel="noreferrer"
              className="text-anaro-text-muted hover:text-anaro-lime transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:roman@anarolabs.com"
              className="text-anaro-text-muted hover:text-anaro-lime transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-anaro-charcoal-lighter">
          <p className="text-anaro-text-muted">&copy; 2025 Roman Siepelmeyer. Transforming AI anxiety into advantage.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
