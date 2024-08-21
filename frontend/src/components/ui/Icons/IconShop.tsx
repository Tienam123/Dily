import React from 'react';

export interface IconShopProps {
  color?: string;
  fill?: string;
  width?: number;
  height?: number;
}

const IconShop: React.FC<IconShopProps> = ({
  color = '#fff',
  fill = '#00C65E',
  width = 26,
  height = 26,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4759 22.6586C17.8203 23.1925 18.3715 23.7999 18.8423 24.2787C19.1437 24.5853 18.9295 25.1287 18.4995 25.1287H8.04365C7.61365 25.1287 7.39942 24.5853 7.70087 24.2787C8.1716 23.7999 8.72287 23.1925 9.06728 22.6586C9.76638 21.5747 10.004 19.8767 10.004 19.8767H16.5391C16.5391 19.8767 16.7768 21.5747 17.4759 22.6586Z"
        fill={fill}
        stroke={color}
        strokeWidth="1.02941"
      />
      <mask id="path-2-inside-1_1658_49724" fill="white">
        <rect
          x="2.89551"
          y="4.68042"
          width="20.751"
          height="16.5044"
          rx="0.936552"
        />
      </mask>
      <rect
        x="2.89551"
        y="4.68042"
        width="20.751"
        height="16.5044"
        rx="0.936552"
        fill={fill}
        stroke={color}
        strokeWidth="2.05882"
        mask="url(#path-2-inside-1_1658_49724)"
      />
      <path
        d="M6.42217 18.8642C5.14586 18.5438 4.76904 17.1506 4.76904 15.9478C4.76904 11.5872 6.11018 11.9541 6.06561 9.64143C6.00484 6.53467 7.5121 6.25604 8.06719 6.39071C14.3637 7.97428 17.9049 6.8551 17.9049 6.8551C20.336 6.30712 15.4738 11.3597 17.9049 16.5144C19.2501 19.4215 8.5372 19.3936 6.42217 18.8642Z"
        fill={'#00C65E'}
      />
      <mask id="path-4-inside-2_1658_49724" fill="white">
        <rect
          x="2.89551"
          y="0.863281"
          width="20.751"
          height="4.44311"
          rx="0.936552"
        />
      </mask>
      <rect
        x="2.89551"
        y="0.863281"
        width="20.751"
        height="4.44311"
        rx="0.936552"
        fill={fill}
        stroke={color}
        strokeWidth="2.05882"
        mask="url(#path-4-inside-2_1658_49724)"
      />
      <path
        d="M3.1761 4.5918C3.23204 4.41714 3.39443 4.29864 3.57784 4.29864H22.962C23.1454 4.29864 23.3078 4.41714 23.3637 4.5918L24.8886 9.35236C24.9758 9.62459 24.7727 9.90289 24.4869 9.90289H2.05295C1.7671 9.90289 1.56401 9.62459 1.65121 9.35236L3.1761 4.5918L2.68592 4.43479L3.1761 4.5918Z"
        fill={fill}
        stroke={color}
        strokeWidth="1.02941"
      />
      <rect
        x="12.7383"
        y="3.92578"
        width="1.06244"
        height="6.12904"
        fill={color}
      />
      <path
        d="M18.3521 3.92578H19.4145L20.4769 10.0548H19.4145L18.3521 3.92578Z"
        fill={color}
      />
      <path
        d="M8.18555 3.92578H7.12311L6.06067 10.0548H7.12311L8.18555 3.92578Z"
        fill={color}
      />
    </svg>
  );
};

export default IconShop;
