import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home as HomeIcon, 
  BarChart2, 
  TrendingUp, 
  Users 
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export function Navigation() {
  const { isMenuOpen, setIsMenuOpen } = useNavigation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center group hover:opacity-80 transition-opacity duration-200"
            >
              <div className="flex space-x-1 mr-2">
                <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                <div className="w-1 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                SocialScope
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white px-3 py-2 flex items-center transition-all duration-200
                         hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] rounded-md"
            >
              <HomeIcon className="w-5 h-5 mr-1" />
              Home
            </Link>
            <Link 
              to="/analysis" 
              className="text-gray-300 hover:text-white px-3 py-2 flex items-center transition-all duration-200
                         hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] rounded-md"
            >
              <BarChart2 className="w-5 h-5 mr-1" />
              Analysis
            </Link>
            <Link 
              to="/visualization" 
              className="text-gray-300 hover:text-white px-3 py-2 flex items-center transition-all duration-200
                         hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] rounded-md"
            >
              <TrendingUp className="w-5 h-5 mr-1" />
              Visualization
            </Link>
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white px-3 py-2 flex items-center transition-all duration-200
                         hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] rounded-md"
            >
              <Users className="w-5 h-5 mr-1" />
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md flex items-center
                           transition-all duration-200 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                onClick={() => setIsMenuOpen(false)}
              >
                <HomeIcon className="w-5 h-5 mr-2" />
                Home
              </Link>
              <Link
                to="/analysis"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md flex items-center
                           transition-all duration-200 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                onClick={() => setIsMenuOpen(false)}
              >
                <BarChart2 className="w-5 h-5 mr-2" />
                Analysis
              </Link>
              <Link
                to="/visualization"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md flex items-center
                           transition-all duration-200 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                onClick={() => setIsMenuOpen(false)}
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Visualization
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md flex items-center
                           transition-all duration-200 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="w-5 h-5 mr-2" />
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 