import React from 'react';
import iconLocation from '@/assets/off.svg';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
const Location: React.FC = () => {
  return (
    <div className="flex items-center">
      <FaLocationArrow size={10} color={'green'} />
      <span className="text-gray-400 ml-3 mr-1">Днепр</span>
      <IoIosArrowDown />
    </div>
  );
};
export default Location;
