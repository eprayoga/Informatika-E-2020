/* eslint-disable indent */
import styled, { css } from 'styled-components';

export const NavbarElement = styled.div`
  height: 100px;
  width: 100%;
  padding: 20px;
  background-color: #003551;
`;

export const Navbrand = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-left: 10px;
    color: #003551;
    letter-spacing: 1.5px;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;

export const NavMenu = styled.div`
  display: block;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
`;

interface NavItemProps {
  isActive?: boolean;
}
export const NavItem = styled.li<NavItemProps>`
  margin: 0 20px;
  position: relative;

  a {
    font-size: 18px;
    text-decoration: none;
    color: ${(props) => (props.isActive ? '#003551' : '#5e5e5e')};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.isActive ? '70%' : '0')};
    transition: width 0.5s ease;
    height: 2px;
    background-color: #003551;
  }

  &:hover::after {
    width: 70%;
  }

  @media screen and (max-width: 1024px) {
    &::after {
      display: none;
    }
  }
`;

export const SiginButton = styled.a`
  cursor: pointer;
  padding: 8px 20px;
  margin-left: 20px;
  box-sizing: border-box;
  color: #fff;
  border-radius: 10px;
  background-color: #003551;
  filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #002437;
  }
`;

export const Bar = styled.div`
  display: none;
  width: 25px;
  height: 3px;
  margin: 2.5px 0;
  transition: all 0.3s ease-in-out;
  background-color: #003551;

  &:nth-child(1) {
    width: 20px;
  }

  &:nth-child(2) {
    width: 18px;
  }
`;

export const NavbarToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  cursor: pointer;
`;

interface NavbarContainerTypes {
  scroll: boolean;
  active?: boolean;
}
export const NavbarContainer = styled.div<NavbarContainerTypes>`
  position: ${(props) => (props.scroll ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-radius: ${(props) => (props.scroll ? '0' : '20px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  z-index: 99;

  @media screen and (max-width: 1024px) {
    overflow: ${(props) => (props.active ? 'visible' : 'hidden')};
    border-radius: ${(props) =>
      (props.active && !props.scroll && '20px 20px 0 0') ||
      (props.scroll === true && '0')};

    ${Bar} {
      display: block;

      ${(props) =>
        props.active &&
        css`
          &:nth-child(2) {
            opacity: 0;
          }

          &:nth-child(1) {
            width: 25px;
            transform: translateY(8px) rotate(45deg);
          }

          &:nth-child(3) {
            width: 25px;
            transform: translateY(-8px) rotate(-45deg);
          }
        `}
    }

    ${NavMenu} {
      left: 0;
      width: 100%;
      height: ${(props) => (props.active ? '275px' : '0px')};
      overflow: hidden;
      background-color: #fff;
      padding: 20px;
      box-sizing: border-box;
      position: absolute;
      top: 60px;
      border-radius: ${(props) => (props.scroll ? '0' : '0 0 20px 20px')};
      filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
      transition: background-color 0.3s ease;
      transition: height 0.5s ease;

      ${NavList} {
        flex-direction: column;
        align-items: flex-start;
        padding: 0 20px;

        ${NavItem} {
          margin: 0;
          margin-bottom: 20px;
        }

        ${SiginButton} {
          margin-left: 0;
        }
      }
    }
  }
`;
