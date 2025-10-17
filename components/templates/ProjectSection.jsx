'use client';
import React from 'react';
import Image from 'next/image';
import BgBorder from '../common/BgBorder';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import fitcolBbashop1 from '@/public/images/projects/fitcol/fitcolBbashop1.png';
import fitcolBbashop2 from '@/public/images/projects/fitcol/fitcolBbashop4.png';
import fitcolBbashop3 from '@/public/images/projects/fitcol/fitcolBbashop2.png';
import fitcolBbashop4 from '@/public/images/projects/fitcol/fitcolBbashop3.png';

import useTicket1 from '@/public/images/projects/useTicket/useTicket1.png';
import useTicket2 from '@/public/images/projects/useTicket/useTicket2.png';
import useTicket3 from '@/public/images/projects/useTicket/useTicket3.png';
import useTicket4 from '@/public/images/projects/useTicket/useTicket4.png';
import useTicket5 from '@/public/images/projects/useTicket/useTicket5.png';
import useTicket6 from '@/public/images/projects/useTicket/useTicket6.png';

const ListItem = ({ title, description, descriptions }) => {
  return (
    <div className="mb-3 md:mb-5">
      <h3 className="text-lg md:text-xl font-bold">{title}</h3>
      {description && (
        <p className="text-sm md:text-base list-disc list-inside ml-4">{description}</p>
      )}
      {descriptions && Array.isArray(descriptions) && (
        <ul className="list-disc list-inside ml-5 mt-2">
          {descriptions.map((desc, index) => (
            <li key={index} className="text-sm md:text-base">{desc}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const fitcolBbashops = [fitcolBbashop1, fitcolBbashop2, fitcolBbashop3, fitcolBbashop4];
const useTickets = [useTicket1, useTicket2, useTicket3, useTicket4, useTicket5, useTicket6];

const Pagination = ({ current, total }) => (
  <div className="flex justify-center mt-4">
    {Array.from({ length: total }, (_, index) => (
      <div
        key={index}
        className={`w-2 h-2 rounded-full mx-1 ${current === index + 1 ? 'bg-white' : 'bg-gray-400'}`}
      />
    ))}
  </div>
);

const ProjectSection = () => {
  const [fitcolApi, setFitcolApi] = React.useState(null);
  const [fitcolCurrent, setFitcolCurrent] = React.useState(0);
  const [fitcolCount, setFitcolCount] = React.useState(0);

  const [ticketApi, setTicketApi] = React.useState(null);
  const [ticketCurrent, setTicketCurrent] = React.useState(0);
  const [ticketCount, setTicketCount] = React.useState(0);

  // Autoplay 플러그인 설정 (4초마다 자동 전환)
  const fitcolAutoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const ticketAutoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (fitcolApi) {
      setFitcolCount(fitcolApi.scrollSnapList().length);
      setFitcolCurrent(fitcolApi.selectedScrollSnap() + 1);
      fitcolApi.on("select", () => {
        setFitcolCurrent(fitcolApi.selectedScrollSnap() + 1);
      });
    }
  }, [fitcolApi]);

  React.useEffect(() => {
    if (ticketApi) {
      setTicketCount(ticketApi.scrollSnapList().length);
      setTicketCurrent(ticketApi.selectedScrollSnap() + 1);
      ticketApi.on("select", () => {
        setTicketCurrent(ticketApi.selectedScrollSnap() + 1);
      });
    }
  }, [ticketApi]);
// TODO: 반응형 수정!
  return (
    <div className='bg-black p-4 md:p-8 lg:p-10 flex flex-col gap-3 text-white'>
      <div className="text-4xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 lg:mb-20 animate-fade-down">👩‍💻 Project</div>
      {/* 프로젝트 1 섹션 */}
      <BgBorder className='text-white animate-fade-up' style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
        <h1 className="font-bold text-2xl md:text-3xl m-4 md:m-6 lg:m-10">프로젝트 1: 빠숍(쇼핑몰) 개발</h1>
        <div className='flex flex-col md:flex-row justify-around text-lg'>
          {/* 데스크탑: 원본 UI 유지, 모바일: 반응형 적용 */}
          <div className='md:ml-10 md:w-1/2 w-full px-4 md:px-12'>
            <Carousel
              setApi={setFitcolApi}
              className='w-full md:w-auto'
              plugins={[fitcolAutoplay.current]}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {fitcolBbashops.map((fitcolBbashop, index) => (
                  <CarouselItem
                    key={index}
                    className="relative h-[180px] w-full sm:h-[250px] md:w-[400px] md:h-[400px] mt-6 md:mt-10 pl-2 md:pl-4"
                  >
                    <div className="relative h-full w-full transition-opacity duration-1000 ease-in-out">
                      <Image
                        src={fitcolBbashop}
                        alt={`Fitcol Bbashop Component ${index + 1}`}
                        fill
                        className="rounded-md object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* 데스크탑에서만 버튼 표시 */}
              <CarouselPrevious className='hidden md:flex' />
              <CarouselNext className='hidden md:flex' />
              <Pagination current={fitcolCurrent} total={fitcolCount} />
            </Carousel>
          </div>
          
          <section className='w-full md:w-[400px] px-4 md:px-0 mt-10 md:mt-0 mb-10'>
            <p className="md:text-base">
              카드사 고객의 포인트와 앱카드 인증을 활용한 이커머스 "빠숍" 개발. 인기 상품, 이벤트,
              찜한 상품 등 다양한 기능을 통해 사용자 경험을 강화.
            </p>
            <ul className="mt-3">
              <ListItem
                title="1. 베스트 탭/이벤트 탭"
                description="인기 상품과 이벤트를 한눈에 볼 수 있는 페이지 개발."
              />
              <ListItem
                title="2. 찜한 상품/스토어 관리"
                description="즐겨찾는 상품과 스토어를 관리하는 기능."
              />
              <ListItem
                title="3. 배송지 관리"
                description="배송지 추가/수정/삭제 기능."
              />
              <ListItem
                title="4. 상품 구매 프로세스"
                description="옵션 선택, 결제 UI, 슬라이딩 팝업 구현"
              />
            </ul>
            <p className="mt-3 text-base md:text-lg">
              <strong>사용 기술:</strong> Vue, Vuex, Axios, SCSS<br />
              <strong>개발 기간:</strong> 2022.11 ~ 2023.06<br />
              <strong>참여 인원:</strong> 프론트엔드 4명, 서버 1명
            </p>
          </section>
        </div>
      </BgBorder>

      {/* 프로젝트 2 섹션 */}
      <BgBorder className='text-white animate-fade-up' style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
        <h1 className="font-bold text-2xl md:text-3xl m-4 md:m-6 lg:m-10">프로젝트 2: 이용권 개발</h1>
        <div className='flex flex-col md:flex-row justify-around text-lg'>
          <div className='md:ml-10 md:w-1/2 w-full px-4 md:px-12'>
            <Carousel
              setApi={setTicketApi}
              className='w-full md:w-auto'
              plugins={[ticketAutoplay.current]}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {useTickets.map((useTicket, index) => (
                  <CarouselItem
                    key={index}
                    className="relative w-full h-[180px] sm:h-[250px] md:w-[400px] md:h-[400px] mt-6 md:mt-10 pl-2 md:pl-4"
                  >
                    <div className="relative h-full w-full transition-opacity duration-1000 ease-in-out">
                      <Image
                        src={useTicket}
                        alt={`Use Ticket Component ${index + 1}`}
                        fill
                        className="rounded-md object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='hidden md:flex' />
              <CarouselNext className='hidden md:flex' />
              <Pagination current={ticketCurrent} total={ticketCount} />
            </Carousel>
          </div>
          
          <section className='w-full md:w-[400px] px-4 md:px-0 mb-10'>
            <p className="md:text-base">
              멜론과 협업한 프로젝트를 주도적으로 진행했습니다.
              특정 카드사와 제휴하여 사용자들에게 할인된 가격으로 음악 스트리밍 이용권을 제공합니다.
            </p>
            <ul className="mt-3">
            <ListItem
                title="1. 이용권 발급"
                descriptions={[
                  '앱카드 인증과 멜론 인증을 통해 사용자가 프로모션 혜택을 받아 이용권을 발급받는 프로세스 개발.',
                  '브릿지 페이지를 통한 멜론 계정 연동 및 결제 성공 페이지 구현.',
                ]}
              />
              <ListItem
                title="2. 이용권 해지"
                descriptions={[
                  '사용자가 정기결제를 해지하거나 중도해지를 할 수 있는 기능 개발.',
                  '핏콜라보 로그인 후 정기이용권 목록에서 정기결제 해지 및 관리 기능 구현.',
                ]}
              />
              <ListItem
                title="3. 카드 본인 인증"
                descriptions={[
                  '앱카드 모듈을 호출하여 사용자의 본인 인증을 처리하는 기능 개발.',
                ]}
              />
            </ul>
            <p className="mt-3 text-base md:text-lg">
              <strong>사용 기술:</strong> Vue, Vuex, Axios, SCSS<br />
              <strong>개발 기간:</strong> 2023.09 ~ 2023.11.30<br />
              <strong>참여 인원:</strong> 프론트엔드 1명, 서버 1명
            </p>
          </section>
        </div>
      </BgBorder>
    </div>
  );

};

export default ProjectSection;
