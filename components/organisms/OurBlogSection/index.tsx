import { useRouter } from 'next/router';
import Slider from 'react-slick';
import Button from '../../atoms/Button';
import BlogCard from '../../molecules/BlogCard';
import {
  ArrowNext,
  ArrowPrev,
  Header,
  OurBlogContainer,
  SliderContainer,
  Title,
} from './OurBlogElements';

const NextArrow = (props: { className?: any; onClick?: any }) => {
  const { className, onClick } = props;

  return (
    <ArrowNext
      src="/assets/icon/arrow-next.svg"
      className={className}
      onClick={onClick}
    />
  );
};
const PrevArrow = (props: { className?: any; onClick?: any }) => {
  const { className, onClick } = props;
  return (
    <ArrowPrev
      src="/assets/icon/arrow-left.svg"
      className={className}
      onClick={onClick}
    />
  );
};

const OurBlogSection = () => {
  const router = useRouter();

  const settings = {
    infinite: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <OurBlogContainer>
      <Header>
        <Title>
          <h1>Our Blog</h1>
          <p>increase your knowledge and experience by viewing our content</p>
        </Title>
        <Button btnOutline small onClick={() => router.push('/blog')}>
          Selengkapnya
        </Button>
      </Header>
      <SliderContainer>
        <Slider {...settings}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Slider>
      </SliderContainer>
    </OurBlogContainer>
  );
};

export default OurBlogSection;
