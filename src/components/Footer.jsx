import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import FamWellLogo from "../assets/FamWellLogo.png";

const Footer = () => {
  const foregroundColor = 'text-gray-900';
  const linkHover = 'hover:text-purple-600 transition duration-200';
  const socialIconStyle = 'w-5 h-5';

  const socialLinks = [
    { Icon: FaFacebook, name: 'Facebook', url: 'https://www.facebook.com' },
    { Icon: FaInstagram, name: 'Instagram', url: 'https://www.instagram.com' },
    { Icon: FaTwitter, name: 'Twitter', url: 'https://twitter.com' },
    { Icon: FaLinkedin, name: 'LinkedIn', url: 'https://www.linkedin.com' },
    { Icon: FaYoutube, name: 'YouTube', url: 'https://www.youtube.com' },
  ];

  return (
    <footer className="bg-gradient-to-r from-white via-white via-[66%] to-[#AF85D9] mt-16">
      <div className="max-w-full mx-auto px-8 py-16">
        
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-12 mb-8">
          
          {/* 1. Logo Section */}
          <div className="col-span-2 md:col-span-1">
            <img src={FamWellLogo} alt="FamWell Logo" className="w-40 h-auto object-contain" />
          </div>

          {/* 2. Address & Contact */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className={`text-xl font-bold ${foregroundColor} mb-2`}>Address:</h3>
              <p className={`text-md ${foregroundColor} opacity-80`}>
                8-163, Indra Reddy, Allwyncolony, Miyapur, Tirumalagiri, Hyderabad<br />500049
              </p>
            </div>
            <div className="space-y-1">
              <h3 className={`text-xl font-bold ${foregroundColor} mb-2`}>Contact:</h3>
              <p className={`text-md ${foregroundColor} opacity-80`}>
               
                <span className={`${foregroundColor} opacity-80`}>+91 (799) 515-1717</span><br />
                <span className={`${foregroundColor} opacity-80`}>info@famwellplus.com</span>
              </p>
            </div>
          </div>

          {/* 3. Quick Links */}
          <div className="space-y-3">
            <h3 className={`text-xl font-bold ${foregroundColor} mb-4`}>Quick Links</h3>
            <ul className="space-y-2 text-md">
              <li><a href="/" className={`${foregroundColor} opacity-80 ${linkHover}`}>Home Page</a></li>
              <li><a href="/about" className={`${foregroundColor} opacity-80 ${linkHover}`}>About Us</a></li>
              <li><a href="/services" className={`${foregroundColor} opacity-80 ${linkHover}`}>Services</a></li>
              <li><a href="/contact" className={`${foregroundColor} opacity-80 ${linkHover}`}>Contact Us</a></li>
              <li><a href="/careers" className={`${foregroundColor} opacity-80 ${linkHover}`}>Careers</a></li>
            </ul>
          </div>

          {/* 4. Stay Updated (Social Media) */}
          <div className="space-y-3">
            <h3 className={`text-xl font-bold ${foregroundColor} mb-4`}>Stay Updated</h3>
            <ul className="space-y-3 text-md">
              {socialLinks.map(({ Icon, name, url }) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 ${foregroundColor} opacity-80 ${linkHover}`}
                  >
                    <Icon className={socialIconStyle} />
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-wrap justify-between items-center text-sm gap-4">
          <p className={`${foregroundColor} opacity-80 whitespace-nowrap`}>
            © 2025 FamwellPlus. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/privacy" className={`hover:underline ${foregroundColor} opacity-80 whitespace-nowrap`}>Privacy Policy</a>
            <a href="/terms" className={`hover:underline ${foregroundColor} opacity-80 whitespace-nowrap`}>Terms of Use</a>
            <a href="/cookies" className={`hover:underline ${foregroundColor} opacity-80 whitespace-nowrap`}>Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;