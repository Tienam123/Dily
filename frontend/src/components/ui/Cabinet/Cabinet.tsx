'use client';
import React from 'react';
import { IoMdPerson } from 'react-icons/io';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Cabinet: React.FC = () => {
  const session = useSession();
  console.log(session);
  return (
    <div className="flex items-center ml-3">
      {session?.data && (
        <>
          <Link href="/profile">{session.data.user?.name}</Link>
        </>
      )}
      {session?.data ? (
        <>
          <Link
            className="bg-green-600 flex items-center text-white py-2 px-3 rounded"
            href="#"
            onClick={() =>
              signOut({
                callbackUrl: '/adverts',
              })
            }
          >
            <p>Выход</p>
          </Link>
        </>
      ) : (
        <>
          <p className="flex items-center">
            <IoMdPerson size={20} color="green" className="mr-1" />
            <Link href="/login">Вход/Регистрация</Link>
          </p>
        </>
      )}
    </div>
  );
};
export default Cabinet;
