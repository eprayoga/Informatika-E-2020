import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: fit-content;
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  gap: 10px;
  align-items: center;
`;

export const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    width: 25px;
    height: 25px;
  }
`;

export const ProfileData = styled.div``;

export const Name = styled.div`
  font-size: 12px;
  font-weight: 600;

  @media screen and (max-width: 600px) {
    font-size: 8px;
  }
`;

export const NoId = styled.div`
  font-size: 10px;
  font-weight: 300;

  @media screen and (max-width: 600px) {
    font-size: 6px;
  }
`;
