'use client'
import React, { useRef } from 'react';
import Header from '@/components/common/Header';
import IntroSection from '@/components/templates/IntroSection';
import AboutMeSection from '@/components/templates/AboutMeSection';
import MySkillSection from '@/components/templates/SkillSection';
import ArchivingSection from '@/components/templates/ArchivingSection';
import ProjectSection from '@/components/templates/ProjectSection';
import CareerSection from '@/components/templates/CareerSection';

const page = () => {
  const headerHeight = 64;
  const introRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const archivingRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const careerRef = useRef<HTMLDivElement | null>(null);

  const headers = [
    { title: 'About Me', scrollIndex: 1, ref: aboutMeRef },
    { title: 'Skill', scrollIndex: 2, ref: skillRef },
    { title: 'Archiving', scrollIndex: 3, ref: archivingRef },
    { title: 'Project', scrollIndex: 4, ref: projectRef },
    { title: 'Career', scrollIndex: 5, ref: careerRef },
  ];

  // 섹션으로 스크롤 이동
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const elementPosition = ref.current.offsetTop;
      const adjustedPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: adjustedPosition,
        behavior: 'smooth',
      });
    }
  };

  // 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Header
        headers={headers}
        headerHeight={headerHeight}
        scrollToTop={scrollToTop}
        scrollToSection={scrollToSection}
      />
      <div ref={introRef}><IntroSection /></div>
      <div ref={aboutMeRef}><AboutMeSection /></div>
      <div ref={skillRef}><MySkillSection /></div>
      <div ref={archivingRef}><ArchivingSection /></div>
      <div ref={projectRef}><ProjectSection /></div>
      <div ref={careerRef}><CareerSection /></div>
    </div>
  );
};

export default page;
