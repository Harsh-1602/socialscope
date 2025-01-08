import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BarChart2, 
  MessageCircle, 
  Share2, 
  TrendingUp, 
  Users, 
  Heart,
  Brain,
  Zap,
  Target,
  BarChart,
  Shield,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Instagram
} from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import FloatingElements from '../components/FloatingElements';

function Home() {
  const features = [
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-400" />,
      title: "Advanced Analytics",
      description: "Comprehensive data analysis and visualization tools"
    },
    {
      icon: <Brain className="h-6 w-6 text-purple-400" />,
      title: "AI-Powered Insights",
      description: "Smart recommendations using machine learning"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-400" />,
      title: "Performance Tracking",
      description: "Real-time monitoring of your social media growth"
    },
    {
      icon: <Target className="h-6 w-6 text-red-400" />,
      title: "Audience Targeting",
      description: "Precise audience segmentation and targeting"
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      title: "Quick Analysis",
      description: "Instant insights for rapid decision making"
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-400" />,
      title: "Community Engagement",
      description: "Track and boost your community interactions"
    }
  ];

  const stats = [
    {
      icon: <Heart className="h-6 w-6 text-pink-400" />,
      value: "50K+",
      label: "Engagements Analyzed"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-blue-400" />,
      value: "10K+",
      label: "Comments Processed"
    },
    {
      icon: <Share2 className="h-6 w-6 text-green-400" />,
      value: "25K+",
      label: "Shares Tracked"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-400" />,
      info: "contact@example.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-green-400" />,
      info: "+1 (555) 123-4567"
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-400" />,
      info: "123 Analytics Street, Data City"
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <ThreeBackground />
      <div className="min-h-screen bg-gradient-to-b from-slate-900/90 via-slate-800/90 to-slate-900/90">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 sm:pb-24">
          <FloatingElements position="left" />
          <FloatingElements position="right" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-12"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Elevate Your Digital
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400 mt-2">
                  Presence Today
                </span>
              </motion.h1>

              <motion.p 
                className="max-w-2xl mx-auto text-xl text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Experience the power of AI-driven analytics to enhance your social media impact and build meaningful connections.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/analysis"
                    className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    Start Analysis
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/demo"
                    className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-gray-200 border-2 border-gray-700 hover:border-gray-600 hover:text-white transition-all duration-300"
                  >
                    Explore Features
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-slate-800/50 backdrop-blur-lg rounded-lg border border-gray-700"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
                <div className="grid gap-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4"
                    >
                      <div>{item.icon}</div>
                      <span className="text-gray-300">{item.info}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/50 backdrop-blur-lg border border-gray-700 p-6 rounded-lg shadow-xl"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-700 bg-slate-900/50 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-700 bg-slate-900/50 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-700 bg-slate-900/50 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white">SocialScope</h4>
                <p className="text-gray-400">Empowering your social media presence with AI-driven insights.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link to="/analysis" className="text-gray-400 hover:text-white transition-colors duration-200">Analysis</Link></li>
                  <li><Link to="/visualization" className="text-gray-400 hover:text-white transition-colors duration-200">Visualization</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <span className="text-gray-500 cursor-not-allowed">Privacy Policy</span>
                  </li>
                  <li>
                    <span className="text-gray-500 cursor-not-allowed">Terms of Service</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link 
                    to="/" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link 
                    to="/" 
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link 
                    to="/" 
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  >
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link 
                    to="/" 
                    className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                  >
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link 
                    to="/" 
                    className="text-gray-400 hover:text-gray-100 transition-colors duration-200"
                  >
                    <Github className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2024 SocialScope. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;