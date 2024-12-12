import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='w-full h-full'>
        <div className=''>
            {children}
        </div>
    </div>
  )
}

export default layout