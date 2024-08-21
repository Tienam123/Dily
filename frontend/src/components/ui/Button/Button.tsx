import style from './Button.module.scss';
import React from 'react';
import clsx from 'clsx';
import { Props, Status } from '@/components/ui/Button/ButtonType';

const Button: React.FC<Props> = ({
  children,
  status = Status.Default,
  rounded = 1,
  ...props
}) => {
  return (
    <>
      <button
        {...props}
        className={clsx(style.button, {
          'bg-green-600': status === Status.Default,
          'bg-gray-300': status === Status.Disabled,
          rounded: rounded === 1,
          'rounded-2xl': rounded === 2,
        })}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
