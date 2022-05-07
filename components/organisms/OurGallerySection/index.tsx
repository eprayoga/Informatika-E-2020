import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import {
  Header,
  ImageWraper,
  MarqueeContainer,
  OurGalleryContainer,
} from './OurGalleryElements';
import img1 from '../../../public/assets/img/MarqueeSlider/1.jpg';
import img2 from '../../../public/assets/img/MarqueeSlider/2.jpg';
import img3 from '../../../public/assets/img/MarqueeSlider/3.jpg';
import img4 from '../../../public/assets/img/MarqueeSlider/4.jpg';
import img5 from '../../../public/assets/img/MarqueeSlider/5.jpg';
import img6 from '../../../public/assets/img/MarqueeSlider/6.jpg';
import img7 from '../../../public/assets/img/MarqueeSlider/7.jpg';
import img8 from '../../../public/assets/img/MarqueeSlider/8.jpg';

const OurBlogSection = () => {
  return (
    <OurGalleryContainer>
      <Header>
        <h1>Gallery</h1>
        <p>all our memories are stored here</p>
      </Header>
      <MarqueeContainer>
        <Marquee gradient={false} speed={50}>
          <ImageWraper>
            <Image src={img1} className="image" alt="" layout="fill" />
          </ImageWraper>
          <ImageWraper>
            <Image src={img2} className="image" alt="" layout="fill" />
          </ImageWraper>
          <ImageWraper>
            <Image src={img3} className="image" alt="" layout="fill" />
          </ImageWraper>
          <ImageWraper>
            <Image src={img4} className="image" alt="" layout="fill" />
          </ImageWraper>
          <ImageWraper>
            <Image src={img5} className="image" alt="" layout="fill" />
          </ImageWraper>
          <ImageWraper>
            <Image src={img6} className="image" alt="" layout="fill" />
          </ImageWraper>
          <ImageWraper>
            <Image src={img7} className="image" alt="" layout="fill" />
          </ImageWraper>
          <ImageWraper>
            <Image src={img8} className="image" alt="" layout="fill" />
          </ImageWraper>
        </Marquee>
      </MarqueeContainer>
    </OurGalleryContainer>
  );
};

export default OurBlogSection;
