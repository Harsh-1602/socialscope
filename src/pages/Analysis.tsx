import React, { useState } from 'react';
import { Send, Bot, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import ThreeBackground from '../components/ThreeBackground';

function Analysis() {
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello! I can help you analyze your social media posts. What would you like to know?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const runFlow = async (message: string) => {
    try {
        const response = await fetch(`${API_URL}/api/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: input }]);
    setIsLoading(true);

    try {
      const response = await runFlow(input);
      
      if (response && response.outputs && response.outputs[0]?.outputs[0]?.results?.message?.text) {
        const messageText = response.outputs[0].outputs[0].results.message.text;
        setMessages(prev => [...prev, {
          type: 'bot',
          content: messageText
        }]);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Error getting response:', error);
      setMessages(prev => [...prev, {
        type: 'bot',
        content: 'Sorry, I encountered an error processing your request.'
      }]);
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  return (
    <>
      <ThreeBackground />
      <div className="min-h-screen bg-gradient-to-b from-slate-900/90 via-slate-800/90 to-slate-900/90">
        <Navigation />
        <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/50 backdrop-blur-lg border border-gray-700 rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Chat Analysis</h2>
            
            <div className="h-[500px] overflow-y-auto mb-4 p-4 bg-slate-900/50 rounded-lg">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  } mb-4`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-700 text-gray-100'
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.type === 'bot' && (
                      <Bot className="h-6 w-6 text-blue-400" />
                    )}
                  </motion.div>
                </div>
              ))}
              
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start space-x-2 mb-4"
                >
                  <Bot className="h-6 w-6 text-blue-400" />
                  <div className="p-3 rounded-lg bg-slate-700">
                    <motion.div 
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 1 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      <Loader2 className="h-5 w-5 animate-spin text-blue-400" />
                      <span className="text-gray-100">Analyzing...</span>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your social media analysis..."
                className="flex-1 p-2 bg-slate-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading}
                className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send className="h-5 w-5" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </>
 );
}

export default Analysis;