
import React from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onBookCallClick: () => void;
}

const Navigation = ({ onBookCallClick }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-anaro-charcoal/95 backdrop-blur-md border-b border-anaro-charcoal-lighter z-50">
      <div className="container-anaro">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/26559323-0f01-464c-b33d-cb23837b1598.png" 
              alt="Roman Siepelmeyer Logo" 
              className="h-8 w-auto" 
            />
          </div>
          <Button 
            onClick={onBookCallClick} 
            className="anaro-button-primary" 
            size="sm"
          >
            Book Discovery Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
