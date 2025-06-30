
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-anaro-charcoal border-t border-anaro-charcoal-lighter py-12">
      <div className="container-anaro">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/26559323-0f01-464c-b33d-cb23837b1598.png" 
              alt="Roman Siepelmeyer Logo" 
              className="h-6 w-auto" 
            />
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-anaro-text-muted hover:text-anaro-lime transition-colors">LinkedIn</a>
            <a href="#" className="text-anaro-text-muted hover:text-anaro-lime transition-colors">Email</a>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-anaro-charcoal-lighter">
          <p className="text-anaro-text-muted">&copy; 2024 Roman Siepelmeyer. Transforming AI anxiety into advantage.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
