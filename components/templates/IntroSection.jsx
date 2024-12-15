import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const IntroSection = () => {
  const { scrollY } = useScroll();
  const fontSize = useTransform(scrollY, [0, 1000], ['50px', '90px']);

  const MOTION_OFFSET = {
    WELCOME_CONTAINER_SCALE: [0, 900],
    WELCOME_MAIN_TITLE_OPACITY: [700, 900],
    WELCOME_SUB_TITLE_OPACITY: [500, 700],
  };

  const containerScale = useTransform(
    scrollY,
    MOTION_OFFSET.WELCOME_CONTAINER_SCALE,
    [1, 1.2]
  );

  const mainTitleOpacity = useTransform(
    scrollY,
    MOTION_OFFSET.WELCOME_MAIN_TITLE_OPACITY,
    [1, 0]
  )

  const subTitleOpacity = useTransform(
    scrollY,
    MOTION_OFFSET.WELCOME_SUB_TITLE_OPACITY,
    [1, 0]
  )

  return (
    <div className="w-full h-[4000px]">
      <div className=''>
        <motion.div
          style={{
            opacity: mainTitleOpacity,
            scale: containerScale,
          }}
          className="fixed top-[37%] left-[37%]"
        >
          <p className="text-7xl">안녕하세요.</p>
        </motion.div>
        <motion.div
          style={{
            opacity: subTitleOpacity,
            scale: containerScale,
          }}
          className="fixed top-[48%] left-[38.5%]"
        >
          <p className="text-xl">FRONTEND 개발자 강다혜입니다.</p>
        </motion.div>
        <motion.div
          style={{
            opacity: mainTitleOpacity,
            scale: containerScale,
          }}
          className="fixed top-[37%] left-[37%]"
        >
          <p className="text-7xl">FE 강다혜</p>
        </motion.div>
        <motion.div
          style={{
            opacity: subTitleOpacity,
            scale: containerScale,
          }}
          className="fixed top-[48%] left-[38.5%]"
        >
          <p className="text-xl">매일 성장하고 있는 1년차 프론트개발자입니다.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroSection;
