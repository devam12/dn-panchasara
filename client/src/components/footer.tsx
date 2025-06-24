import { Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    "Accounting & Bookkeeping",
    "Tax Planning & Filing",
    "Financial Advisory",
    "Audit & Assurance"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const credentials = [
    "Chartered Accountant (CA)",
    "Registered Tax Practitioner",
    "Member of ICAI",
    "Licensed Financial Advisor"
  ];

  return (
    <footer className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-black text-white mb-4">
              D N PANCHASARA
            </h3>
            <div className="bg-white text-blue-600 px-3 py-1 rounded-lg font-bold text-sm inline-block mb-4">
              CA QUALIFIED
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Professional Chartered Accountant providing comprehensive financial services with integrity and expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition duration-300 bg-blue-700 p-2 rounded-lg">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition duration-300 bg-blue-700 p-2 rounded-lg">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition duration-300 bg-blue-700 p-2 rounded-lg">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-blue-100">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition duration-300 flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-blue-100">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="hover:text-white transition duration-300 flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Credentials</h4>
            <ul className="space-y-3 text-blue-100">
              {credentials.map((credential, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  {credential}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-500 mt-12 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 <span className="font-bold text-white">D N Panchasara</span>. All rights reserved. | Professional Chartered Accountant Services
          </p>
        </div>
      </div>
    </footer>
  );
}
