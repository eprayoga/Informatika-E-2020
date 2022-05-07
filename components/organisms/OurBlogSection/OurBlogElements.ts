import styled from 'styled-components';

export const OurBlogContainer = styled.div`
  margin-top: 60px;
  position: relative;
  padding: 0 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  h1 {
    font-size: 40px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
    font-weight: 300;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 20px;

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const SliderContainer = styled.div`
  margin-top: 20px;

  .slick-slide {
    margin-left: 20px;
  }
`;

export const ArrowNext = styled.img`
  width: 50px;
  padding: 13px;
  height: 50px;
  right: 10px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #fff;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ArrowPrev = styled.img`
  width: 50px;
  padding: 13px;
  height: 50px;
  left: 10px;
  background-color: #fff;
  border-radius: 50%;
  z-index: 9;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #fff;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
