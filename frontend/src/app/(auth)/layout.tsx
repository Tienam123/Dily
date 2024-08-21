import React from 'react';
import Logo from '@/components/ui/Logo';
import IconAdvirements from '@/components/ui/Icons/IconAdvirements';
import IconAuction from '@/components/ui/Icons/IconAuction';
import IconMenuService from '@/components/ui/Icons/IconMenuService';
import IconShop from '@/components/ui/Icons/IconShop';
import IconHelp from '@/components/ui/Icons/IconHelp';

import Link from 'next/link';
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="w-5/12 h-screen bg-bright-green text-white p-10">
        <Link href="/">
          <Logo color="white" />
        </Link>
        <h2 className="text-[36px] font-bold tracking-tight mt-3">
          Супер доска объявлений
        </h2>
        <ul className="mt-10 text-[22px]">
          <li className="flex items-center gap-3 mb-3">
            <IconAdvirements width={25} />
            <span> Размещайте объявления бесплатно</span>
          </li>
          <li className="flex items-center gap-3 mb-3">
            <IconAuction width={25} />
            Продавайте на аукционе
          </li>
          <li className="flex items-center gap-3 mb-3">
            <IconMenuService width={25} />
            Ремонтируйте свою технику
          </li>
          <li className="flex items-center mb-3 gap-3">
            <IconShop width={25} />
            Откройте свой магазин
          </li>
          <li className="flex items-center gap-3">
            <IconHelp width={25} />
            Помогайте нуждающимся
          </li>
        </ul>
      </div>
      <div className="relative w-full">
        <span className="absolute top-[74px] left-[96px]">
          <svg
            width="46"
            height="28"
            viewBox="0 0 46 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.4196 5.16293C43.6045 4.88178 35.9331 -1.04861 29.8746 4.55171C23.8161 10.152 26.9884 22.3726 18.2448 25.4421C11.2499 27.8977 4.09734 25.325 1.39544 23.7318"
              stroke="#CCEFDB"
              strokeWidth="3"
            />
          </svg>
        </span>
        <span className="absolute top-[48px] right-[130px]">
          <svg
            width="61"
            height="49"
            viewBox="0 0 61 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.165507 3.12342C2.99083 3.33377 16.5853 -2.90263 23.7363 7.62453C30.8873 18.1517 21.8601 35.4081 33.928 43.0686C43.5823 49.1971 55.2265 47.8251 59.8418 46.373"
              stroke="#00C65E"
              strokeWidth="2"
            />
          </svg>
        </span>
        <span className="absolute top-1/2 left-[16px]">
          <svg
            width="73"
            height="37"
            viewBox="0 0 73 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.998846 5.88025C3.82164 5.55579 15.376 -2.15435 25.3168 5.50304C35.2576 13.1604 31.2545 29.4059 45.2034 33.7564C56.3626 37.2367 67.3699 34.0002 71.4787 31.9469"
              stroke="#FD9558"
              strokeWidth="3"
            />
          </svg>
        </span>
        <span className="absolute bottom-[75px] left-[77px]">
          <svg
            width="99"
            height="34"
            viewBox="0 0 99 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.39385 33.1926C3.89372 30.1831 7.76895 9.89584 25.3386 10.2852C42.9082 10.6746 55.0873 34.652 73.3713 27.2143C87.9985 21.2642 95.783 7.06742 97.8468 0.712807"
              stroke="#00C65E"
              strokeWidth="2"
            />
          </svg>
        </span>
        <span className="absolute bottom-[66px] right-[18px]">
          <svg
            width="57"
            height="24"
            viewBox="0 0 57 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.0395 9.46871C2.96683 8.48915 9.37515 -0.955447 18.2042 3.08919C27.0332 7.13382 27.9624 21.9661 38.8677 22.1959C47.592 22.3798 54.6501 16.8813 57.0887 14.109"
              stroke="#F89358"
              strokeWidth="3"
            />
          </svg>
        </span>
        <div className="flex flex-col h-screen overflow-y-auto items-center p-10">
          {children}
        </div>
      </div>
    </div>
  );
}
