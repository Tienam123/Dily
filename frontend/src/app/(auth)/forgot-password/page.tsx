import React from 'react';

const Page: React.FC = () => {
  return (
    <>
      <h3 className="font-bold text-[32px] mb-8">Забыли пароль?</h3>
      <p className="mt-6">
        На ваш E-Mail будет высланы инструкции по восстановлению пароля
      </p>
      <form className="flex flex-col items-center justify-center w-1/3">
        <label htmlFor="email" className="w-full mt-6">
          E-Mail
        </label>
        <input
          id="email"
          placeholder="name@inbox.ua"
          type="text"
          className="border border-solid border-light-grey-2 rounded p-2 w-full mt-1 focus:outline focus:outline-3 focus:outline-green-500 focus:border-none"
        />

        <button
          className="mt-8 bg-bright-green py-2 px-3 text-white rounded w-full"
          type="submit"
        >
          Отправить
        </button>
      </form>
    </>
  );
};
export default Page;
