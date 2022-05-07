import styled from 'styled-components';

export const BlogCarouselContainer = styled.div`
  position: relative;
  padding: 0 120px;

  @media screen and (max-width: 1024px) {
    padding: 0 80px;
  }

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }

  .swiper {
    position: relative;
    padding-bottom: 40px;

    .swiper-pagination {
      position: absolute;

      .swiper-pagination-bullet-active {
        background-color: #003551;
      }
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      color: #003551;
      font-weight: 700;
      font-size: 20px;
      padding: 10px;
      border-radius: 10px;
      box-sizing: border-box;
      background-color: rgba(255, 255, 255, 0.7);
      box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    }

    @media screen and (max-width: 600px) {
      padding-bottom: 30px;

      .swiper-button-prev,
      .swiper-button-next {
        display: none;
      }
    }
  }
`;

export const CarouselItemContainer = styled.div`
  width: 100%;
`;

export const ThumbnailImage = styled.div`
  width: 50%;
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 20px;
  cursor: pointer;

  span {
    transition: transform 0.3s ease;
  }

  div,
  span {
    position: unset !important;
  }

  &:hover span {
    transform: scale(1.1);
  }

  .image {
    object-fit: cover !important;
    width: 400px !important;
    height: 350px !important;
    position: relative !important;
    width: unset !important;
  }

  @media screen and (max-width: 600px) {
    width: 200px;
    height: 125px;
    margin-right: 10px;
    border-radius: 10px;

    .image {
      width: 200px !important;
      height: 125px !important;
      width: unset !important;
    }
  }
`;

export const CardContainer = styled.a`
  display: flex;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  width: 50%;
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
  font-size: 16px;
  color: ${(props) =>
    (props.blogType === 'video' && '#ff000f') ||
    (props.blogType === 'journal' && '#00B2AB') ||
    (props.blogType === 'article' && '#176DD4')};
  background-color: ${(props) =>
    (props.blogType === 'video' && 'rgba(238, 0, 95, 0.3)') ||
    (props.blogType === 'journal' && 'rgba(0, 205, 174, 0.3)') ||
    (props.blogType === 'article' && 'rgba(0, 152, 236, 0.3)')};
  padding: 4px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    padding: 2px 7px;
    font-size: 8px;
  }
`;

export const Title = styled.h3`
  font-size: 34px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #5b5b5b;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 2;

  @media screen and (max-width: 600px) {
    font-size: 8px;
    -webkit-line-clamp: 2;
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
    width: 18px;
    height: 18px;
    margin-right: 5px;

    .image {
      width: 18px !important;
      height: 18px !important;
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
    font-size: 8px;
  }
`;

export const CreatedAt = styled.div`
  font-size: 10px;
  color: #5b5b5b;

  @media screen and (max-width: 600px) {
    font-size: 6px;
  }
`;
