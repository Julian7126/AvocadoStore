import { ShopifyUrls } from "./urls"
import { env } from "../../config/env"

ShopifyUrls

export const getCollections = async () => {

    try {


        const res = await fetch(`${ShopifyUrls.collections.all}`, {
            headers: new Headers({
                "X-Shopify-Access-Token": env.SHOPIFY_TOKEN ,
            })
        })
        
        const {smart_collections} = await res.json()
        const transformedCollections = smart_collections.map((collection: any) => {
           
            return {
                id: collection.id,
                title: collection.title,
                handle: collection.handle,
            
            }
        })

           

            return transformedCollections
      

    } catch (err) {
        console.error("Error fetching products:", err)
    }
}



export const getCollectionsProducts = async (id: string) => {
    
        try {
            const response= await fetch(`${ShopifyUrls.collections.products(id)}`, {
                headers: new Headers({
                    "X-Shopify-Access-Token": env.SHOPIFY_TOKEN ,
                })

            })

            const {products} = await response.json()
            return products 

        }catch(err) {
            console.error("Error fetching products:", err)
        }

}