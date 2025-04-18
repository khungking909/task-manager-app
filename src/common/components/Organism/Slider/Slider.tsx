import { Image } from '@components/Atom/Image';
import { Navigation } from '@components/Molecules/Navigation';
import useScreenSize from '@hooks/useScreenSize';
import { useEffect, useRef, useState } from 'react';
import { arrayToString } from 'src/common/untils/arrayToString';
import { getValueFromBreakpoint } from 'src/common/untils/getValueFromBreakpoint';
import { Setting } from 'src/constants/setting';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import swiperModuleClass from './Slider.module.scss';
import { SliderProps } from './type';

const Slider = ({ imageList = [], autoPlay, autoPlaySpeed = 3000 }: SliderProps) => {
  const responsive = useScreenSize();
  const swiperRef = useRef<SwiperClass | null>(null); // swiper ref
  const [currentPage, setCurrentPage] = useState(1); // current page

  const onChangeSwiper = (swiper: SwiperClass) => {
    setCurrentPage(swiper.activeIndex + 1);
  };

  /**
   * Change slide when currentPage change
   */
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(currentPage - 1);
    }
  }, [currentPage]);

  return (
    <Swiper
      modules={[FreeMode, Thumbs, Autoplay]}
      spaceBetween={1}
      slidesPerView={1}
      className={arrayToString([
        swiperModuleClass['full__width__slider'],
        swiperModuleClass['swiper__container'],
      ])}
      onSlideChange={(swiper) => onChangeSwiper(swiper)}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      autoplay={
        autoPlay
          ? {
              delay: autoPlaySpeed,
              disableOnInteraction: false,
            }
          : false
      }
    >
      {imageList.map((image, index) => (
        <SwiperSlide key={index} className={swiperModuleClass['full__width__slider']}>
          <Image src={getValueFromBreakpoint(responsive, image)?.toString() || ''} alt="slider-image" />
        </SwiperSlide>
      ))}
      <Navigation
        totalPage={imageList.length}
        totalVisiblePage={Setting.DIGIT_3}
        currentPage={currentPage}
        color="light"
        variant="pill"
        className={swiperModuleClass['swiper__pagination']}
        onClickNavigationItem={(index) => setCurrentPage(index)}
      />
    </Swiper>
  );
};

export { Slider };
