import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Youtube, Music } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing with ${email}!`);
      setEmail('');
    }
  };

  const socialLinks = [
    { icon: <Instagram size={20} />, label: 'INSTAGRAM', url: 'https://www.instagram.com/__prince.thakur__/' },
    { icon: <Facebook size={20} />, label: 'FACEBOOK', url: 'https://www.instagram.com/__prince.thakur__/' },
    { icon: <Twitter size={20} />, label: 'X', url: 'https://www.instagram.com/__prince.thakur__/' },
    { icon: <Youtube size={20} />, label: 'YOUTUBE', url: 'https://www.instagram.com/__prince.thakur__/' },
    { icon: <Music size={20} />, label: 'SPOTIFY', url: 'https://www.instagram.com/__prince.thakur__/' },
  ];

  return (
    <footer className="bg-white border-t mt-16 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium mb-4">JOIN OUR NEWSLETTER</h3>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <div className="text-center text-gray-500 text-sm border-t pt-8">
          <p className="mb-2">NAME AND ADDRESS OF THE MANUFACTURER</p>
          <p className="font-medium">PRINCE THAKUR, CHANDIGARH</p>
          <p className="mt-4">© 2024 rEnshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;