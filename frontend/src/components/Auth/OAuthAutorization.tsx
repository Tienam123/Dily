'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import google from '@/assets/google.png';
import github from '@/assets/git.png';
import facebook from '@/assets/facebook.png';
import React from 'react';
import { useSearchParams } from 'next/navigation';

const OAuthAutorization = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/adverts';
  return (
    <>
      <ul className="flex gap-3 mt-5">
        <li>
          <button
            onClick={() => signIn('google', { callbackUrl })}
            type="button"
          >
            <Image src={google} className="w-10 rounded-full" alt="" />
          </button>
        </li>
        <li>
          <button
            onClick={() => signIn('github', { callbackUrl })}
            type="button"
          >
            <Image src={github} className="rounded-full w-10" alt="" />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => signIn('facebook', { callbackUrl })}
          >
            <Image src={facebook} className="w-10" alt="" />
          </button>
        </li>
      </ul>
    </>
  );
};
export default OAuthAutorization;
