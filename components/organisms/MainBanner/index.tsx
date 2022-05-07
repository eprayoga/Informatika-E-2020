import Image from 'next/image';
import Link from 'next/link';
import {
  BannerButton,
  BannerContainer,
  BannerDescription,
  BannerIllustrator,
  Brand,
  Description,
  Doodle,
  ExploreButton,
  Slogan,
} from './MainBannerElements';
import bannerImage from '../../../public/assets/img/main-banner.svg';
import { InstagramButton, YoutubeButton } from '../../atoms/Button';

const MainBanner = () => {
  return (
    <BannerContainer>
      <BannerDescription>
        <Brand>
          Teknik Informatika
          <span> E</span>
        </Brand>
        <Slogan>Family through Fellowship</Slogan>
        <Description>
          we are informatics engineering students
          <br />
          at the garut institute of technology class of 2020
        </Description>
        <BannerButton>
          <Link href="#aboutUs">
            <ExploreButton href="#aboutUs">Explore us</ExploreButton>
          </Link>
          <InstagramButton href="https://www.instagram.com/tekin.e2020/" />
          <YoutubeButton href="https://www.youtube.com/channel/UCHt6M4V4WybfYDBT3otmXQw" />
        </BannerButton>
      </BannerDescription>
      <BannerIllustrator>
        <Image src={bannerImage} alt="MAIN BANNER" />
      </BannerIllustrator>
      <Doodle />
    </BannerContainer>
  );
};

export default MainBanner;
