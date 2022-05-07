import styled from 'styled-components';

export const CardElement = styled.div`
  width: 350px;

  @media screen and (max-width: 1024px) {
    width: 280px;
  }

  @media screen and (max-width: 600px) {
    width: 150px;
  }
`;

export const ThumbnailImage = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

  span {
    transition: transform 0.3s ease;
  }

  div,
  span {
    position: unset !important;
  }

  .image {
    object-fit: cover !important;
    width: 350px !important;
    height: 350px !important;
    position: relative !important;
    width: unset !important;
  }

  &:hover span {
    transform: scale(1.1);
  }

  @media screen and (max-width: 1024px) {
    width: 280px;
    height: 280px;
    border-radius: 10px;

    .image {
      width: 280px !important;
      height: 280px !important;
      width: unset !important;
    }
  }

  @media screen and (max-width: 600px) {
    width: 150px;
    height: 150px;
    border-radius: 10px;

    .image {
      width: 150px !important;
      height: 150px !important;
      width: unset !important;
    }
  }
`;

export const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

interface TypeTypes {
  blogType: 'video' | 'journal' | 'article';
}
export const Type = styled.button<TypeTypes>`
  margin-top: 10px;
  font-size: 13px;
  cursor: pointer;
  color: ${(props) =>
    (props.blogType === 'video' && '#ff000f') ||
    (props.blogType === 'journal' && '#00B2AB') ||
    (props.blogType === 'article' && '#176DD4')};
  background-color: ${(props) =>
    (props.blogType === 'video' && 'rgba(238, 0, 95, 0.3)') ||
    (props.blogType === 'journal' && 'rgba(0, 205, 174, 0.3)') ||
    (props.blogType === 'article' && 'rgba(0, 152, 236, 0.3)')};
  padding: 2px 10px;
  border: none;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    padding: 2px 7px;
    font-size: 8px;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const Description = styled.p`
  font-size: 12px;
  color: #5b5b5b;
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 15px;

  @media screen and (max-width: 600px) {
    font-size: 8px;
    -webkit-line-clamp: 2;
    margin-bottom: 5px;
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;

  div,
  span {
    position: unset !important;
  }

  .image {
    object-fit: cover !important;
    width: 40px !important;
    height: 40px !important;
    position: relative !important;
    width: unset !important;
  }

  @media screen and (max-width: 600px) {
    width: 15px;
    height: 15px;
    margin-right: 5px;

    .image {
      width: 15px !important;
      height: 15px !important;
    }
  }
`;

export const AuthorDescription = styled.div`
  padding-right: 5px;
`;

export const Name = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  font-weight: 600;

  @media screen and (max-width: 600px) {
    font-size: 6px;
  }
`;

export const CreatedAt = styled.div`
  font-size: 10px;
  color: #5b5b5b;

  @media screen and (max-width: 600px) {
    font-size: 4px;
  }
`;
