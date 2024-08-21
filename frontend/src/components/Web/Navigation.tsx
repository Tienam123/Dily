'use client';
import React from "react";
import Button from "@/components/ui/Button/Button";
import {FaPlus} from "react-icons/fa";

export interface NavigationProps {
children:React.ReactNode
}

const Navigation = ({children}:NavigationProps) => {


    return (
        <div className='flex items-center justify-between py-2 px-3 bg-light-grey'>
            {children}
        </div>
    );
};

export default Navigation;