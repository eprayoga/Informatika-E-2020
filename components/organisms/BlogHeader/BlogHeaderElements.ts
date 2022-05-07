import styled from 'styled-components';

export const BlogHeaderContainer = styled.div`
  position: relative;
  background-color: #003551;
  padding: 50px 120px 80px;

  @media screen and (max-width: 600px) {
    padding: 40px 40px 50px;
  }
`;

export const BlogHeaderDescription = styled.div`
  color: #fff;
  font-size: 36px;
  font-weight: 700;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    width: 100%;
    display: grid;
    place-items: center;
  }

  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

export const Brand = styled.div`
  color: #fff;
`;

export const Title = styled.div`
  color: #00898b;

  span {
    color: #9e9e9e;
  }
`;

export const BlogIllustratorImage = styled.div`
  position: absolute;
  right: 120px;
  bottom: -8px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  width: 400px;
  height: 55px;
  margin-top: 15px;
  position: relative;

  @media screen and (max-width: 600px) {
    width: 300px;
    height: 40px;
  }
`;

export const InputButton = styled.input`
  height: 100%;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  background-color: #fff;
  outline: none;
  border-radius: 30px;
  border: none;
  box-sizing: border-box;
  bottom: 0;
  padding: 10px 20px;
  padding-right: 90px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  font-size: 20px;
  font-weight: 700;
  background-color: #003551;
  color: #fff;
  top: 50%;
  right: 12px;
  border: none;
  transform: translateY(-50%);
  border-radius: 20px;
  padding: 8px 18px;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    right: 6px;
  }
`;
