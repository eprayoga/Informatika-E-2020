import Image from 'next/image';
import React from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import photoEndang from '../../../public/assets/img/pp-endang.jpg';
import photoRidwan from '../../../public/assets/img/pp-ridwan.jpeg';
import photoDavid from '../../../public/assets/img/pp-david.jpg';
import photoRifki from '../../../public/assets/img/pp-rifki.jpeg';
import {
  Description,
  DoodleImage,
  ProfileImage,
  ProfileName,
  ProfileNIM,
  Quotes,
  QuotesContainer,
  QuotesContent,
  QuotesDoodle,
  QuotesTitle,
  SliderContainer,
  Subtitle,
  Title,
} from './QuotesSectionElements';

const QuotesSection = () => {
  return (
    <QuotesContainer>
      <QuotesTitle>
        <Title>
          <span>"</span>
          QUOTES ANGGOTA
          <span>"</span>
        </Title>
        <Subtitle>
          Quotes para mahasiswa
          <br />
          Teknik Informatika E ITG 2020
        </Subtitle>
      </QuotesTitle>
      <SliderContainer>
        <DoodleImage />
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          grabCursor
          loop
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <QuotesContent>
              <ProfileImage>
                <Image
                  src={photoEndang}
                  width={270}
                  height={325}
                  objectFit="cover"
                  layout="fixed"
                />
              </ProfileImage>
              <Description>
                <ProfileName>Endang Prayoga Hidayatulloh</ProfileName>
                <ProfileNIM>2006189</ProfileNIM>
                <Quotes>
                  "Lakukan yang terbaik, dan biarkan Tuhan yang melakukan
                  sisanya"
                </Quotes>
              </Description>
            </QuotesContent>
          </SwiperSlide>
          <SwiperSlide>
            <QuotesContent>
              <ProfileImage>
                <Image
                  src={photoRidwan}
                  width={270}
                  height={325}
                  objectFit="cover"
                  layout="fixed"
                />
              </ProfileImage>
              <Description>
                <ProfileName>Ridwan Tazudin</ProfileName>
                <ProfileNIM>2006075</ProfileNIM>
                <Quotes>"Aku memang diam, tapi aku tidak buta"</Quotes>
              </Description>
            </QuotesContent>
          </SwiperSlide>
          <SwiperSlide>
            <QuotesContent>
              <ProfileImage>
                <Image
                  src={photoDavid}
                  width={270}
                  height={325}
                  objectFit="cover"
                  layout="fixed"
                />
              </ProfileImage>
              <Description>
                <ProfileName>David Yusuf</ProfileName>
                <ProfileNIM>2006064</ProfileNIM>
                <Quotes>
                  "Sedikit lebih beda lebih baik daripada sedikit lebih baik"
                </Quotes>
              </Description>
            </QuotesContent>
          </SwiperSlide>
          <SwiperSlide>
            <QuotesContent>
              <ProfileImage>
                <Image
                  src={photoRifki}
                  width={270}
                  height={325}
                  objectFit="cover"
                  layout="fixed"
                />
              </ProfileImage>
              <Description>
                <ProfileName>Moh. Rifki Almunawar</ProfileName>
                <ProfileNIM>2006068</ProfileNIM>
                <Quotes>
                  "Jika kamu menemukan cahaya petunjuk, maka berangkatlah walau
                  sendiri"
                </Quotes>
              </Description>
            </QuotesContent>
          </SwiperSlide>
        </Swiper>
      </SliderContainer>
      <QuotesDoodle>
        <span />
      </QuotesDoodle>
    </QuotesContainer>
  );
};

export default QuotesSection;
