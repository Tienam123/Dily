import React from 'react';

export enum Status {
  Default = 'default',
  Disabled = 'disabled',
}

export type Props = {
  children: React.ReactNode;
  status?: Status;
  rounded: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
