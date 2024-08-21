import type { Metadata } from 'next';
import React from 'react';
import Layout from '@/components/ui/Layout/Layout';

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
  return <Layout>{children}</Layout>;
}
