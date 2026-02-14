
import React from 'react';
import { COMMITTEE, EXTENDED_COMMITTEE } from '../constants';

const Committee: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16 md:mb-24 animate-blur-fade">
        <h1 className="text-4xl md:text-6xl font-bold serif text-[#C9A24D] mb-4">Organizing Committee</h1>
        <p className="text-[#9AA4B2] italic max-w-2xl mx-auto text-sm md:text-lg">The visionaries dedicated to making Jasicon 2026 an unforgettable academic milestone.</p>
      </div>

      <div className="space-y-24 md:space-y-32">
        {/* Core Leadership */}
        <section>
          <div className="flex items-center space-x-6 mb-12 animate-fade-in-up">
            <div className="h-px bg-[#1F2937] flex-grow"></div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#9AA4B2]">Leadership Board</h2>
            <div className="h-px bg-[#1F2937] flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {COMMITTEE.map((member, idx) => (
              <div key={member.id} className="text-center group animate-fade-in-up" style={{ animationDelay: `${0.1 * idx}s` }}>
                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 md:mb-8">
                  <div className="absolute inset-0 bg-[#C9A24D] rounded-full transform rotate-12 scale-95 group-hover:rotate-45 transition-transform duration-500 opacity-20"></div>
                  <img src={member.imageUrl} className="relative w-full h-full object-cover rounded-full border-2 border-[#C9A24D]/30 p-1 bg-[#121826]" alt={member.name} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold serif text-[#E6EAF0]">{member.name}</h3>
                <p className="text-[#C9A24D] uppercase text-[9px] md:text-[10px] tracking-widest font-bold mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advisory Section */}
        {/* Extended Committee Sections */}
        {/* Extended Committee Sections - Consolidated */}
        <section className="bg-[#121826] p-8 md:p-16 rounded-[40px] border border-[#1F2937] relative overflow-hidden animate-fade-in-up">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A24D]/5 blur-[100px] rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {EXTENDED_COMMITTEE.map((section, idx) => (
              <div key={idx} className="text-center">
                <h2 className="text-lg md:text-xl font-bold serif text-[#C9A24D] uppercase tracking-wide mb-6">{section.title}</h2>
                <div className="space-y-2">
                  {section.members.map((name, i) => (
                    <p key={i} className="text-sm md:text-base font-medium text-[#E6EAF0] hover:text-[#C9A24D] transition-colors cursor-default">{name}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Message from Organising Committee */}
        <section className="bg-[#121826] p-8 md:p-16 rounded-[40px] border border-[#1F2937] relative overflow-hidden animate-fade-in-up">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#C9A24D]/5 blur-[100px] rounded-full"></div>

          <h2 className="text-2xl md:text-4xl font-bold serif text-[#C9A24D] mb-8 text-center">Message from the Organising Committee</h2>

          <div className="max-w-4xl mx-auto space-y-6 text-[#E6EAF0] leading-relaxed text-justify">
            <h3 className="text-xl md:text-2xl font-bold text-[#E6EAF0] text-center mb-6">Welcome to Deoghar</h3>

            <p> It is with immense pleasure and enthusiasm that we invite you to JASICON 2026, the National Conference of General Surgeons, to be held in the sacred city of Deoghar, Jharkhand, from 20th to 22nd November 2026.</p>

            <p>For over eight decades, JASICON has remained the academic backbone of the surgical fraternity across India, serving as a vibrant platform for learning, innovation, and professional camaraderie. Upholding the proud legacy of the Association of Surgeons of India (ASI), Deoghar is honoured to host this prestigious national conference, bringing together surgeons from across the country in a city that beautifully blends spiritual heritage, natural serenity, and emerging modernity.</p>

            <p>The scientific programme of JASICON 2026 promises a comprehensive academic experience featuring high-impact plenary sessions, expert panel discussions, live and video-based surgical sessions, hands-on skill workshops for residents and practicing surgeons, and opportunities to present original research and clinical innovations. The programme is thoughtfully designed to encourage interaction, collaboration, and excellence in contemporary surgical practice.</p>

            <p>Beyond the academic sessions, Deoghar offers a deeply enriching experience. Home to the revered Baidyanath Dham Jyotirlinga, one of the twelve sacred Jyotirlingas of Lord Shiva, the city provides an atmosphere of peace and reflection. Delegates may also explore Naulakha Mandir, Trikuta Hills, Satsang Ashram, and the surrounding natural landscapes that showcase the unique cultural essence of Jharkhand.</p>

            <p>JASICON 2026 is an invitation not only to advance surgical knowledge, but also to rejuvenate the mind and spirit, forge lasting professional bonds, and create cherished memories.</p>

            <p className="font-bold text-[#C9A24D] text-center text-lg">Come for the science, experience the spirituality, and return inspired.</p>

            <div className="pt-8 text-center">
              <p className="font-bold text-xl text-[#C9A24D] mb-2">Long Live ASI</p>
              <p className="font-medium text-[#9AA4B2]">Organising Committee</p>
              <p className="font-medium text-[#9AA4B2]">JASICON 2026</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Committee;
