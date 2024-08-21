import React from 'react';

interface IconAdvirementsProps {
  fill?: string;
  color?: string;
  width?: number;
  height?: number;
  cashColor?: string;
}

const IconAdvirements: React.FC<IconAdvirementsProps> = ({
  fill = 'inherit',
  color = 'white',
  cashColor = 'white',
}) => {
  return (
    <>
      <svg
        width="22"
        height="26"
        viewBox="0 0 22 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.28424"
          y="1.37799"
          width="19.5588"
          height="23.9706"
          rx="0.639284"
          fill={fill}
          stroke={color}
          strokeWidth="1.02941"
        />
        <path
          d="M13.5188 22.8005V21.6869H12.729V20.8848H13.5188V20.1109H12.729V19.1106H13.5188V16.0625H15.5458C16.4022 16.0625 17.0303 16.2355 17.43 16.5815C17.836 16.9213 18.039 17.4057 18.039 18.0348C18.039 18.4249 17.9502 18.7772 17.7726 19.0918C17.5949 19.4063 17.3126 19.6548 16.9256 19.8373C16.545 20.0197 16.0438 20.1109 15.4221 20.1109H14.7369V20.8848H16.2405V21.6869H14.7369V22.8005H13.5188ZM15.2888 19.1106C15.752 19.1106 16.1199 19.032 16.3927 18.8747C16.6655 18.7174 16.8019 18.45 16.8019 18.0726C16.8019 17.7328 16.6909 17.4812 16.4689 17.3176C16.2532 17.1477 15.9201 17.0628 15.4697 17.0628H14.7369V19.1106H15.2888Z"
          fill={cashColor}
        />
        <rect
          x="4.53223"
          y="4.83691"
          width="13.0623"
          height="1.57282"
          rx="0.78641"
          fill={color}
        />
        <rect
          x="4.53223"
          y="8.70654"
          width="13.0623"
          height="1.57282"
          rx="0.78641"
          fill={color}
        />
        <rect
          x="4.53223"
          y="12.5762"
          width="9.86658"
          height="1.57282"
          rx="0.78641"
          fill={color}
        />
        <rect
          x="4.53223"
          y="16.4465"
          width="6.94971"
          height="1.57282"
          rx="0.78641"
          fill={color}
        />
        <rect
          x="4.53223"
          y="20.3154"
          width="3.7079"
          height="1.57282"
          rx="0.78641"
          fill={color}
        />
      </svg>
    </>
  );
};
export default IconAdvirements;
