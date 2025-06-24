import { Card, CardContent } from "@/components/ui/card";
import { Calculator, FileText, TrendingUp, Building, Search, Handshake } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Calculator,
      title: "Accounting & Bookkeeping",
      description: "Complete accounting solutions including bookkeeping, financial statements, and regulatory compliance.",
      features: [
        "Monthly Bookkeeping",
        "Financial Statements",
        "Regulatory Compliance",
        "Account Reconciliation"
      ]
    },
    {
      icon: FileText,
      title: "Tax Planning & Filing",
      description: "Strategic tax planning and professional filing services to optimize your tax obligations.",
      features: [
        "Income Tax Returns",
        "GST Registration & Filing",
        "Tax Planning Strategy",
        "Tax Optimization"
      ]
    },
    {
      icon: TrendingUp,
      title: "Financial Advisory",
      description: "Expert financial guidance to help you make informed decisions and achieve your goals.",
      features: [
        "Investment Planning",
        "Business Valuation",
        "Financial Analysis",
        "Risk Management"
      ]
    },
    {
      icon: Building,
      title: "Company Registration",
      description: "Complete business setup services including company registration and statutory compliance.",
      features: [
        "Company Formation",
        "Licensing Support",
        "Statutory Compliance",
        "Documentation"
      ]
    },
    {
      icon: Search,
      title: "Audit & Assurance",
      description: "Professional audit services to ensure accuracy and compliance with financial standards.",
      features: [
        "Statutory Audits",
        "Internal Audits",
        "Compliance Reviews",
        "Risk Assessment"
      ]
    },
    {
      icon: Handshake,
      title: "Business Consulting",
      description: "Strategic business consulting to optimize operations and drive sustainable growth.",
      features: [
        "Business Strategy",
        "Process Optimization",
        "Performance Analysis",
        "Growth Planning"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-5xl font-black text-gray-900 mb-2">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <div className="h-1 w-full bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive financial solutions tailored to meet your business and personal needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition duration-300 border border-gray-200 group hover:-translate-y-1 transform">
              <CardContent className="p-8">
                <div className="text-blue-600 mb-6">
                  <service.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
