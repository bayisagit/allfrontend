'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Buttons from './Button';

const Header = () => {
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path
      ? 'text-blue-600 font-bold underline'
      : 'text-gray-800 hover:text-blue-500';

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <a className="text-xl font-semibold text-black" href='/'>My Website </a>
      <nav className="space-x-4">
        <Link href="/" className={linkClass('/')}>Home</Link>
        <Link href="/about" className={linkClass('/about')}>About</Link>
        <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
        <Link href="/" className={linkClass('/')}><Buttons/></Link>

      </nav>
    </header>
  );
};

export default Header;
