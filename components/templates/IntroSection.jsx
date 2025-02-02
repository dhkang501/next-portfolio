'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const INTRO_SECTION_PAGE_HEIGHT = 4000;
const MOTION_OFFSET = {
  WELCOME_CONTAINER_SCALE: [0, 900],
  WELCOME_MAIN_TITLE_OPACITY: [700, 900],
  WELCOME_SUB_TITLE_OPACITY: [500, 700],
  BIO_MAIN_TITLE_OPACITY: [1000, 2400],
  BIO_SUB_TITLE_OPACITY: [1400, 2400],
  BIO_MAIN_TITLE_TRANSLATE_Y: [1000, 1400],
  BIO_CONTAINER_HOLDUP_Y: 3400,
};

const IntroSection = () => {
  const { scrollY } = useScroll();
  const innerHeight = useRef(0);
  const containerRef = useRef(null);

  // 반응형 처리
  useEffect(() => {
    innerHeight.current = window.innerHeight;
    window.addEventListener('resize', () => {
      innerHeight.current = window.innerHeight;
    });
  }, []);

  // 애니메이션 값 계산
  const containerScale = useTransform(
    scrollY,
    MOTION_OFFSET.WELCOME_CONTAINER_SCALE,
    [1, 1.2]
  );

  const mainTitleOpacity = useTransform(
    scrollY,
    MOTION_OFFSET.WELCOME_MAIN_TITLE_OPACITY,
    [1, 0]
  );

  const subTitleOpacity = useTransform(
    scrollY,
    MOTION_OFFSET.WELCOME_SUB_TITLE_OPACITY,
    [1, 0]
  );

  const bioMainTitleOpacity = useTransform(
    scrollY,
    MOTION_OFFSET.BIO_MAIN_TITLE_OPACITY,
    [0, 1]
  );

  const bioSubTitleOpacity = useTransform(
    scrollY,
    MOTION_OFFSET.BIO_SUB_TITLE_OPACITY,
    [0, 1]
  );

  const bioMainTitleTranslateY = useTransform(
    scrollY,
    MOTION_OFFSET.BIO_MAIN_TITLE_TRANSLATE_Y,
    [0, -10]
  );

  const containerTranslateY = useTransform(scrollY, (value) => {
    const correctionOffset = innerHeight.current / 2 - 350;
    return value > MOTION_OFFSET.BIO_CONTAINER_HOLDUP_Y - correctionOffset
      ? MOTION_OFFSET.BIO_CONTAINER_HOLDUP_Y - value - correctionOffset
      : 0;
  });

  const scrollPromptOpacity = useTransform(
    scrollY,
    [MOTION_OFFSET.WELCOME_SUB_TITLE_OPACITY[0], MOTION_OFFSET.WELCOME_SUB_TITLE_OPACITY[1]],
    [1, 0]
  );


  return (
    <div 
      ref={containerRef}
      className="w-full relative bg-black"
      style={{ height: INTRO_SECTION_PAGE_HEIGHT }}
    >
      {/* 첫 번째 섹션 */}
      <motion.div
        className="fixed inset-0 flex flex-col items-center justify-center"
        style={{ 
          scale: containerScale,
          pointerEvents: 'none',
         }}
      >
        <motion.div
          style={{ opacity: mainTitleOpacity }}
          className="text-center"
        >
          <h1 className="text-white text-4xl md:text-8xl font-bold mb-4">
            🙋‍♀️ 안녕하세요
          </h1>
        </motion.div>

        <motion.div
          style={{ opacity: subTitleOpacity }}
          className="text-center"
        >
          <p className="text-white text-xl md:text-3xl">
            FRONTEND 개발자 강다혜입니다.
          </p>
        </motion.div>

        {/* 스크롤 안내 애니메이션 */}
        <motion.div
          className="absolute bottom-20 text-white"
          style={{
            opacity: scrollPromptOpacity,
            pointerEvents: 'none' // 상호작용 방지
          }}
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1,
          }}
        >
          ↓ 스크롤하여 진행해주세요!
        </motion.div>
      </motion.div>

      {/* 두 번째 섹션 */}
      <motion.div
        className="fixed inset-0 flex flex-col items-center justify-center"
        style={{ translateY: containerTranslateY, pointerEvents: 'none' }}
      >
        <motion.div
          style={{ 
            opacity: bioMainTitleOpacity,
            translateY: bioMainTitleTranslateY 
          }}
          className="text-center"
        >
          <h2 className="text-white text-3xl md:text-6xl font-bold mb-4">
            👩‍💻 FE 강다혜
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: bioSubTitleOpacity }}
          className="text-center"
        >
          <p className="text-white text-lg md:text-2xl">
            매일 성장하고 있는 1년차 프론트엔드 개발자입니다.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroSection;