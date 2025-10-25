import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUsMen from "../assets/ContactUsMen.png";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="pt-20 pb-20 px-6 md:px-16 lg:px-28">
        <div className="max-w-7xl mx-auto flex flex-col space-y-20">
          {/* --- TOP ROW: Image + Welcome Text --- */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div>
              <img
                src={ContactUsMen}
                alt="Customer Support"
                className="w-full max-w-md mx-auto lg:mx-0"
              />
            </div>

            {/* Title & Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                We'd love to hear from you.
              </h2>
              <p className="text-lg text-gray-600">
                Whether you have a question about our services, a partnership
                proposal, or just want to say hello, our team is ready to answer
                all your questions. Fill out the form, and we'll be in touch
                shortly.
              </p>
            </div>
          </div>

          {/* --- BOTTOM ROW: Contact Info + Form --- */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Us Info */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                Contact us
              </h2>
              <p className="text-lg text-gray-600 font-bold">
                Let’s connect and grow more...
              </p>

              <div className="space-y-4 text-gray-700">
                {/* Email */}
                <div className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 text-purple-600" />
                  <a
                    href="mailto:info@famwellplus.com"
                    className="hover:text-purple-600"
                  >
                    info@famwellplus.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <FiPhone className="w-5 h-5 text-purple-600" />
                  <a
                    href="tel:+917995151717"
                    className="hover:text-purple-600"
                  >
                    +91 (799) 515-1717
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3">
                  <FiMapPin className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span>
                    8-163, Indra Reddy, Allwyn Colony, Miyapur, Tirumalagiri,
                    Hyderabad
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-none bg-gray-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-none bg-gray-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 border-none bg-gray-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#AF85D9] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#AF85D9] transition duration-300 ease-in-out"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
