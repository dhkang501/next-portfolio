'use client'
import React, { useEffect, useRef, useState } from 'react'
import IntroSection from '@/components/templates/IntroSection'
import AboutMeSection from '@/components/templates/AboutMeSection'
import MySkillSection from '@/components/templates/SkillSection'
import ArchivingSection from '@/components/templates/ArchivingSection'
import ProjectSection from '@/components/templates/ProjectSection'
import CareerSection from '@/components/templates/CareerSection'

const page = () => {
    const headerHeight = 64;
    const [isDark, setIsDark] = useState(false);
    const introRef = useRef<HTMLDivElement | null>(null)
    const aboutMeRef = useRef<HTMLDivElement | null>(null)
    const skillRef = useRef<HTMLDivElement | null>(null)
    const archivingRef = useRef<HTMLDivElement | null>(null)
    const projectRef = useRef<HTMLDivElement | null>(null)
    const careerRef = useRef<HTMLDivElement | null>(null)

    // Header 클릭시 해당 템플릿 위치로 스크롤 이동
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

    // 스크롤시 헤더 변경
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsDark(scrollPosition > headerHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [headerHeight]);

    const headers = [
        { title: 'About Me', scrollIndex: 1, ref: aboutMeRef },
        { title: 'Skill', scrollIndex: 2, ref: skillRef },
        { title: 'Archiving', scrollIndex: 3, ref: archivingRef },
        { title: 'Career', scrollIndex: 4, ref: careerRef },
        { title: 'Project', scrollIndex: 5, ref: projectRef },
    ];

    return (
        <div className=''>
            {/* Header */}
            <div
                id="navbar"
                className={`fixed top-0 left-0 right-0 z-10 py-4 shadow-md transition-colors ${
                    isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'
                }`}
            >
                <div className='flex justify-between m-3'>
                    <div className="text-3xl font-bold cursor-pointer" onClick={scrollToTop}>
                        DH's Portfolio
                    </div>
                    <div className='text-lg font-bold flex gap-4 items-center'>
                        {headers.map((header) => (
                            <div key={header.scrollIndex} onClick={() => scrollToSection(header.ref)} className="cursor-pointer">
                                {header.title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Templates */}
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
