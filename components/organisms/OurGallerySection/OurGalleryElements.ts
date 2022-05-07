import styled from 'styled-components';

export const OurGalleryContainer = styled.div`
  margin-top: 70px;
`;

export const Header = styled.div`
  width: 100%;
  text-align: center;

  h1 {
    font-size: 40px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
    font-weight: 300;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const MarqueeContainer = styled.div`
  margin-top: 30px;

  @media screen and (max-width: 600px) {
    margin-top: 20px;
  }
`;

export const ImageWraper = styled.div`
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 15px;

  div,
  span {
    position: unset !important;
  }

  .image {
    object-fit: contain !important;
    height: 400px !important;
    position: relative !important;
    width: unset !important;
  }

  @media screen and (max-width: 600px) {
    height: 300px;

    .image {
      height: 300px !important;
    }
  }
`;
