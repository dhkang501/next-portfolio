'use client'
import React, { useEffect, useState } from 'react';

const Header = ({ headers, headerHeight, scrollToTop, scrollToSection }) => {
  const [isDark, setIsDark] = useState(false);

  // 스크롤시 헤더 배경 변경
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
// TODO: 헤더 반응형 -> 메뉴바 생성 메뉴바 클릭시 Drawer로 메뉴바 생성 
  return (
    <div
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-10 p-4 shadow-md transition-colors hidden md:block ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="flex justify-between m-3">
        <div className="text-3xl font-bold cursor-pointer" onClick={scrollToTop}>
          DH's Portfolio
        </div>
        <div className="text-lg font-bold flex gap-4 items-center">
          {headers.map((header) => (
            <div
              key={header.scrollIndex}
              onClick={() => scrollToSection(header.ref)}
              className="cursor-pointer"
            >
              {header.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
