import React from 'react';
import Image from 'next/image';

const ArchivingSection = () => {
  return (
    <section className="bg-green-600 text-white p-10">
      <div className="text-4xl md:text-6xl text-center mb-10 md:mb-20">💪 ArchivingSection</div>
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Github */}
        <div className="w-[380px] p-4 border-2 border-white rounded-xl">
          <a href="https://github.com/dhkang501" className="block">
            <Image
              className="mb-4 bg-white rounded-xl h-[78px]"
              src="/images/github.png"
              width="350"
              height="100"
              alt="GitHub"
            />
            <p className="text-blue-700 text-lg md:text-xl">github.com/dhkang501</p>
            <div className="text-sm md:text-lg">
              <p>과거 프로젝트들 저장소입니다.</p>
              <p>다양한 프로젝트 및 자주 사용되는 기능과 컴포넌트를 정리하는 공간입니다.</p>
            </div>
          </a>
        </div>
        {/* Blog */}
        <div className="w-[380px] p-4 border-2 border-white rounded-xl">
          <a href="https://developer-nation.tistory.com/" className="block">
            <div className="flex flex-row items-center bg-white rounded-xl mb-4 p-2">
              <Image
                src="/images/bi-tistory-favicon.svg"
                width="60"
                height="60"
                alt="Blog Icon"
                className="rounded"
              />
              <p className="text-black text-6xl font-extrabold ml-4">BLOG</p>
            </div>
            <div>
              <p className="text-blue-700 text-lg md:text-xl">개발자국</p>
              <div className="text-sm md:text-lg">
                <p>스터디 및 코딩테스트 준비 과정이 들어있습니다.</p>
                <p>공부한 내용을 정리하는 목적의 블로그입니다.</p>
              </div>
            </div>
          </a>
        </div>
        {/* 이력서 및 포트폴리오 */}
        <div className="w-[380px] p-4 border-2 border-white rounded-xl">
          <div
            className="cursor-pointer"
            onClick={() =>
              window.open(
                'https://www.notion.so/1507872ec55f80f69649ee6691d85e44?pvs=4'
              )
            }
          >
            <div className="flex flex-row items-center bg-white rounded-xl mb-4 p-2">
              <Image
                src="/images/portfolio.png"
                width="60"
                height="60"
                alt="Portfolio Icon"
                className="rounded"
              />
              <p className="text-black md:text-6xl text-5xl font-bold ml-4">Portfolio</p>
            </div>
            <div className="text-lg">
              이력서와 경력 포트폴리오를 PDF로 확인할 수 있습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchivingSection;
