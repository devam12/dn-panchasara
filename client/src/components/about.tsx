import { Button } from "@/components/ui/button";
import { CheckCircle, Download } from "lucide-react";
import { generateCompanyProfile } from "../utils/generateCompanyProfile";

export default function About() {
  const qualifications = [
    "Chartered Accountant (CA) Qualified",
    "Registered Tax Practitioner",
    "Financial Advisory Certification",
    "Years of Industry Experience"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-5xl font-black text-gray-900 mb-2">
              About <span className="text-blue-600">D N PANCHASRA & CO.</span>
            </h2>
            <div className="h-1 w-full bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bringing years of expertise and dedication to provide exceptional financial services
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Professional businessman in modern office environment" 
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-2">
                <span className="text-blue-600">D N</span> PANCHASRA & CO.
              </h3>
              <p className="text-lg font-semibold text-blue-600">Chartered Accountant & Financial Advisor</p>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With a completed CA qualification and extensive experience in accounting, taxation, and financial advisory services, 
              I am committed to helping businesses and individuals achieve their financial goals through professional expertise and personalized service.
            </p>
            
            <div className="space-y-4 mb-8">
              {qualifications.map((qualification, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-3 h-5 w-5" />
                  <span className="text-gray-700">{qualification}</span>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={generateCompanyProfile}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition duration-300 flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download Company Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
