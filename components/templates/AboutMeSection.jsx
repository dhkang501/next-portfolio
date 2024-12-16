import React from 'react'

const ABOUT_ME_FIELD = [
  { title: '이름', fields: ['강다혜'] },
  { title: '생년월일', fields: ['1993.05.26'] },
  { title: '연락처', fields: ['010-7188-7110'] },
  { title: '이메일', fields: ['gangdah07@gmail.com'] },
]

const AboutMeSection = () => {
  return (
    <section className='bg-violet-700 text-white p-20'>
      <div className='w-full flex flex-col justify-center min-h-screen'>
        <section className='text-6xl text-center mb-20'>
          👋 ABOUT ME
        </section>
        <section className='flex flex-col justify-between gap-10 mb-20 md:flex-row '>
          {ABOUT_ME_FIELD.map((item, index) => (
            <section key={index} className='text-center mb-6'>
              <div className='text-2xl font-bold'>{item.title}</div>
              <div className='inline-block mt-2 border-b-2 border-white w-24'></div>
              <div className='text-2xl font-bold md:w-max w-auto'>{item.fields}</div>
            </section>
          ))}
        </section>
        
        <article className='text-center items-center text-xl'>
          저는 1년 2개월의 경력을 가진 프론트엔드 개발자로, Vue.js와 같은 프레임워크를 사용해 효율적이고 사용자 친화적인 웹 애플리케이션을 개발해왔습니다. 
          이커머스 개발 경험을 통해 컴포넌트 설계, 상태 관리, 반응형 UI/UX 구현 능력을 키웠으며, 사용자 경험을 개선하는 데 열정을 가지고 지속적으로 기술을 발전시키고 있습니다.
        </article>
      </div>
    </section>
  )
}

export default AboutMeSection
