import Image from 'next/image';
import React from 'react';
import BgBorder from '@/components/common/BgBorder'

const SkillSection = () => {
  const skills = ['FrontEnd', 'BackEnd', 'Mobile APP'];
  const frontEndSkills = [
    { name: 'html5', width: 100, height: 100, padding: 0 },
    { name: 'css', width: 100, height: 100, padding: 0 },
    { name: 'js', width: 100, height: 100 },
    { name: 'vue', width: 100, height: 100, bg: 'white', padding: 5, border: 5 },
    { name: 'ts', width: 100, height: 100 },
    { name: 'sass', width: 100, height: 100, bg: 'white', border: 5 },
    // { name: 'zustand', width: 100, height: 100 },
    { name: 'react', width: 350, height: 100, bg: 'white', border: 5 },
    { name: 'next', width: 350, height: 100, bg: 'white', border: 5 },
    { name: 'tailwind', width: 350, height: 100, bg: 'white', border: 5 },
  ];
  const backEndSkills = [
    { name: 'node', width: 100, height: 100, padding: 12, bg: 'white', border: 5 },
    { name: 'java', width: 100, height: 100, padding: 12, bg: 'white', border: 5 },
    { name: 'postgreesql', width: 100, height: 100, padding: 12, bg: 'white', border: 5 },
  ];
  const mobileAppSkills = [
    { name: 'react_native', width: 350, height: 100, padding: 0, bg: 'white', border: 5 },
  ];

  // 카테고리에 따라 접두사를 설정하는 함수
  const getImagePrefix = (category) => {
    switch (category) {
      case 'FrontEnd':
        return 'front_';
      case 'BackEnd':
        return 'back_';
      case 'Mobile APP':
        return 'app_';
      default:
        return '';
    }
  };

  // 스킬 데이터를 가져오는 함수
  const getSkills = (category) => {
    switch (category) {
      case 'FrontEnd':
        return frontEndSkills;
      case 'BackEnd':
        return backEndSkills;
      case 'Mobile APP':
        return mobileAppSkills;
      default:
        return [];
    }
  };

  return (
    <section className="bg-black text-white p-4 md:p-8 lg:p-10">
      <div className="w-full flex flex-col justify-center">
        <div className="text-4xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 lg:mb-20 animate-fade-down">💪 SKILLS</div>
        <div className="flex flex-col gap-2 text-white md:flex-row md:flex-nowrap">
          {skills.map((skill, skillIndex) => {
            const imagePrefix = getImagePrefix(skill);
            return (
              <BgBorder key={skill} className="animate-fade-up" style={{animationDelay: `${skillIndex * 0.15}s`, animationFillMode: 'both'}}>
                <div className="my-5">{skill}</div>
                <div className="flex flex-wrap justify-center items-center gap-4 p-4">
                  {getSkills(skill).map((item) => (
                    <div
                      key={item.name}
                      className="border-2 border-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:rotate-3 cursor-pointer"
                    >
                      <Image
                        src={`/images/skills/${imagePrefix}${item.name}.png`}
                        alt={item.name.toUpperCase()}
                        width={item.width}
                        height={item.height}
                        style={{
                          width: item.width,
                          height: item.height,
                          padding: `${item.padding || 0}px`,
                          backgroundColor: item.bg || 'transparent',
                          borderRadius: `${item.border || 0}px`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </BgBorder>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
