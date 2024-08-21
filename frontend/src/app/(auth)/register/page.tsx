import React from 'react';
import avatar from '@/assets/avatar.jpg';
import Image from 'next/image';
import RegisterForm from '@/components/Auth/RegisterForm';
import OAuthAutorization from '@/components/Auth/OAuthAutorization';
const Page: React.FC = () => {
  return (
    <>
      <Image src={avatar} className="w-28 h-28 rounded-full" alt="" />
      <h3 className="font-bold text-[32px]  my-8">Вход и регистрация</h3>
      <RegisterForm />
      <OAuthAutorization />
    </>
  );
};
export default Page;
