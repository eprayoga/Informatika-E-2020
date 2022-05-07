import Link from 'next/link';
import { NavItem as NavItemElement } from './NavbarElements';

interface NavItemProps {
  title: string;
  active?: boolean;
  href: string;
}
const NavItem = (props: NavItemProps) => {
  const { title, active, href = '/' } = props;
  return (
    <NavItemElement isActive={active}>
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </NavItemElement>
  );
};

export default NavItem;
