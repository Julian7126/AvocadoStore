
import { ProductView } from "@/components/product/ProductView"
import { getProducts } from "@/services/shopify"


interface ProductsPageProps {
    searchParams:{
        
        id: string
    } 
}


export default async function ProductPage({searchParams}: ProductsPageProps) {
const id = searchParams?.id
const products = await getProducts(id)
const product = products[0]
    return (
        <ProductView product={product} />
    )
}