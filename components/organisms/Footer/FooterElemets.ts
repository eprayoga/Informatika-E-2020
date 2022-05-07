import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-image: url('/assets/img/footer-background.png');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #003551;
  position: relative;
  left: 0;
  bottom: 0;
  margin-top: 100px;
  padding: 20px 120px;

  @media screen and (max-width: 1024px) {
    padding: 20px 40px;
  }
  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  color: #fff;
`;

export const ContentLogo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const LogoText = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const ContentMenus = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 25%;
  grid-column-gap: 100px;
  grid-row-gap: 20px;

  @media screen and (max-width: 1024px) {
    grid-column-gap: 40px;
  }

  @media screen and (max-width: 765px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Menu = styled.div``;

export const MenuHeader = styled.div`
  font-size: 24px;
  font-weight: 700;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const MenuList = styled.div`
  font-size: 18px;
  font-weight: 400;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Copyright = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;
