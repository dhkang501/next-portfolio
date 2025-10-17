'use client';
import React from 'react';
import { Mail, Phone, Github } from 'lucide-react';

const ContactMeSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8 md:w-10 md:h-10" />,
      title: 'Email',
      value: 'gangdah07@gmail.com',
      link: 'mailto:gangdah07@gmail.com',
    },
    {
      icon: <Phone className="w-8 h-8 md:w-10 md:h-10" />,
      title: 'Phone',
      value: '010-7188-7110',
      link: 'tel:010-7188-7110',
    },
    {
      icon: <Github className="w-8 h-8 md:w-10 md:h-10" />,
      title: 'GitHub',
      value: 'github.com/dhkang501',
      link: 'https://github.com/dhkang501',
    },
  ];

  return (
    <section className="bg-white text-black p-4 md:p-8 lg:p-10">
      <div className="text-4xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 lg:mb-20 animate-fade-down">
        📧 Contact Me
      </div>
      <div className="flex flex-wrap gap-4 md:gap-6 justify-center px-2 md:px-0 max-w-4xl mx-auto">
        {contactInfo.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] p-4 md:p-6 border-2 border-black rounded-xl animate-fade-up transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 hover:bg-black hover:text-white"
            style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
          >
            <div className="flex flex-col items-center text-center gap-3">
              <div className="transition-transform duration-300">{contact.icon}</div>
              <h3 className="text-lg md:text-xl font-bold">{contact.title}</h3>
              <p className="text-sm md:text-base break-all">{contact.value}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="text-center mt-8 md:mt-12 text-base md:text-lg animate-fade-up px-4" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
        <p>함께 일하고 싶으시다면 언제든지 연락 주세요! </p>
        <p>프리랜서도 환영입니다!</p>
      </div>
    </section>
  );
};

export default ContactMeSection;
