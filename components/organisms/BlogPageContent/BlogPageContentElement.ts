/* eslint-disable indent */
import styled, { css } from 'styled-components';

export const BlogPageContainer = styled.div`
  position: relative;

  background-color: #003551;
`;

export const Breadcrumb = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  padding: 0 20px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    display: inline-block;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;

    a {
      font-size: 10px;
    }
  }
`;

export const HeaderSection = styled.div``;

export const BlogDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 120px;

  @media screen and (max-width: 600px) {
    padding: 10px 20px;
  }
`;

export const CreatedAt = styled.div`
  font-size: 12px;
  color: #fff;

  @media screen and (max-width: 600px) {
    font-size: 8px;
  }
`;

export const ContentType = styled.div`
  margin-top: 10px;
  font-size: 18px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

interface ContentTypes {
  type: string;
}
export const ContentSection = styled.div<ContentTypes>`
  padding: 10px 120px;
  position: relative;
  border-radius: 50px 50px 0 0;
  background-color: #fff;

  ${ContentType} {
    color: ${(props) =>
      (props.type === 'video' && '#ff000f') ||
      (props.type === 'journal' && '#00B2AB') ||
      (props.type === 'article' && '#176DD4')};
  }

  ${(props) =>
    (props.type === 'journal' || props.type === 'video') &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-color: #003551;
        width: 100%;
        height: 300px;

        @media screen and (max-width: 600px) {
          height: 100px;
        }
      }
    `}

  @media screen and (max-width: 600px) {
    padding: 10px 20px;
    border-radius: 20px 20px 0 0;
  }
`;

export const ContentContainer = styled.div`
  width: 90%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ContentVideo = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%;
  border-radius: 20px;
  z-index: 9;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const ContentTitle = styled.div`
  font-size: 36px;
  font-weight: 700;

  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;
export const ContentDescription = styled.div``;
