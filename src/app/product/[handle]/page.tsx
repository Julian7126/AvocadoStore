
import { ProductView } from "@/components/product/ProductView"
import { getProducts } from "@/services/shopify"
import { redirect } from "next/navigation"


interface ProductsPageProps {
    searchParams:{
        
        id: string
    } 
}


export async function generateMetadata({searchParams}:ProductsPageProps) {
    const id = searchParams?.id
    const products = await getProducts(id)
    const product = products[0]

    return{
        title:product.title,
        desciption: product.description,
        keywords: product.tags,
        openGraph: {
         images:[product.image]   
        },

    }
}


export default async function ProductPage({searchParams}: ProductsPageProps) {
const id = searchParams?.id
const products = await getProducts(id)
const product = products[0]

if(!id){
    redirect('/store')
}
    return (
        <ProductView product={product} />
    )
}