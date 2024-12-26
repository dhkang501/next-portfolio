import React from 'react'
import Image from 'next/image'
import BgBorder from '../common/BgBorder'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import fitcolBbashopCompo1 from '@/public/images/projects/fitcol/component1.png'
import fitcolBbashopCompo2 from '@/public/images/projects/fitcol/component2.png'
import fitcolBbashopCompo3 from '@/public/images/projects/fitcol/component3.png'

const fitcolBbashops = [fitcolBbashopCompo1, fitcolBbashopCompo2, fitcolBbashopCompo3]

const ProjectSection = () => {
  return (
    <div className='p-10'>
      <BgBorder className={'flex flex-col justify-around p-3 text-white text-lg md:flex-row'}>
        {/*  TODO : 주제 1 맨위로 빼기 */}
        <Carousel className='ml-10 w-1/2'>
          <CarouselContent>
            {fitcolBbashops.map((fitcolBbashop, index) => (
              <CarouselItem key={index} className="relative w-[400px] h-[400px]">
                <Image
                  src={fitcolBbashop}
                  alt={`Fitcol Bbashop Component ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          {/* TODO : 페이지네이션 추가 */}
        </Carousel>
        {/* TODO: Text 컴포넌트 만들기 */}
        <section className='w-[300px] h-[400px]'>
          <h2 className="font-bold text-xl mb-2">프로젝트 1: 빠숍(쇼핑몰) 개발</h2>
          <p>
            카드사 고객의 포인트와 앱카드 인증을 활용한 쇼핑몰 플랫폼 "빠숍" 개발. 인기 상품, 이벤트,
            찜한 상품 등 다양한 기능을 통해 사용자 경험을 강화.
          </p>
          <ul className="mt-3 list-disc list-inside">
            <li>베스트 탭/이벤트 탭: 인기 상품과 이벤트를 한눈에 볼 수 있는 페이지 개발.</li>
            <li>찜한 상품/스토어 관리: 즐겨찾는 상품과 스토어를 관리하는 기능.</li>
            <li>배송지 관리: 배송지 추가/수정/삭제 기능.</li>
            <li>상품 구매 프로세스: 옵션 선택, 결제 UI, 슬라이딩 팝업 구현.</li>
          </ul>
          <p className="mt-3 text-sm">
            <strong>사용 기술:</strong> Vue, Vuex, Axios, SCSS<br />
            <strong>개발 기간:</strong> 2022.11 ~ 2023.06<br />
            <strong>참여 인원:</strong> 프론트엔드 4명, 서버 1명
          </p>
        </section>
      </BgBorder>
    </div>
  )
}

export default ProjectSection
