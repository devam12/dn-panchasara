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
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 to-white text-gray-900 relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            {/* CA Qualification Highlight */}
            <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg">
              CA QUALIFIED PROFESSIONAL
            </div>
            
            {/* Firm Name */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900">
                <span className="text-blue-600">D N</span> PANCHASARA
              </h1>
              <div className="h-1 w-48 bg-blue-600 rounded-full mx-auto lg:mx-0"></div>
              <p className="text-xl font-semibold text-blue-600">
                CHARTERED ACCOUNTANT
              </p>
            </div>
            
            <h2 className="text-2xl lg:text-4xl font-bold leading-tight text-gray-700">
              Professional Financial Services You Can Trust
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Providing comprehensive accounting, taxation, and financial advisory services with certified expertise and personalized attention to help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button 
                onClick={handleConsultationClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 shadow-lg"
              >
                Get Free Consultation
              </Button>
              <Button 
                onClick={handleServicesClick}
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300"
              >
                View Services
              </Button>
            </div>
            
            {/* Professional Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional accountant working on financial documents" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              
              {/* CA Badge Overlay */}
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                CA QUALIFIED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
