import styled from 'styled-components';

export const AboutUsContainer = styled.div`
  padding: 0 120px;
  padding-top: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: start;

  h1 {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 40px;
    padding-top: 80px;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    padding: 0 40px;
    padding-top: 80px;
    flex-direction: column;

    h1 {
      display: block;
      font-size: 30px;
      font-weight: 500;
    }
  }
`;

export const AboutUsImage = styled.div`
  display: block;
`;

export const AboutUsContent = styled.div`
  width: 50%;
  margin-left: 20px;

  h1 {
    display: block;
    font-size: 40px;
    font-weight: 500;
  }

  p {
    text-align: justify;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-left: 0;

    h1 {
      display: none;
    }
  }
`;
