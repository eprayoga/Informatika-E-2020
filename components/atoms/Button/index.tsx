import Image from 'next/image';
import React from 'react';
import instagramIcon from '../../../public/assets/icon/instagram-icon.svg';
import youtubeIcon from '../../../public/assets/icon/youtube-icon.svg';
import {
  ButtonContainer,
  InstagramContainer,
  YoutubeContainer,
} from './ButtonElements';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  small?: boolean;
  btnOutline?: boolean;
}
const Button = (props: ButtonProps) => {
  const { children, onClick, small, btnOutline } = props;

  return (
    <ButtonContainer onClick={onClick} small={small} btnOutline={btnOutline}>
      {children}
    </ButtonContainer>
  );
};

interface SocialMediaButtonProps {
  href?: string;
}
export const InstagramButton = (props: SocialMediaButtonProps) => {
  const { href = '/' } = props;
  return (
    <InstagramContainer href={href} target="_blank">
      <Image
        src={instagramIcon}
        width="100%"
        height="100%"
        alt="INSTAGRAM ICON"
      />
    </InstagramContainer>
  );
};

export const YoutubeButton = (props: SocialMediaButtonProps) => {
  const { href = '/' } = props;
  return (
    <YoutubeContainer href={href} target="_blank">
      <Image
        src={youtubeIcon}
        width="100%"
        height="100%"
        alt="INSTAGRAM ICON"
      />
    </YoutubeContainer>
  );
};

export default Button;
