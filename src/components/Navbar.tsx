import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart2, MessageSquareText, Users, Home } from 'lucide-react';
import { motion } from 'framer-motion';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-slate-900/50 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center space-x-2">
              <BarChart2 className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">SocialScope</span>
            </Link>
          </motion.div>
          
          <div className="flex space-x-8">
            <NavLink to="/" icon={<Home className="h-5 w-5 mr-1" />} active={isActive('/')}>
              Home
            </NavLink>
            
            <NavLink to="/analysis" icon={<MessageSquareText className="h-5 w-5 mr-1" />} active={isActive('/analysis')}>
              Analysis
            </NavLink>
            
            <NavLink to="/visualization" icon={<BarChart2 className="h-5 w-5 mr-1" />} active={isActive('/visualization')}>
              Visualization
            </NavLink>
            
            <NavLink to="/about" icon={<Users className="h-5 w-5 mr-1" />} active={isActive('/about')}>
              About Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  active: boolean;
  children: React.ReactNode;
}

function NavLink({ to, icon, active, children }: NavLinkProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={to}
        className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
          active 
            ? 'text-blue-400 border-b-2 border-blue-400' 
            : 'text-gray-400 hover:text-gray-200'
        }`}
      >
        {icon}
        {children}
      </Link>
    </motion.div>
  );
}

export default Navbar;