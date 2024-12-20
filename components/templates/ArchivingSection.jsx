import React from 'react'
import Image from 'next/image';

const ArchivingSection = () => {
  return (
    <section className=' bg-green-600 text-white p-10'>
      <div className="text-6xl text-center mb-20">💪 ArchivingSection</div>
        <div className='flex flex-row justify-between'>
          {/* github */}
          <div className= 'w-fit h-fit p-3 border-2 border-white rounded-xl'>
            <Image src='/images/skills/github.png' width='350' height='100' style={{backgroundColor: 'white', borderRadius:'5px', marginBottom:'5px'}}/>
            <a href="https://github.com/dhkang501" className='text-blue-700 text-xl'>github.com/dhkang501</a>
            <div className='text-lg'>과거 프로젝트들 저장소입니다.</div>
          </div>
          {/* blog */}
          <div className= 'w-fit h-fit p-3 border-2 border-white rounded-xl'>
            <span className='text-6xl font-bold'>BLOG</span>
            <div className='flex flex-col'>
              <a href="https://developer-nation.tistory.com/" className='text-blue-700 text-xl'>개발자국 developer-nation.tistory.com</a>
              <div className='text-lg'>스터디 정리 및 코딩테스트 준비 과정이 들어있습니다.</div>
            </div>
          </div>
          {/* 이력서 및 포트폴리오 */}
          <div className= 'w-fit h-fit p-3 border-2 border-white rounded-xl'>
            <span className='text-6xl font-bold'>FrontEnd Portfolio</span>
            <div>이력서와 경력포트폴리오를 PDF로 확인 할 수 있습니다.</div>
          </div>
        </div>
    </section>
  )
}

export default ArchivingSection