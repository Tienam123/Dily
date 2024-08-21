import Navigation from "@/components/Web/Navigation/Navigation";
import Button from "@/components/ui/Button/Button";
import SearchBar from "@/components/Web/SearchBar";

export interface ServicePageProps {

}

const ServicePage = ({}: ServicePageProps) => {
    return (
        <>
<Navigation>
    <SearchBar />
    <Button rounded={2}>
        Заказать ремонт
    </Button>
</Navigation>
        </>
    );
};


export default ServicePage;