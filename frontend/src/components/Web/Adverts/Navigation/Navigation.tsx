'use client';
import IconAdvirements from "@/components/ui/Icons/IconAdvirements";
import Link from "next/link";
import React from "react";
import IconShop from "@/components/ui/Icons/IconShop";
import IconHelp from "@/components/ui/Icons/IconHelp";
import {usePathname} from "next/navigation";
import Button from "@/components/ui/Button/Button";
import {FaPlus} from "react-icons/fa";

export interface NavigationProps {

}

const Navigation = ({}) => {
    const currentPath = usePathname();
    console.log(currentPath)
    const navLinks = [
        {
            id: 1,
            label: 'Объявления',
            href: '/adverts/announcements',
            logo: <IconAdvirements color={currentPath==='/adverts/announcements'? '#00c65e':'#000'}
                                   cashColor={currentPath==='/adverts/announcements'? '#00c65e':'#000'}/>
        },
        {
            id: 2,
            label: 'Магазины',
            href: '/adverts/shops',
            logo: <IconShop color={currentPath==='/adverts/shops'? '#00c65e':'#000'}
                                fill='#fff'/>
        },
        {
            id: 3,
            label: 'Пожертвования',
            href: '/adverts/helps',
            logo: <IconHelp color={currentPath==='/adverts/helps'? '#00c65e':'#000'} fill='#fff' heart='#00C65E'/>
        }
    ]
    return (
        <div className='flex items-center justify-between py-2 px-3 bg-light-grey'>
            <div className='flex items-center'>
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd" clipRule="evenodd"
                        d="M0.000270024 1.87812C0.000270024 1.16015 0.5823 0.578125 1.30027 0.578125H12.7003C13.4182 0.578125 14.0003 1.16015 14.0003 1.87812C14.0003 2.59609 13.4182 3.17812 12.7003 3.17812H1.30027C0.582299 3.17812 0.000270024 2.59609 0.000270024 1.87812ZM0 8.07539C0 7.35742 0.58203 6.77539 1.3 6.77539H12.7C13.418 6.77539 14 7.35742 14 8.07539C14 8.79336 13.418 9.37539 12.7 9.37539H1.3C0.582029 9.37539 0 8.79336 0 8.07539ZM1.3 12.9727C0.58203 12.9727 0 13.5547 0 14.2727C0 14.9906 0.58203 15.5727 1.3 15.5727H6.7C7.41797 15.5727 8 14.9906 8 14.2727C8 13.5547 7.41797 12.9727 6.7 12.9727H1.3Z"
                        fill="#363A45"
                    />
                </svg>
                <ul className='flex items-center gap-3 ml-10'>
                    {navLinks.map(link => (<li key={link.id}>

                        <Link href={link.href} className='flex items-center gap-1'>
                            <span>{link.logo}</span>
                            <span
                                className={currentPath === link.href ? 'text-green-500 font-semibold' : ''}>{link.label}</span>
                        </Link>
                    </li>))}
                </ul>
            </div>
                <div className="flex">
                    <div
                        className="flex w-10 items-center justify-center rounded-tl-2xl rounded-bl-2xl border-r border-gray-200 bg-white p-5">
                        <svg viewBox="0 0 20 20" aria-hidden="true"
                             className="pointer-events-none absolute w-5 fill-gray-500 transition">
                            <path
                                d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                        </svg>
                    </div>
                    <input type="text" className="pl-2 placeholder-gray-400 focus-within:outline-none outline-0" placeholder="Я хочу купить"
                           id=""/>
                    <input type="button" value="Найти"
                           className="bg-green-600 p-2 rounded-tr-2xl rounded-br-2xl text-white font-semibold hover:bg-green-700 transition-all"/>
                </div>
            <div>
                <Button rounded={2} className='py-2 px-5 bg-green-600'>
                    Подать обьявление
                    <span className='bg-white rounded-full p-1'><FaPlus color='green'/></span>
                </Button>
            </div>
        </div>
    );
};

export default Navigation;