'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Field, useFormik } from 'formik';
import PasswordInput from '@/components/Auth/PasswordInput';
import { FiAlertTriangle } from 'react-icons/fi';
import { BsCheck2All, BsCheckCircleFill } from 'react-icons/bs';
import facebook from '@/assets/facebook.png';
import google from '@/assets/google.png';
import github from '@/assets/git.png';
import Image from 'next/image';
import { array } from 'yup';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import OAuthAutorization from '@/components/Auth/OAuthAutorization';

export interface RegisterFormProps {}

const RegisterForm = () => {
  const [verifyMessage, setVerifyMessage] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    onSubmit: async (values) => {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok) {
        const arr: string[] = [];
        Object.keys(result).forEach((el) => {
          arr.push(...result[el]);
        });
        setVerifyMessage('');
        setErrors([...arr]);
      } else {
        setErrors([]);
        setVerifyMessage(result.message);
        formik.resetForm();
      }
    },
  });

  return (
    <>
      {verifyMessage.length > 0 && (
        <div className="bg-green-100 rounded-2xl p-5 flex gap-3 items-center">
          <BsCheck2All color={'green'} />
          <p className="text-green-500 text-[12px] font-semibold">
            {verifyMessage}
          </p>
        </div>
      )}
      {errors.length > 0 && (
        <div className="bg-red-50 rounded-2xl py-5 px-5 w-1/3">
          <ul className="text-red-500 text-[12px] font-semibold">
            {errors.map((el, index) => (
              <li className=" flex gap-3 items-center mt-2" key={index}>
                <FiAlertTriangle color={'red'} />
                {el}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center justify-center w-1/3"
      >
        <label htmlFor="email" className="w-full mt-6">
          E-Mail <sup className="text-green-600 text-[15px]">*</sup>
        </label>
        <input
          onChange={formik.handleChange}
          value={formik.values.email}
          id="email"
          type="email"
          name="email"
          className="border border-solid  border-light-grey-2 rounded p-2 w-full mt-1 focus:outline focus:outline-3 focus:outline-green-500 focus:border-none"
        />

        <label htmlFor="name" className="w-full mt-6">
          Имя <sup className="text-green-600 text-[15px]">*</sup>
        </label>
        <input
          onChange={formik.handleChange}
          value={formik.values.name}
          id="name"
          name="name"
          type="text"
          className="border border-solid  border-light-grey-2 rounded p-2 w-full mt-1 focus:outline focus:outline-3 focus:outline-green-500 focus:border-none"
        />

        <label htmlFor="surname" className="w-full mt-6">
          Фамилия<sup className="text-green-600 text-[15px]">*</sup>
        </label>
        <input
          onChange={formik.handleChange}
          value={formik.values.surname}
          id="surname"
          name="surname"
          type="text"
          className="border border-solid  border-light-grey-2 rounded p-2 w-full mt-1 focus:outline focus:outline-3 focus:outline-green-500 focus:border-none"
        />
        <PasswordInput
          label="Пароль"
          type={'password'}
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <PasswordInput
          label="Подтвердите пароль"
          type={'password'}
          name="password_confirmation"
          onChange={formik.handleChange}
          value={formik.values.password_confirmation}
        />
        <button
          className="mt-8 bg-bright-green py-2 px-3 text-white rounded w-full"
          type="submit"
        >
          Продолжить
        </button>
        <Link className="self-end mt-3 font-semibold" href="/login">
          Уже есть аккаунт?
        </Link>
      </form>
    </>
  );
};

export default RegisterForm;
