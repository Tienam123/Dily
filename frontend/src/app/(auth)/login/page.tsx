import React from 'react';
import LoginForm from '@/components/Auth/LoginForm';
import OAuthAutorization from '@/components/Auth/OAuthAutorization';

const Page = () => {
  return (
    <>
      <LoginForm />
      <OAuthAutorization />
    </>
  );
};

export default Page;
