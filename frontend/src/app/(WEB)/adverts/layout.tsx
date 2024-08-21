import type {Metadata} from 'next';
import React from 'react';
import Layout from '@/components/ui/Layout/Layout';
import Navigation from "@/components/Web/Navigation/Navigation";
import Links from "@/components/Web/Adverts/Links";
import SearchBar from "@/components/Web/SearchBar";
import Button from "@/components/ui/Button/Button";
import {FaPlus} from "react-icons/fa";

export const metadata: Metadata = {
    title: 'Dily | Main Page',
    description:
        'Dily - ваш надежный помощник в поиске и размещении объявлений. Здесь вы найдете широкий выбор товаров, услуг и вакансий от надежных продавцов и компаний. Легко и быстро размещайте свои объявления и находите то, что вам нужно. Начните прямо сейчас и откройте для себя новые возможности с Dily!',
};

export default function HomeLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return <Layout>
        <Navigation>
            <Links/>
            <SearchBar />
            <Button rounded={2} className='py-2 px-5 bg-green-600'>
                Подать обьявление
                <span className='bg-white rounded-full p-1'><FaPlus color='green'/></span>
            </Button>
        </Navigation>
        {children}</Layout>;
}
