import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  Award, 
  Clock, 
  Star,
  Wrench,
  Flame,
  Settings,
  CheckCircle,
  Menu,
  X,
  Facebook,
  Twitter
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Header Component
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">Facey Plumbing</h1>
              <p className="text-sm text-slate-600">& Heating Specialists</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-300 relative group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* Call Button */}
          <motion.a
            href="tel:07940765792"
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 py-4 border-t border-slate-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col space-y-4">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-700 hover:text-orange-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="tel:07940765792"
                className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full font-semibold w-fit"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                <Award className="w-4 h-4" />
                <span>24+ Years Experience</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Professional
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 block">
                  Plumbing & Heating
                </span>
                Services
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Installing a new central heating system with high efficiency condensing boiler system controls will save you money on your annual heating bills.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:07940765792"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>07940765792</span>
              </a>
              <a
                href="#services"
                className="flex items-center justify-center space-x-2 border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-orange-500 hover:text-orange-600 transition-all duration-300"
              >
                <span>View Services</span>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-sm text-slate-600 font-medium">Fully Insured</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-sm text-slate-600 font-medium">Emergency Service</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-sm text-slate-600 font-medium">5-Star Rated</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/8986048/pexels-photo-8986048.jpeg"
                alt="Professional plumber in uniform"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl opacity-20 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-20 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
export const ServicesSection = () => {
  const services = [
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Boiler Installations",
      description: "Installing a new central heating system with high efficiency condensing boiler system controls will save you money on your annual heating bills.",
      image: "https://images.unsplash.com/photo-1610312973684-e47446aa260b",
      features: ["High Efficiency", "Money Saving", "Professional Installation"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Power Flushing",
      description: "Professional power flushing services to improve your heating system efficiency and extend the life of your boiler.",
      image: "https://images.unsplash.com/photo-1706206140285-fd36d93aaa83",
      features: ["System Cleaning", "Efficiency Boost", "Extends Boiler Life"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Boiler Servicing",
      description: "Regular boiler servicing to ensure your heating system runs safely and efficiently all year round.",
      image: "https://images.unsplash.com/photo-1555020367-cfc90503032f",
      features: ["Safety Check", "Efficiency Test", "Annual Service"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Boiler Repairs",
      description: "Quick and reliable boiler repair services to get your heating system back up and running.",
      image: "https://images.unsplash.com/photo-1615625745497-0edd438803ef",
      features: ["24/7 Emergency", "Quick Response", "Reliable Service"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Radiator Installations",
      description: "Professional radiator installation and replacement services for optimal heating performance.",
      image: "https://images.unsplash.com/photo-1558211583-ecfebb03748b",
      features: ["New Installations", "Replacements", "Optimal Performance"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Preferred Installer",
      description: "Worcester, Vaillant and Ideal Preferred Installer with extended warranties and professional service.",
      image: "https://images.unsplash.com/photo-1555020367-cfc90503032f",
      features: ["Extended Warranties", "Certified Installation", "Brand Approved"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We offer excellent value for money, with a promise that the price we quote, 
            is the price you pay, no hidden charges.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-xl shadow-lg">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// About Section Component
export const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                <Award className="w-4 h-4" />
                <span>Trusted Professionals</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
                Why Choose 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 block">
                  Facey Plumbing?
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Boilers are rated according to their efficiency in converting gas to heat. The latest Energy Efficiency 'A' boilers being rated at 90% efficiency, with A-rated boilers being around 90% or less. It may be worth replacing it with a modern condensing boiler which offer efficiencies of up to 97%. This could dramatically reduce your gas bill and carbon footprint.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <h3 className="text-3xl font-bold text-orange-600 mb-2">24+</h3>
                  <p className="text-slate-600 font-medium">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <h3 className="text-3xl font-bold text-orange-600 mb-2">100%</h3>
                  <p className="text-slate-600 font-medium">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Quality Guarantee</h3>
              </div>
              <p className="text-slate-600">All our work comes with comprehensive warranties and quality guarantees.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Emergency Service</h3>
              </div>
              <p className="text-slate-600">Available for emergency plumbing and heating issues, providing rapid response.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Certified Installers</h3>
              </div>
              <p className="text-slate-600">Worcester, Vaillant and Ideal Preferred Installer with extended warranties.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Get In Touch Today
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to get started? Contact us for a free quote and professional consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                />
              </div>
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 shadow-lg">
              <Phone className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us Now</h3>
              <p className="mb-4">Available for emergency services</p>
              <a href="tel:07940765792" className="text-2xl font-bold">07940765792</a>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg">
              <Mail className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Email Us</h3>
              <p className="text-slate-600 mb-4">Get a quote via email</p>
              <a href="mailto:info@faceyplumbing.net" className="text-orange-600 font-semibold">info@faceyplumbing.net</a>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg">
              <MapPin className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Service Area</h3>
              <p className="text-slate-600">Greenfield, MA and surrounding areas</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg">
              <Clock className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Business Hours</h3>
              <div className="space-y-1 text-slate-600">
                <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
                <p className="text-orange-600 font-semibold">Emergency service available 24/7</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Facey Plumbing</h3>
                <p className="text-slate-400">& Heating Specialists</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Professional plumbing and heating services with over 24 years of experience. 
              We provide excellent value for money with no hidden charges.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Boiler Installation</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Power Flushing</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Boiler Servicing</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Boiler Repairs</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Radiator Installation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:07940765792" className="hover:text-orange-400 transition-colors">07940765792</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@faceyplumbing.net" className="hover:text-orange-400 transition-colors">info@faceyplumbing.net</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Greenfield, MA<br />and surrounding areas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Facey Plumbing & Heating Specialists. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};