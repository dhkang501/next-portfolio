import React from 'react'

const ABOUT_ME_FIELD = [
  { title: '이름', fields: ['강다혜'] },
  { title: '생년월일', fields: ['1993.05.26'] },
  { title: '연락처', fields: ['010-7188-7110'] },
  { title: '이메일', fields: ['gangdah07@gmail.com'] },
]
// TODO: 애니메이션 효과 추가하기
const AboutMeSection = () => {
  return (
    <section className='w-full bg-white text-black p-4 md:p-10 lg:p-20'>
      <div className='w-full flex flex-col'>
        <section className='text-4xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 lg:mb-20 animate-fade-down'>
          👋 ABOUT ME
        </section>
        <section className='flex flex-col justify-between gap-10 mb-8 md:mb-20 md:flex-row '>
          {ABOUT_ME_FIELD.map((item, index) => (
            <section
              key={index}
              className='text-center mb-4 md:mb-6 animate-fade-up'
              style={{animationDelay: `${index * 0.1}s`, animationFillMode: 'both'}}
            >
              <div className='text-lg md:text-xl lg:text-2xl font-bold'>{item.title}</div>
              <div className='text-lg md:text-xl lg:text-2xl font-bold md:w-max w-auto mt-2'>{item.fields}</div>
            </section>
          ))}
        </section>
        <article className='text-center text-base md:text-lg lg:text-xl animate-fade-up px-4' style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
          저는 1년 5개월의 경력을 가진 프론트엔드 개발자로, Vue.js와 같은 프레임워크를 사용해 효율적이고 사용자 친화적인 웹 애플리케이션을 개발해왔습니다.
          이커머스 개발 경험을 통해 컴포넌트 설계, 상태 관리, 반응형 UI/UX 구현 능력을 키웠으며, 사용자 경험을 개선하는 데 열정을 가지고 지속적으로 기술을 발전시키고 있습니다.
        </article>
      </div>
    </section>
  )
}

export default AboutMeSection
