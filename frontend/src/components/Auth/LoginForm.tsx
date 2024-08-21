'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import PasswordInput from '@/components/Auth/PasswordInput';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;

export interface LoginFormProps {}

const LoginForm = () => {
  const [error, setError] = useState('');
  const router = useRouter();
  const session = useSession();
  console.log(session.data);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      const res = await signIn('credentials', {
        ...values,
        redirect: false,
      });
      console.log(res);
    },
  });
  return (
    <>
      {error.length > 0 && error}
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center justify-center w-1/3"
      >
        <label htmlFor="email" className="w-full mt-6">
          E-Mail
          <sup className="text-green-600 text-[15px]">*</sup>
        </label>
        <input
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          type="text"
          className="border border-solid border-light-grey-2 rounded p-2 w-full mt-1 focus:outline focus:outline-3 focus:outline-green-500 focus:border-none"
        />

        <PasswordInput
          label="Пароль"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <button
          className="mt-8 bg-bright-green py-2 px-3 text-white rounded w-full"
          type="submit"
        >
          Войти
        </button>
        <div className="flex items-center justify-between w-full">
          <Link
            href="/forgot-password"
            className="self-start mt-5 font-semibold"
          >
            Забыли пароль?
          </Link>
          <Link className="self-end mt-3 font-semibold" href="/register">
            Зарегистрироваться
          </Link>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
