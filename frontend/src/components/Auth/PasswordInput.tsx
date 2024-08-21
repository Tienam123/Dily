import {FaEye} from "react-icons/fa";
import React, {useState} from "react";

export interface PasswordInputProps {
    type?: string;
    label?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string;
    name?: string;

    [key: string]: any
}

const PasswordInput: React.FC<PasswordInputProps> = ({
                                                         type, label, ...props
                                                     }) => {
        const [eyeStylesStatus, setEyeStylesStatus] = useState(false)
        const EyeStyles = {
            color: eyeStylesStatus ? '#00C65E' : '#DADCDC',
        }
        return (
            <>
                <label className="mt-6 w-full relative inline-block select-none">
                    {label}<sup className="text-green-600 text-[15px]">*</sup>
                    <span className='absolute top-1/2 right-3'>
                <FaEye size={18} onClick={() => setEyeStylesStatus(!eyeStylesStatus)} style={EyeStyles}/>
                </span>
                    <input
                        {...props}
                        autoComplete="off" // отключаем автозаполнение
                        type={eyeStylesStatus ? 'text' : 'password'}
                        className="border border-solid border-light-grey-2 rounded p-2 w-full mt-1 focus:outline focus:outline-3
                focus:outline-green-500 focus:border-none pr-10"
                    />
                </label>
            </>
        );
    }
;

export default PasswordInput;