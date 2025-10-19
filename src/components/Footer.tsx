import { Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook } from "lucide-react";
import edenbookLogo from "@/assets/edenbrook-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Global Reach", href: "/global-reach" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    "Local & Overseas Recruitment",
    "Executive Headhunting", 
    "Training & Capacity Building",
    "HR Consultancy",
    "Expatriate Services",
    "Payroll & Outsourcing"
  ];


  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              <img src={edenbookLogo} alt="Edenbrook Recruitment" className="h-10 sm:h-12 w-auto" />
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Leading recruitment agency connecting businesses with exceptional talent across 20+ countries. 
              Your partner in sustainable people management solutions.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-brand-orange-light transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-brand-orange-light transition-colors cursor-pointer">
                <Twitter className="h-5 w-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-brand-orange-light transition-colors cursor-pointer">
                <Facebook className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-brand-orange transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-xs sm:text-sm leading-relaxed block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Information</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-orange flex-shrink-0 mt-1" />
                <div className="text-gray-300 text-sm">
                  <p>2nd Floor, Room 225, Delta House</p>
                  <p>University Way, Nairobi CBD</p>
                  <p>P.O. Box 2097 - 00621 Village Market</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>0720 517 303</p>
                  <p>0721 658 788</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@edenbrook.co.ke</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span className="text-gray-300 text-sm">www.edenbrook.co.ke</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-navy-light mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-gray-300 text-xs sm:text-sm text-center md:text-left">
              © 2024 Edenbrook Recruitment Agency Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;