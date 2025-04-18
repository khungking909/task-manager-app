import { ArrowLeft } from '@components/Atom/Icon/icons/ArrowLeft';
import { ArrowRight } from '@components/Atom/Icon/icons/ArrowRight';
import useScreenSize from '@hooks/useScreenSize';
import React, { useRef } from 'react';
import { arrayToString } from 'src/common/untils/arrayToString';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Autoplay, Keyboard, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import carouselModuleClass from './Carousel.module.scss';
import { CarouselProps } from './type';

const Carousel = ({
  children,
  slidesPerView = 1,
  spaceBetween = 0,
  autoPlay,
  autoPlayInterval = 3000,
  loop,
  mousewheel,
  direction = 'horizontal',
  keyboard,
  navigationColor = 'dark',
  navigation,
  className = '',
}: CarouselProps) => {
  const childrenArray = React.Children.toArray(children);
  const swiperRef = useRef<SwiperClass | null>(null); // swiper ref
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      direction={direction}
      className={arrayToString([carouselModuleClass.carousel, className])}
      modules={[Autoplay, Keyboard, Mousewheel]}
      autoplay={autoPlay ? { delay: autoPlayInterval, disableOnInteraction: false } : false}
      loop={loop}
      mousewheel={mousewheel ? { forceToAxis: true } : false}
      keyboard={{ enabled: keyboard }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {childrenArray.map((item, index) => (
        <SwiperSlide key={`carousel__${index}`} className={carouselModuleClass['slide']}>
          {item}
        </SwiperSlide>
      ))}

      {navigation && (
        <>
          <ArrowLeft
            className={carouselModuleClass.navigation__left}
            boxColor={navigationColor}
            box
            color="light"
            boxVariant="circle"
            boxSize={isMobile ? 'small' : 'medium'}
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <ArrowRight
            className={carouselModuleClass.navigation__right}
            boxColor={navigationColor}
            box
            color="light"
            boxVariant="circle"
            boxSize={isMobile ? 'small' : 'medium'}
            onClick={() => swiperRef.current?.slideNext()}
          />
        </>
      )}
    </Swiper>
  );
};

export { Carousel };
