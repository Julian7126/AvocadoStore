
interface ErrorPageProps {
    error: Error;
    reset: () => void;
}


type ProductType = {
    
    id: string,
    title: string,
    description: string,
    price: number,
    quantity: number,
    handle: string,
    image: string,
    tags: string,

    
}