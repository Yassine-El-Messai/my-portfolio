// data
const workSlides = {
  slides: [
    {
      images: [
        {
          id: "1",
          title: "title",
          path: "/thumb1.png",
        },
        {
          id: "2",
          title: "title",
          path: "/thumb2.png",
        },
        {
          id: "3",
          title: "title",
          path: "/thumb3.png",
        },
        {
          id: "4",
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          id: "1",
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          id: "2",
          title: "title",
          path: "/thumb1.png",
        },
        {
          id: "3",
          title: "title",
          path: "/thumb2.png",
        },
        {
          id: "4",
          title: "title",
          path: "/thumb3.png",
        },
      ],
    },
  ],
};

//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper style

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// impoert required moduls
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
// next imges
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image) => {
                return (
                  <div
                    key={image.id}
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                  >
                    <div className='flex item-center justify-center realitive overflow-hidden group'>
                      <Image src={image.path} width={500} height={300} alt='' />
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 '></div>
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          <div className='delay-100'> LIVE </div>
                          <div className='translate-y-[50%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            PROJECT
                          </div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 '>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
