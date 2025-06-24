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
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
              <span className="text-white">Our</span> Services
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive financial solutions tailored to meet your business and personal needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-to-br from-white to-gray-50 shadow-2xl hover:shadow-3xl transition duration-500 border border-gray-200 group hover:-translate-y-2 transform">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full -mr-10 -mt-10"></div>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary-custom to-accent-custom mb-6 relative z-10">
                  <service.icon className="h-10 w-10 text-primary-custom" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-custom transition duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
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
