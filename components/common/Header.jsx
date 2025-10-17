'use client'
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ headers, headerHeight, scrollToTop, scrollToSection }) => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // 메뉴 토글
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 메뉴 클릭 시 스크롤 및 메뉴 닫기
  const handleMenuClick = (ref) => {
    scrollToSection(ref);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* 데스크탑 헤더 */}
      <div
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 p-4 shadow-md transition-all duration-500 ease-in-out hidden md:block ${
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
                className="cursor-pointer hover:opacity-70 transition-opacity"
              >
                {header.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 모바일 헤더 */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 p-4 shadow-md transition-all duration-500 ease-in-out md:hidden ${
          isDark ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold cursor-pointer" onClick={scrollToTop}>
            DH's Portfolio
          </div>
          <button
            onClick={toggleMenu}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="메뉴"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 드로어 */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-40 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}
      >
        <div className="pt-20 px-6">
          {headers.map((header) => (
            <div
              key={header.scrollIndex}
              onClick={() => handleMenuClick(header.ref)}
              className="py-4 text-lg font-bold border-b cursor-pointer hover:opacity-70 transition-opacity"
            >
              {header.title}
            </div>
          ))}
        </div>
      </div>

      {/* 오버레이 */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Header;
