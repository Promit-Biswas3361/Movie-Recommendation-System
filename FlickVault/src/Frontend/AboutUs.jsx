import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white items-center flex flex-col px-6 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start px-3 py-0">
        <div className="flex flex-col items-center w-full md:w-1/3 md:sticky md:top-[30%]">
          <img
            src="/logo.png"
            alt="FlickVault Logo"
            className="w-32 h-auto md:w-64 md:h-auto"
          />
          <h1 className="text-5xl md:text-6xl font-bold m-3 lg:mx-5 bg-gradient-to-b from-white via-[#64e7fe] to-[#14cbeb] bg-clip-text text-transparent">
            FlickVault
          </h1>
        </div>
        <div className="w-full md:w-2/3 text-white text-justify mt-10 md:mt-0 md:ml-35">
          <h1 className="text-3xl font-bold text-cyan-400 mb-6">
            About FlickVault
          </h1>
          <p className="max-w-3xl text-justify text-base md:text-lg mb-4">
            Welcome to{" "}
            <span className="text-cyan-300 font-semibold">FlickVault</span>,
            your go-to destination for personalized movie recommendations! Our
            platform helps movie lovers discover the best films based on their
            unique tastes.
          </p>
          <p className="max-w-3xl text-justify text-base md:text-lg mb-4">
            Whether you're looking for trending blockbusters, hidden gems, or
            classic masterpieces, FlickVault ensures that you never run out of
            great movies to watch.
          </p>
          <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">
            Our Mission
          </h2>
          <p className="max-w-3xl text-justify text-base md:text-lg mb-4">
            Our mission is to make movie discovery effortless and enjoyable by
            offering smart, AI-driven recommendations that match your
            preferences.
          </p>
          <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">
            Why Choose FlickVault?
          </h2>
          <ul className="max-w-3xl text-left text-base md:text-lg list-disc list-inside">
            <li>Personalized AI-powered recommendations</li>
            <li>Curated watchlists for every mood and genre</li>
            <li>Easy-to-use interface with a seamless experience</li>
            <li>Regularly updated movie database</li>
          </ul>
          <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">
            Get in Touch
          </h2>
          <p className="max-w-3xl text-justify text-base md:text-lg mb-4">
            Have feedback or suggestions? We'd love to hear from you! Reach out
            to us at{" "}
            <a href="mailto:support@flickvault.com" className="text-cyan-300">
              support@flickvault.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
