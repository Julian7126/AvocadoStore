import { ProductsWrapper } from "@/components/Store/ProductsWrapper";
import { getProducts } from "@/services/shopify";
import { getCollections, getCollectionsProducts } from "@/services/shopify/collections";





interface CategoriesProps {

    params: {

        categories: string[];
        searchParams: string;

    }
}



export default async function Category(props: CategoriesProps) {
    const { categories } = props.params
    let products = []
    const collections = await getCollections()
    
    if (categories?.length > 0) {
      const selectedCollectionId = collections.find((collection) => collection.handle === categories[0]).id
      products = await getCollectionsProducts(selectedCollectionId)
    }else {
      products = await getProducts()
    }
  
    console.log('products', products)
  
    return (
      <ProductsWrapper products={products} />
    )
  }
