import React from 'react';

const Page: React.FC = () => {
  return (
    <>
      <h3 className="font-bold text-[32px] mb-8">Письмо отправлено</h3>
      <p className="mt-6">
        На ваш E-Mail отправлены инструкции по восстановлению пароля
      </p>
      <ul className="flex gap-2 mt-2">
        <li>
          <a href="/" className="text-blue-700 hover:text-blue-800">
            Главная
          </a>
        </li>
        <li>
          <a href="/login">Вход</a>
        </li>
      </ul>
    </>
  );
};
export default Page;
