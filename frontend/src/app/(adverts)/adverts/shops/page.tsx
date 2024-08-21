import Navigation from "@/components/Web/Adverts/Navigation/Navigation";
import React from "react";
import type {Metadata} from "next";

export interface PageProps {

}
export const metadata: Metadata = {
    title: 'Dily | Магазины',
};

const Page = ({}) => {
    return (
        <>
            <Navigation/>

        </>
    );
};

export default Page;