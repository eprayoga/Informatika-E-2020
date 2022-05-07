import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '../../../public/assets/img/logo.svg';
import {
  Bar,
  NavbarContainer,
  NavbarElement,
  NavbarToggle,
  Navbrand,
  NavList,
  NavMenu,
  SiginButton,
} from './NavbarElements';
import NavItem from './NavItem';

interface NavbarProps {
  activeMenu?: string;
}
const Navbar = (props: NavbarProps) => {
  const { activeMenu } = props;
  const [onScroll, setOnScroll] = useState(false);
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    const scrollNavbar = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    };
    window.addEventListener('scroll', scrollNavbar);
    return () => {
      window.addEventListener('scroll', scrollNavbar);
    };
  }, []);

  return (
    <NavbarElement>
      <NavbarContainer scroll={onScroll} active={navActive}>
        <Link href="/" passHref>
          <Navbrand>
            <Image src={logo} alt="LOGO" />
            <h3>TEKNIK INFORMATIKA E</h3>
          </Navbrand>
        </Link>
        <NavbarToggle onClick={() => setNavActive(!navActive)}>
          <Bar />
          <Bar />
          <Bar />
        </NavbarToggle>
        <NavMenu>
          <NavList>
            <NavItem title="Home" href="/" active={activeMenu === 'home'} />
            <NavItem title="Blog" href="/blog" active={activeMenu === 'blog'} />
            <NavItem
              title="Gallery"
              href="/gallery"
              active={activeMenu === 'gallery'}
            />
            <NavItem
              title="Member"
              href="/member"
              active={activeMenu === 'member'}
            />
            <Link href="/">
              <SiginButton>Log In</SiginButton>
            </Link>
          </NavList>
        </NavMenu>
      </NavbarContainer>
    </NavbarElement>
  );
};

export default Navbar;
