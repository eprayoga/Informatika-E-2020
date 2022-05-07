import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BlogCarouselContainer } from './BlogCarouselElements';
import BlogCarouselItem from './BlogCarouselItem';

const BlogCarousel = () => {
  return (
    <BlogCarouselContainer>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        grabCursor
        pagination={{
          clickable: true,
        }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <BlogCarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCarouselItem />
        </SwiperSlide>
      </Swiper>
    </BlogCarouselContainer>
  );
};

export default BlogCarousel;
