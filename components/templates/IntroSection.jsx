import React from 'react'

const IntroSection = () => {
  return (
    <div className='w-full h-[100vh]'>IntroSection</div>
  )
}

export default IntroSection
// import React from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const IntroSection = () => {
//   const { scrollY } = useScroll();

//   const MOTION_OFFSET = {
//     WELCOME_CONTAINER_SCALE: [0, 900],
//     WELCOME_MAIN_TITLE_OPACITY: [700, 900],
//     WELCOME_SUB_TITLE_OPACITY: [500, 700],
//     SECOND_MAIN_TITLE_OPACITY: [1000, 2400],
//     SECOND_SUB_TITLE_OPACITY: [1400, 2400],
//     SECOND_TITLE_START: 3400,
//     SECOND_TITLE_END: 4000,
//   };

//   const containerScale = useTransform(
//     scrollY,
//     MOTION_OFFSET.WELCOME_CONTAINER_SCALE,
//     [1, 1.2]
//   );

//   const mainTitleOpacity = useTransform(
//     scrollY,
//     MOTION_OFFSET.WELCOME_MAIN_TITLE_OPACITY,
//     [1, 0]
//   );

//   const subTitleOpacity = useTransform(
//     scrollY,
//     MOTION_OFFSET.WELCOME_SUB_TITLE_OPACITY,
//     [1, 0]
//   );

//   const SECOND_MAIN_TITLE_OPACITY = useTransform(
//     scrollY,
//     MOTION_OFFSET.SECOND_MAIN_TITLE_OPACITY,
//     [0, 1]
//   );

//   const SECOND_SUB_TITLE_OPACITY = useTransform(
//     scrollY,
//     MOTION_OFFSET.SECOND_SUB_TITLE_OPACITY,
//     [0, 1]
//   );

//   const secondMainTitleY = useTransform(
//     scrollY,
//     [MOTION_OFFSET.SECOND_TITLE_START, MOTION_OFFSET.SECOND_TITLE_END],
//     [0, -500]
//   );

//   const secondSubTitleY = useTransform(
//     scrollY,
//     [MOTION_OFFSET.SECOND_TITLE_START, MOTION_OFFSET.SECOND_TITLE_END],
//     [0, -500]
//   );

//   return (
//     <div className="w-full h-[4000px] relative">
//       {/* 첫 번째 타이틀 섹션 */}
//       <motion.div
//         style={{
//           opacity: mainTitleOpacity,
//           scale: containerScale,
//         }}
//         className="fixed top-1/2 left-[38%] transform -translate-x-[38%] -translate-y-1/2 flex flex-col items-center"
//       >
//         <p className="text-7xl">🙋‍♀️안녕하세요</p>
//       </motion.div>
//       <motion.div
//         style={{
//           opacity: subTitleOpacity,
//           scale: containerScale,
//         }}
//         className="fixed top-[60%] left-[38%] transform -translate-x-[38%] -translate-y-1/2 flex flex-col items-center"
//       >
//         <p className="text-xl">FRONTEND 개발자 강다혜입니다.</p>
//       </motion.div>

//       {/* 두 번째 타이틀 섹션 */}
//       <motion.div
//         style={{
//           opacity: SECOND_MAIN_TITLE_OPACITY,
//           translateY: secondMainTitleY,
//           scale: containerScale,
//         }}
//         className="fixed top-1/2 left-[38%] transform -translate-x-[38%] -translate-y-1/2 flex flex-col items-center"
//       >
//         <p className="text-7xl">👩‍💻FE 강다혜</p>
//       </motion.div>
//       <motion.div
//         style={{
//           opacity: SECOND_SUB_TITLE_OPACITY,
//           translateY: secondSubTitleY,
//           scale: containerScale,
//         }}
//         className="fixed top-[60%] left-[38%] transform -translate-x-[38%] -translate-y-1/2 flex flex-col items-center"
//       >
//         <p className="text-xl">매일 성장하고 있는 1년차 프론트개발자입니다.</p>
//       </motion.div>
//     </div>
//   );
// };

// export default IntroSection;
