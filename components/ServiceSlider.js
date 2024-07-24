//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper style

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
   
  RxPencil2,
  RxDesktop,
   RxRocket,
   RxArrowTopRight,
} from "react-icons/rx";

// impoert required moduls
import { FreeMode, Pagination } from "swiper";

// data
 
const serviceData = [
  {
    id: 1,
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Creating visually stunning designs that captivate your audience and enhance user experience.",
  },
  {
    id: 2,
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Crafting responsive and dynamic websites that bring your vision to life with the latest front-end technologies.",
  },
  {
    id: 3,
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Optimizing your site to rank higher in search results, driving organic traffic, and boosting online visibility.",
  },
];

 
const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <div className='bg-[rgba(65,47,123,0.15)] min-h-[300px] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 '>
              {/* icons */}
              <div className='text-4x1 text-accent mb-4'> {item.icon} </div>
              {/* title / desc*/}
              <div className='mb-8'>
                <div className='mb-2 text-lg'> {item.title}</div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              {/* arrows */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
