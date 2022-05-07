import styled from 'styled-components';

export const QuotesContainer = styled.section`
  margin-top: 70px;
  background-color: #003551;
  padding: 70px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 70px 40px;
  }

  @media screen and (max-width: 600px) {
    padding: 40px 30px;
  }
`;

export const Title = styled.h3`
  font-size: 40px;
  font-weight: 600;

  span {
    color: #00898b;
  }
`;

export const Subtitle = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

export const QuotesTitle = styled.div`
  color: #fff;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    ${Subtitle} {
      margin-bottom: 30px;
      text-align: center;
    }
  }

  @media screen and (max-width: 600px) {
    ${Title} {
      font-size: 28px;
      text-align: center;
    }

    ${Subtitle} {
      font-size: 18px;
      margin-bottom: 30px;
    }
  }
`;

export const SliderContainer = styled.div`
  width: 60%;
  position: relative;

  .swiper {
    .swiper-button-prev,
    .swiper-button-next {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      box-sizing: border-box;
      background-color: transparent;
      box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
      top: 35px;
      position: relative;
    }

    .swiper-button-prev {
      position: absolute;
      left: 310px;
    }

    .swiper-button-next {
      position: absolute;
      left: 370px;
    }

    .swiper-button-prev::after {
      content: url('/assets/icon/arrow-circle-left.svg');
      width: 100%;
      height: 100%;
    }

    .swiper-button-next::after {
      content: url('/assets/icon/arrow-circle-right.svg');
      width: 100%;
      height: 100%;
    }

    @media screen and (max-width: 600px) {
      .swiper-button-prev,
      .swiper-button-next {
        top: 360px;
      }

      .swiper-button-prev {
        left: 0px;
      }

      .swiper-button-next {
        left: 40px;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const QuotesContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex !important;
  align-items: flex-start;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileImage = styled.div`
  position: relative;
  width: 270px;
  height: 325px;
  border-radius: 0px 30px;
  margin-right: 40px;

  span {
    border-radius: 0px 30px;
    z-index: 2;
  }
`;

export const DoodleImage = styled.div`
  border-radius: 0px 30px;
  position: absolute;
  width: 270px;
  height: 325px;
  background-color: transparent;
  border: 2px solid #00898b;
  top: 15px;
  left: 15px;
  z-index: 1;

  @media screen and (max-width: 600px) {
    left: 40px;
  }
`;

export const ProfileName = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
`;

export const ProfileNIM = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const Quotes = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

export const Description = styled.div`
  color: #fff;
  width: 400px;
  margin-top: 60px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    ${ProfileName} {
      font-size: 18px;
    }

    ${ProfileNIM} {
      font-size: 16px;
      margin-bottom: 10px;
    }

    ${Quotes} {
      font-size: 14px;
    }
  }
`;

export const QuotesDoodle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  span {
    position: absolute;
    content: '';
    background-image: url('/assets/icon/abstract-icon-3.png');
    display: block;
    width: 200px;
    height: 200px;
    background-size: 100%;
    bottom: -80px;
    left: 30%;
  }

  &::after {
    position: absolute;
    content: '';
    background-image: url('/assets/icon/abstract-icon-1.png');
    display: block;
    width: 300px;
    height: 300px;
    background-size: 100%;
    bottom: 20px;
    right: 20px;
  }

  &::before {
    position: absolute;
    content: '';
    background-image: url('/assets/icon/abstract-icon-2.png');
    transform: rotate(-45deg);
    display: block;
    width: 200px;
    height: 200px;
    background-size: 100%;
    top: -10px;
    left: -40px;
  }

  @media screen and (max-width: 600px) {
    span {
      left: -80px;
    }

    ::after {
      right: -140px;
    }
  }
`;
