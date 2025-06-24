import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-custom to-accent-custom">
                D N PANCHASARA
              </h1>
              <p className="text-sm text-gray-600 font-semibold tracking-wide">CHARTERED ACCOUNTANT</p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-gray-900 hover:text-primary-custom transition duration-300 font-medium">Home</a>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-gray-700 hover:text-primary-custom transition duration-300 font-medium">About</a>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-gray-700 hover:text-primary-custom transition duration-300 font-medium">Services</a>
              <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="text-gray-700 hover:text-primary-custom transition duration-300 font-medium">Testimonials</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-gray-700 hover:text-primary-custom transition duration-300 font-medium">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-primary-custom focus:outline-none">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="block px-3 py-2 text-gray-900 hover:text-primary-custom transition duration-300">Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="block px-3 py-2 text-gray-700 hover:text-primary-custom transition duration-300">About</a>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="block px-3 py-2 text-gray-700 hover:text-primary-custom transition duration-300">Services</a>
            <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="block px-3 py-2 text-gray-700 hover:text-primary-custom transition duration-300">Testimonials</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="block px-3 py-2 text-gray-700 hover:text-primary-custom transition duration-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
