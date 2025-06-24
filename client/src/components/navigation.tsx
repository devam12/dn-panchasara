import { useState, useEffect } from "react";
import { Menu, X, Copy, ExternalLink, Phone, Mail, MapPin } from "lucide-react";
import { contactData, copyToClipboard, openPhone, openEmail, openMap } from "../utils/contactActions";
import { useToast } from "@/hooks/use-toast";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { toast } = useToast();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleCopy = async (text: string, type: string) => {
    const result = await copyToClipboard(text, type);
    toast({
      title: result.success ? "Copied!" : "Error",
      description: result.message,
      variant: result.success ? "default" : "destructive",
    });
  };

  return (
    <nav className={`bg-white shadow-xl fixed w-full top-0 z-50 border-b-4 border-blue-600 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  D N PANCHASRA & CO.
                </h1>
                <p className="text-blue-600 font-bold text-xs sm:text-sm tracking-wide">CHARTERED ACCOUNTANT</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <div className="flex items-center space-x-8">
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-blue-600 hover:text-blue-800 transition duration-300 font-semibold border-b-2 border-blue-600">Home</a>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">About</a>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">Services</a>
                <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">Testimonials</a>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">Contact</a>
              </div>
              
              {/* Quick Contact Actions */}
              <div className="flex items-center space-x-2 border-l border-gray-300 pl-6">
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => openPhone(contactData.phone)}
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition duration-300"
                    title="Call us"
                  >
                    <Phone className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleCopy(contactData.phone, "Phone number")}
                    className="p-1 text-gray-400 hover:text-blue-600 transition duration-300"
                    title="Copy phone number"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
                
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => openEmail(contactData.email)}
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition duration-300"
                    title="Send email"
                  >
                    <Mail className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleCopy(contactData.email, "Email")}
                    className="p-1 text-gray-400 hover:text-blue-600 transition duration-300"
                    title="Copy email"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
                
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => openMap(contactData.address)}
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition duration-300"
                    title="Open location"
                  >
                    <MapPin className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleCopy(contactData.address, "Address")}
                    className="p-1 text-gray-400 hover:text-blue-600 transition duration-300"
                    title="Copy address"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="block px-3 py-2 text-blue-600 hover:text-blue-800 transition duration-300 font-semibold border-l-4 border-blue-600">Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition duration-300">About</a>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition duration-300">Services</a>
            <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition duration-300">Testimonials</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
