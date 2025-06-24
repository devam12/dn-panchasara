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
    <section id="home" className="pt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Firm Name Highlight */}
            <div className="inline-block">
              <h2 className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
                D N PANCHASARA
              </h2>
              <div className="h-1 w-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Financial</span> Services You Can Trust
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Providing comprehensive accounting, taxation, and financial advisory services with certified expertise and personalized attention.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                onClick={handleConsultationClick}
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition duration-300 shadow-2xl transform hover:scale-105"
              >
                Get Free Consultation
              </Button>
              <Button 
                onClick={handleServicesClick}
                variant="outline" 
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 px-10 py-4 rounded-xl font-bold text-lg transition duration-300 shadow-xl"
              >
                View Services
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional accountant working on financial documents" 
                className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition duration-300"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-yellow-500 text-slate-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
              CA Qualified ✓
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce delay-1000">
              Trusted Expert
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
