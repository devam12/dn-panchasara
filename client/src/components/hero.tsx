import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleConsultationClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleServicesClick = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-16 sm:pt-20 bg-gradient-to-br from-blue-50 to-white text-gray-900 relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-3 space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Firm Name */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 leading-tight">
                D N PANCHASARA
              </h1>
              <div className="h-1 w-48 sm:w-56 md:w-64 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mx-auto lg:mx-0"></div>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 tracking-wide">
                CHARTERED ACCOUNTANT
              </p>
            </div>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-gray-700">
              Professional Financial Services<br />You Can Trust
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Providing comprehensive accounting, taxation, and financial advisory services with certified expertise and personalized attention to help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
              <Button 
                onClick={handleConsultationClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition duration-300 shadow-lg"
              >
                Get Free Consultation
              </Button>
              <Button 
                onClick={handleServicesClick}
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition duration-300"
              >
                View Services
              </Button>
            </div>
            
            {/* Professional Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 pt-6 lg:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">5+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative order-1 lg:order-2">
            <div className="relative">
              {/* CA Badge - Top Left */}
              <div className="absolute -top-4 -left-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-xl font-black shadow-2xl transform rotate-[-5deg] animate-pulse">
                CA QUALIFIED
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center space-y-6">
                  <div className="mx-auto w-48 h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl font-black mb-2">ICAI</div>
                      <div className="text-sm font-semibold">Institute of<br/>Chartered Accountants<br/>of India</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Certified CA Professional</h3>
                    <p className="text-gray-600">Registered with ICAI</p>
                    <div className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                      ✓ ICAI Verified Member
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Badge - Bottom Right */}
              <div className="absolute -bottom-4 -right-4 z-10 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-bold shadow-xl text-sm">
                ✓ CERTIFIED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
