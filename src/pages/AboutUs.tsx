import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import ThreeBackground from '../components/ThreeBackground';
import { motion } from 'framer-motion';

function AboutUs() {
  const team = [
    {
      name: 'Harsh Gupta',
      role: 'AI Engineer',
      image: '/images/harsh.jpg',
      bio: 'Specializing in machine learning and natural language processing, Harsh leads the development of our AI-powered analysis tools.',
      social: {
        github: 'https://github.com/Harsh-1602',
        linkedin: 'https://www.linkedin.com/in/harsh-gupta-462866205/',
        email: 'guptaharsh2002@gmail.com'
      }
    },
    {
      name: 'Chanchal Kuntal',
      role: 'Full Stack Developer',
      image: '/images/chanchal.jpg',
      bio: 'With expertise in full-stack development and system architecture, Chanchal ensures our platform is robust and scalable.',
      social: {
        github: 'https://github.com/Chanchal-D',
        linkedin: 'https://www.linkedin.com/in/chanchal-kuntal-6b5506251/',
        email: 'chanchalkuntal398@gmail.com'
      }
    }
  ];

  return (
    <>
      <ThreeBackground />
      <div className="min-h-screen bg-gradient-to-b from-slate-900/90 via-slate-800/90 to-slate-900/90">
        <Navigation />
        <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              The brilliant minds behind SocialScope's innovative social media analysis platform.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {team.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
                  transition: { duration: 0.2 }
                }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden 
                         border border-gray-800 transform transition-all duration-200 
                         hover:border-blue-500/50 hover:bg-gray-900/70"
              >
                <div className="p-6">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="h-40 w-40 rounded-full mx-auto transform transition-transform duration-200"
                    src={member.image}
                    alt={member.name}
                  />
                  <motion.div 
                    className="text-center mt-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-xl font-medium text-blue-400">{member.name}</h3>
                    <p className="text-purple-400">{member.role}</p>
                  </motion.div>
                  <p className="mt-4 text-gray-300 text-center">{member.bio}</p>
                  <div className="mt-6 flex justify-center space-x-6">
                    <motion.a 
                      whileHover={{ scale: 1.2, color: "#9333EA" }}
                      href={member.social.github} 
                      className="text-blue-400 transition-all duration-200"
                    >
                      <Github className="h-6 w-6" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.2, color: "#9333EA" }}
                      href={member.social.linkedin} 
                      className="text-blue-400 transition-all duration-200"
                    >
                      <Linkedin className="h-6 w-6" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.2, color: "#9333EA" }}
                      href={`mailto:${member.social.email}`} 
                      className="text-blue-400 transition-all duration-200"
                    >
                      <Mail className="h-6 w-6" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;