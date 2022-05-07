/* eslint-disable indent */
import styled from 'styled-components';

interface ButtonContainerTypes {
  btnOutline?: boolean;
  small?: boolean;
}
export const ButtonContainer = styled.button<ButtonContainerTypes>`
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  border: ${(props) =>
    props.btnOutline ? '3px solid #003551' : '3px solid transparent'};
  border-width: ${(props) => (props.small ? '2px' : '')};
  background-color: ${(props) => (props.btnOutline ? '#fff' : ' #003551')};
  color: ${(props) => (props.btnOutline ? '#003551' : '#fff')};
  border-radius: 10px;
  padding: ${(props) => (props.small ? '0.15rem 1.5rem' : '0.5rem 1.8rem')};
  font-size: ${(props) => (props.small ? '0,7rem' : '1.3rem')};
  font-weight: 600;
  transition: color 0.3s ease, background-color 0.3s ease;
  position: relative;

  &:hover {
    color: ${(props) => (props.btnOutline ? '#fff' : '')};
    background-color: ${(props) => (props.btnOutline ? '#003551' : '#002437')};
  }
`;

export const InstagramContainer = styled.a`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  padding: 12px;
  transition: background-color 0.3s ease;

  img {
    width: 100%;
    filter: invert(35%) sepia(57%) saturate(6703%) hue-rotate(324deg)
      brightness(94%) contrast(88%);
  }

  &:hover {
    background: #f09433;
    background: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );

    img {
      filter: invert(99%) sepia(100%) saturate(2%) hue-rotate(321deg)
        brightness(105%) contrast(100%);
    }
  }
`;

export const YoutubeContainer = styled.a`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  padding: 12px;
  transition: background-color 0.3s ease;

  img {
    width: 100%;
    filter: invert(18%) sepia(93%) saturate(6838%) hue-rotate(4deg)
      brightness(96%) contrast(122%);
  }

  &:hover {
    background-color: #ff0000;

    img {
      filter: invert(99%) sepia(100%) saturate(2%) hue-rotate(321deg)
        brightness(105%) contrast(100%);
    }
  }
`;
