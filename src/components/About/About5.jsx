import React from "react";
import WhatWeDoImg from "../../assets/WhatWeDo.png";
import CollaborationImg from "../../assets/Collaboration.png";
import FamwellLogo from "../../assets/FamWellLogo.png";
import OurStoryImg from "../../assets/OurStory.png";
import OurTechnologyImg from "../../assets/OurTechnology.png";
import GreenGradient from "../../assets/GreenGradient.png";
import PurpleGradient from "../../assets/PurpleGradient.png";

const About = () => {
  return (
    <section className="font-sans overflow-x-hidden">
      <div className="relative h-[500px] flex items-center justify-center text-center px-4 py-3 md:px-20 bg-white">
        <div className="absolute top-0 left-0 z-0">
          <img
            src={PurpleGradient}
            alt="Purple gradient"
            className="w-[250px] h-[250px] transform -translate-x-1/2 -translate-y-1/2 opacity-70"
          />
        </div>

        <div className="absolute top-1/2 right-0 z-0">
          <img
            src={GreenGradient}
            alt="Green gradient"
            className="w-[250px] h-[250px] transform translate-x-1/2 -translate-y-1/2 opacity-70"
          />
        </div>

        <div className="relative z-10 max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            About
          </h1>
          <div className="p-2 rounded-full inline-block bg-white">
            <img
              src={FamwellLogo}
              alt="Famwell Logo"
              className="w-[300px] h-24 object-contain"
            />
          </div>
          <p className="mt-4 text-lg text-black font-semibold leading-relaxed">
            We are redefining healthcare assistance by blending human care with
            cutting-edge technology, making healthcare simple, accessible, and
            seamless.
          </p>
        </div>
      </div>

  {/* Our Story row — spacing tuned to match Figma */}
  <div className="relative py-12 md:py-16 lg:py-20 px-6 md:px-28 lg:px-36 bg-white flex flex-col md:flex-row items-center text-left gap-40 md:gap-50 lg:gap-50">
        <div className="absolute top-1/2 left-0 z-0">
          <img
            src={PurpleGradient}
            alt="Purple gradient"
            className="w-[250px] h-[250px] transform -translate-x-1/2 -translate-y-1/2 opacity-70"
          />
        </div>

        {/* Left illustration (remove large right margin; gap now controls spacing) */}
        <div className="relative z-10 flex-shrink-0 mb-8 md:mb-0">
          <img
            src={OurStoryImg}
            alt="An illustrated family"
            className="w-[200px] h-[200px] object-contain"
          />
        </div>

        {/* Text column with controlled line length */}
        <div className="relative z-10 max-w-xl">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-black font-semibold leading-relaxed">
            Healthcare can be overwhelming. Patients and families often struggle
            with coordinating hospital visits, managing lab tests, ensuring
            timely medicine delivery, and keeping track of appointments. At
            FamwellPlus, we take that burden away by offering end-to-end
            healthcare support services powered by technology and compassion.
          </p>
        </div>
      </div>

  {/* What We Do row — align text inset to match 'Our Story' and space from image */}
  <div className="relative py-12 md:py-16 lg:py-20 px-6 md:px-28 lg:px-36 bg-white flex flex-col-reverse md:flex-row items-center text-left gap-14 md:gap-28 lg:gap-28">
        <div className="absolute top-1/2 right-0 z-0">
          <img
            src={GreenGradient}
            alt="Green gradient"
            className="w-[250px] h-[250px] transform translate-x-1/2 -translate-y-1/2 opacity-70"
          />
        </div>

  <div className="relative z-10 max-w-xl mb-8 md:mb-0">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            What We Do
          </h2>
          <ul className="text-black font-semibold space-y-2 list-disc list-inside">
            <li>Hospital visit assistance</li>
            <li>Diagnostic and lab test coordination</li>
            <li>Medicine delivery and refill support</li>
            <li>Health reminders and alerts</li>
            <li>Insurance and claims assistance</li>
          </ul>
        </div>

        <div className="relative z-10 flex-shrink-0 mb-8 md:mb-0 md:ml-auto">
          <img
            src={WhatWeDoImg}
            alt="What We Do illustration"
            className="w-[350px] h-[350px] object-contain"
          />
        </div>
      </div>

  {/* Our Technology row — normalize padding and use gap so left image aligns with next section text */}
  <div className="relative py-12 md:py-16 lg:py-20 px-6 md:px-28 lg:px-36 bg-white flex flex-col md:flex-row items-center text-left gap-14 md:gap-28 lg:gap-28">
        <div className="absolute top-1/2 left-0 z-0">
          <img
            src={PurpleGradient}
            alt="Purple gradient"
            className="w-[250px] h-[250px] transform -translate-x-1/2 -translate-y-1/2 opacity-70"
          />
        </div>

        <div className="relative z-10 flex-shrink-0 mb-8 md:mb-0">
          <img
            src={OurTechnologyImg}
            alt="Our Technology illustration"
            className="w-[300px] h-[300px] object-contain"
          />
        </div>

        <div className="relative z-10 max-w-xl">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Technology
          </h2>
          <p className="text-black font-semibold mb-4 leading-relaxed">
            Beyond services, we design and operate digital healthcare platforms
            and mobile apps to make healthcare access seamless. Our solutions
            include:
          </p>
          <ul className="text-black font-semibold space-y-2 list-disc list-inside">
            <li>
              Electronic health records (EHR) & hospital information systems
              (HIS)
            </li>
            <li>AI & ML-powered decision support tools</li>
            <li>Bio-integrated sensors & smart medical IoT devices</li>
            <li>Health analytics for smarter care</li>
          </ul>
        </div>
      </div>

  {/* Collaboration row — align left edge with image in the row above and push right image out */}
  <div className="relative py-12 md:py-16 lg:py-20 px-6 md:px-28 lg:px-36 bg-white flex flex-col-reverse md:flex-row items-center text-left gap-14 md:gap-28 lg:gap-28">
        <div className="absolute top-1/2 right-0 z-0">
          <img
            src={GreenGradient}
            alt="Green gradient"
            className="w-[250px] h-[250px] transform translate-x-1/2 -translate-y-1/2 opacity-70"
          />
        </div>

        <div className="relative z-10 max-w-xl mb-8 md:mb-0">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Collaboration for Better Care
          </h2>
          <p className="text-black font-semibold leading-relaxed">
            We work closely with hospitals, diagnostic centres, pharmacies,
            insurers, and healthcare professionals to ensure a holistic and
            seamless healthcare ecosystem, delivered through a digital,
            physical, or hybrid model.
          </p>
        </div>

        <div className="relative z-10 flex-shrink-0 mb-8 md:mb-0 md:ml-auto">
          <img
            src={CollaborationImg}
            alt="Collaboration illustration"
            className="w-[300px] h-[300px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
