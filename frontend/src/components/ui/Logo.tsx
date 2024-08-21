import React from 'react';

interface LogoProps {
    color: string;
    width?: number;
    height?: number;
    [key: string]: any;
}

const Logo: React.FC<LogoProps> = ({color, width = 150, height = 96, ...props}) => {
    const getColor = (color: string): string | undefined => {
        if (color === 'green') {
            return '#00C65E';
        }
        if (color === 'white') {
            return '#fff';
        }
    };
    return (
        <>
            <svg {...props}
                 width={width}
                 height={height}
                 viewBox="0 0 150 63"
                 xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.5 18.2429H15.1677V51.7099H21.4728C35.6206 51.7099 42.6918 44.836 42.6863 31.088C42.6863 17.621 36.1212 10.8899 22.991 10.8949H20.3423V0L22.2361 0C33.53 0 42.3046 2.71016 48.56 8.13049C54.8153 13.5508 57.9402 21.0974 57.9347 30.7702C57.9347 41.0688 54.6964 48.953 48.2198 54.4226C41.7432 59.8922 32.3685 62.6442 20.0957 62.6787H0.5V18.2429Z"
                    fill={getColor(color)}
                />
                <path d="M15.176 0H0.5V13.0753H15.176V0Z" fill={getColor(color)}/>
                <path
                    d="M71.9651 26.3898H66.9361V44.6177H71.9651V26.3898ZM72.3282 21.1975C72.3282 20.3623 72.0559 19.6724 71.5294 19.1641C70.9847 18.6557 70.2585 18.4016 69.3508 18.4016C68.5156 18.4016 67.8439 18.6557 67.3355 19.1641C66.8272 19.6724 66.573 20.3623 66.573 21.1975C66.573 22.0326 66.809 22.7043 67.3174 23.2127C67.8257 23.721 68.4975 23.9752 69.3508 23.9752C70.2585 23.9752 70.9847 23.721 71.5294 23.2127C72.0559 22.7043 72.3282 22.0326 72.3282 21.1975ZM82.2047 18.5831H77.1757V44.6177H82.2047V18.5831ZM91.5001 45.7251C90.901 47.1049 89.848 47.7767 88.3411 47.7767C87.5968 47.7767 86.9795 47.6678 86.4893 47.4136V51.8616L86.8524 51.9887C87.1066 52.0976 87.4878 52.1884 88.0325 52.2792C88.559 52.3881 89.1036 52.4244 89.6483 52.4244C92.6984 52.4244 95.0404 50.1913 96.7107 45.7251L103.955 26.3898H98.7622L94.4776 38.4812L90.2111 26.3898H85.0006L92.0629 44.4361L91.5001 45.7251ZM103.737 42.203C103.737 42.9474 104.027 43.601 104.608 44.1456C105.189 44.7085 105.879 44.9808 106.714"
                    fill={getColor(color)}
                />
            </svg>
        </>
    );
};
export default Logo;
