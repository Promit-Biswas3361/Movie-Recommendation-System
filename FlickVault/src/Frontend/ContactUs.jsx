import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-[#03333d] bg-fixed w-full h-auto">
      <Navbar />

      <div className=" flex-grow container mx-auto px-6 py-12 mt-25 mb-[-50px]">
        <div className="flex flex-col md:flex-row gap-8 px-2 lg:px-5">
          <div className="w-full md:w-1/2 mb-10">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-300 mb-6">
              Have questions or feedback? Reach out to us anytime!
            </p>

            <div className="flex items-center space-x-4 mb-4">
              <Mail className="text-cyan-400" />
              <a
                href="mailto:support@flickvault.com"
                className="text-gray-300 hover:text-cyan-400"
              >
                support@flickvault.com
              </a>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <Phone className="text-cyan-400" />
              <p className="text-gray-300">+1 (123) 456-7890</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-cyan-400" />
              <p className="text-gray-300">MIT, Manipal - 576104</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-slate-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">
              Send us a Message
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-300">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Your Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Your Message</label>
                <textarea
                  required
                  className="w-full p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  rows="4"
                ></textarea>
              </div>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
