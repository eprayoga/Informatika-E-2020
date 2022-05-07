import styled from 'styled-components';

export const BannerContainer = styled.div`
  background-image: url('/assets/img/hero-background.png');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #003551;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 75px 120px 95px;
  transition: all 0.5s ease;
  margin-top: 0;

  @media screen and (max-width: 1024px) {
    padding: 75px 20px 95px;
  }

  @media screen and (max-width: 600px) {
    height: calc(100vh - 80px);

    &::after {
      position: absolute;
      content: '';
      background-image: url('/assets/icon/abstract-icon-3.png');
      display: block;
      width: 200px;
      height: 200px;
      background-size: 100%;
      top: 30px;
      right: -70px;
    }
  }
`;

export const BannerDescription = styled.div`
  width: 40%;
  color: #fff;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Brand = styled.p`
  font-size: 24px;

  span {
    color: #20b489;
  }
`;

export const Slogan = styled.h1`
  font-size: 56px;

  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 15px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const BannerButton = styled.div`
  display: flex;
  align-items: center;

  div,
  a {
    margin-right: 10px;
  }

  @media screen and (max-width: 600px) {
    a {
      font-size: 20px;
    }
  }
`;

export const ExploreButton = styled.a`
  position: relative;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 600;
  border: 3px solid transparent;
  border-radius: 10px;
  background-color: #fff;
  color: #003551;
  padding: 7px 25px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #003551;
    color: #fff;
    border: 3px solid #fff;
  }
`;

export const BannerIllustrator = styled.div`
  width: 50%;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
