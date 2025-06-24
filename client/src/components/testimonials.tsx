import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Anshul Shah",
      position: "Ducon Consultants Pvt Ltd",
      initials: "AS",
      content: "Excellent service and professional expertise. D N Panchasra & Co. helped streamline our accounting processes and provided valuable tax planning advice."
    },
    {
      name: "Durgesh Agarwal",
      position: "Durgesh Infrastructure Pvt Ltd",
      initials: "DA",
      content: "Professional, reliable, and always available for consultation. Their financial advisory services have been invaluable for our business growth."
    },
    {
      name: "Dhruvin Gajjar",
      position: "J K Product",
      initials: "DG",
      content: "Highly knowledgeable and trustworthy. They handled our GST compliance and ongoing requirements with complete professionalism."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-5xl font-black text-gray-900 mb-2">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <div className="h-1 w-full bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by businesses and individuals for professional financial services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 shadow-lg border border-gray-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-accent-custom">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
