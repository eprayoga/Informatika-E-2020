import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/assets/img/footer-logo.png';
import {
  Content,
  ContentLogo,
  ContentMenus,
  Copyright,
  FooterContainer,
  LogoText,
  Menu,
  MenuHeader,
  MenuList,
} from './FooterElemets';

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <ContentLogo>
          <Link href="/">
            <a>
              <Image src={logo} alt="LOGO" width={70} height={70} />
            </a>
          </Link>
          <LogoText>TEKNIK INFORMATIKA E 2020</LogoText>
        </ContentLogo>
        <ContentMenus>
          <Menu>
            <MenuHeader>Institut Teknologi Garut</MenuHeader>
            <MenuList>
              <a
                target="_blank"
                href="https://maps.google.com/?q=Institut Teknologi Garut"
              >
                Jl. Mayor Syamsu No. 1, Jayaraga, Kec. Tarogong Kidul, Kabupaten
                Garut, Jawa Barat, INDONESIA 44153
              </a>
            </MenuList>
            <MenuList>
              Email:
              <a target="_blank" href="mailto: info@itg.ac.id">
                {' '}
                info@itg.ac.id
              </a>
            </MenuList>
            <MenuList>
              Telp.
              <a href="tel: 0262-232772"> 0262-232772</a>
            </MenuList>
          </Menu>
          <Menu>
            <MenuHeader>Connect</MenuHeader>
            <MenuList>
              <a target="_blank" href="mailto: teknikinformatikae@gmail.com">
                {' '}
                teknikinformatikae@gmail.com
              </a>
            </MenuList>
          </Menu>
        </ContentMenus>
        <Copyright>
          Copyright &copy; 2022 - Teknik Informatika E ITG 2020. All Rights
          Reserved
        </Copyright>
      </Content>
    </FooterContainer>
  );
};

export default Footer;
