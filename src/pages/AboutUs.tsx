import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          The brilliant minds behind SocialScope's innovative social media analysis platform.
        </p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {team.map((member) => (
          <div key={member.name} className="bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-gray-800">
            <div className="p-6">
              <img
                className="h-40 w-40 rounded-full mx-auto"
                src={member.image}
                alt={member.name}
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-medium text-blue-400">{member.name}</h3>
                <p className="text-purple-400">{member.role}</p>
              </div>
              <p className="mt-4 text-gray-300 text-center">{member.bio}</p>
              <div className="mt-6 flex justify-center space-x-6">
                <a href={member.social.github} className="text-blue-400 hover:text-purple-400 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href={member.social.linkedin} className="text-blue-400 hover:text-purple-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href={`mailto:${member.social.email}`} className="text-blue-400 hover:text-purple-400 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;