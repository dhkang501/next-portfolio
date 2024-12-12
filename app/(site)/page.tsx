'use client'
import React, { useRef } from 'react'
import IntroSection from '@/components/templates/IntroSection'
import AboutMeSection from '@/components/templates/AboutMeSection'
import MySkillSection from '@/components/templates/SkillSection'
import ArchivingSection from '@/components/templates/ArchivingSection'
import ProjectSection from '@/components/templates/ProjectSection'
import CareerSection from '@/components/templates/CareerSection'

const page = () => {
    const introRef = useRef<HTMLDivElement | null>(null)
    const aboutMeRef = useRef<HTMLDivElement | null>(null)
    const skillRef = useRef<HTMLDivElement | null>(null)
    const archivingRef = useRef<HTMLDivElement | null>(null)
    const projectRef = useRef<HTMLDivElement | null>(null)
    const careerRef = useRef<HTMLDivElement | null>(null)

    // 해당 템플릿으로 이동
    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        console.log(' :>> ', ref)
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const headers = [
        { title: 'About Me', scrollIndex: 1, ref: aboutMeRef  },
        { title: 'Skill', scrollIndex: 2, ref: skillRef },
        { title: 'Archiving', scrollIndex: 3, ref: archivingRef },
        { title: 'Career', scrollIndex: 4, ref: careerRef },
        { title: 'Project', scrollIndex: 5, ref: projectRef },
    ]
  return (
    <div className=''>
        {/* Header */}
        <div className='fixed top-0 left-0 right-0 bg-white z-10 shadow-md py-4'>
            <div className='flex justify-between m-3'>
                <div className="text-3xl font-bold">DH's Portfolio</div>
                <div className='text-lg font-bold flex gap-4 items-center'>
                    {headers.map((header) => {
                        return (
                            <div key={header.scrollIndex} onClick={() => scrollToSection(header.ref)}>
                                {header.title}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        {/* templates */}
        <div ref={introRef} className='pt-24 mt-24'><IntroSection /></div>
        <div ref={aboutMeRef} className='pt-24 mt-24'><AboutMeSection /></div>
        <div ref={skillRef} className='pt-24 mt-24'><MySkillSection /></div>
        <div ref={archivingRef} className='pt-24 mt-24'><ArchivingSection /></div>
        <div ref={projectRef} className='pt-24 mt-24'><ProjectSection /></div>
        <div ref={careerRef} className='pt-24 mt-24'><CareerSection /></div>
    </div>
  )
}

export default page