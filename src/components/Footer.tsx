import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-burger-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-burger-gold to-accent rounded-lg flex items-center justify-center">
                <span className="text-burger-dark font-bold text-lg">🍔</span>
              </div>
              <span className="text-xl font-bold text-burger-gold">BURGER HOUSE</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-burger-gold/20 rounded-full flex items-center justify-center hover:bg-burger-gold hover:text-burger-dark transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-burger-gold/20 rounded-full flex items-center justify-center hover:bg-burger-gold hover:text-burger-dark transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-burger-gold/20 rounded-full flex items-center justify-center hover:bg-burger-gold hover:text-burger-dark transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-burger-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-burger-gold transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-burger-gold transition-colors">Menu</a></li>
              <li><a href="#story" className="text-gray-300 hover:text-burger-gold transition-colors">Our Story</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-burger-gold transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-burger-gold transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-burger-gold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-burger-gold mt-0.5" />
                <span className="text-gray-300 text-sm">123 Burger Street, Food City, FC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-burger-gold" />
                <span className="text-gray-300 text-sm">+1 (234) 567-890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-burger-gold" />
                <span className="text-gray-300 text-sm">info@burgerhouse.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold text-burger-gold mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-burger-gold" />
                <span className="text-gray-300 text-sm font-medium">Monday - Friday</span>
              </div>
              <div className="text-gray-300 text-sm ml-6">11:00 AM - 10:00 PM</div>
              
              <div className="flex items-center space-x-2 mt-3">
                <Clock className="w-4 h-4 text-burger-gold" />
                <span className="text-gray-300 text-sm font-medium">Saturday - Sunday</span>
              </div>
              <div className="text-gray-300 text-sm ml-6">10:00 AM - 11:00 PM</div>
            </div>
            
            <div className="mt-4 p-3 bg-burger-gold/10 rounded-lg">
              <div className="text-burger-gold text-sm font-bold">🚚 Express Delivery</div>
              <div className="text-gray-300 text-xs">Free delivery on orders over $25</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Burger House. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-burger-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-burger-gold transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-burger-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;