import { ProductsWrapper } from "@/components/Store/ProductsWrapper";
import { getProducts } from "@/services/shopify";




interface CategoriesProps {

    params: {

        categories: string[];
        searchParams: string;

    }
}


export default async function Category( props: CategoriesProps) {

    const products = await getProducts();
    const {categories}= props.params;   

   

        return(
         <ProductsWrapper products={products}/>
        )

}
