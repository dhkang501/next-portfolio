// 'use client'
// import React, { useEffect, useState } from "react";
// import ThemeToggle from "@/components/ThemeToggle";
// import cn from "classnames";

// const Header = () => {
//   const [isTransparent, setIsTransparent] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsTransparent(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className={cn(
//         "transition-all duration-300",
//         isTransparent && "bg-green-500/50 backdrop-blur-lg",
//         !isTransparent && "bg-green-500"
//       )}
//     >
//       <div className="flex justify-between p-5">
//         <div className="text-3xl font-bold">DH's Portfolio</div>
//         <div className="flex items-center text-xl">
//           <div>About Me</div>
//           <div className="ml-5">Project</div>
//           <div className="ml-10">
//             <ThemeToggle />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
