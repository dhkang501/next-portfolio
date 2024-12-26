import React from 'react'

const BgBorder = ({children,className, ...props}) => {
  return (
    <div className={`w-full h-fit bg-black rounded-2xl text-center text-3xl overflow-hidden pb-3 ${className}`}>
      {children}
    </div>
  )
}

export default BgBorder