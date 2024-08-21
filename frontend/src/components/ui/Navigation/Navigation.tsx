'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface Links {
  id: number;
  href: string;
  label: string;
}

const links: Links[] = [
  {
    id: 1,
    href: '/adverts',
    label: 'Доска объявлений',
  },
  {
    id: 2,
    href: '/service',
    label: 'Сервисный центр',
  },
  {
    id: 3,
    href: '/store',
    label: 'Интернет-магазин Dily.ua',
  },
  {
    id: 4,
    href: '/blog',
    label: 'Блог',
  },
  {
    id: 5,
    href: '/contacts',
    label: 'Контакты',
  },
];
const Navigation: React.FC = () => {
  const location: string = usePathname();
  return (
    <nav className="flex-1 ml-3">
      <ul className="flex gap-2">
        {links.map((el) => (
          <li key={el.id}>
            <Link
              href={el.href}
              className={`${
                location.includes(el.href)
                  ? 'border-b-2 py-6 bg-opacity-20 font-semibold border-solid border-green-600 bg-bright-green'
                  : 'text-black'
              } px-3 hover:text-[15px] transition-all`}
            >
              {el.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
