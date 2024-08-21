import React from 'react';
import Navigation from '@/components/ui/Navigation/Navigation';
import Location from '@/components/ui/Location/Location';
import Cabinet from '@/components/ui/Cabinet/Cabinet';
import Logo from '@/components/ui/Logo';
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 border-b px-3 border-solid border-gray-300 flex justify-between items-center">
     <Link href='/' className='hover:scale-110 transition-all'>
         <Logo color="green" width={60} height={30} />
     </Link>
      <Navigation />
      <Location />
      <Cabinet />
    </header>
  );
};
export default Header;
