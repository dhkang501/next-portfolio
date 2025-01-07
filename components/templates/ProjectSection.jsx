import React from 'react';
import Image from 'next/image';
import BgBorder from '../common/BgBorder';
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
    <div className="mb-1 md:mb-5">
      <h3 className="text-xl font-bold">{title}</h3>
      {description && (
        <p className="text-base list-disc list-inside ml-4">{description}</p>
      )}
      {descriptions && Array.isArray(descriptions) && (
        <ul className="list-disc list-inside ml-5 mt-2">
          {descriptions.map((desc, index) => (
            <li key={index} className="text-base">{desc}</li>
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
    <div className='p-10 flex flex-col gap-3'>
      <div className="text-6xl text-center text-black mb-20">👩‍💻 Project</div>

      <BgBorder className={'text-white'}>
        <h1 className="font-bold text-xl mt-10 md:text-3xl md:m-10">프로젝트 1: 빠숍(쇼핑몰) 개발</h1>
        <div className='flex flex-col justify-around text-lg md:flex-row'>
          <Carousel setApi={setFitcolApi} className='md:ml-10 md:w-1/2 m-0 w-auto p-2'>
            <CarouselContent>
              {fitcolBbashops.map((fitcolBbashop, index) => (
                <CarouselItem key={index} className="relative h-[200px] w-[400px] mt-10 md:h-[400px]">
                  <Image
                    src={fitcolBbashop}
                    alt={`Fitcol Bbashop Component ${index + 1}`}
                    layout="fill"
                    className="rounded-md"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className=''/>
            <CarouselNext />
            <Pagination current={fitcolCurrent} total={fitcolCount} />
          </Carousel>
          <section className='w-[400px] h-auto mt-10 mb-10 md:mt-0'>
            <p>
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
            <p className="mt-3 text-lg">
              <strong>사용 기술:</strong> Vue, Vuex, Axios, SCSS<br />
              <strong>개발 기간:</strong> 2022.11 ~ 2023.06<br />
              <strong>참여 인원:</strong> 프론트엔드 4명, 서버 1명
            </p>
          </section>
        </div>
      </BgBorder>

      <BgBorder className={'text-white'}>
        <h1 className="font-bold text-3xl m-10">프로젝트 2: 이용권 개발</h1>
        <div className='flex flex-col justify-around text-lg md:flex-row'>
          <Carousel setApi={setTicketApi} className='ml-10 w-1/2'>
            <CarouselContent className='mt-16'>
              {useTickets.map((useTicket, index) => (
                <CarouselItem key={index} className="relative w-[400px] h-[400px] mt-10">
                  <Image
                    src={useTicket}
                    alt={`Use Ticket Component ${index + 1}`}
                    layout="fill"
                    className="rounded-md"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <Pagination current={ticketCurrent} total={ticketCount} />
          </Carousel>
          <section className=' w-auto px-[6px] h-auto mb-10 md:px-0 md:w-[400px] '>
            <p>
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
            <p className="mt-3 text-lg">
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
