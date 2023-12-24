import { ShopifyUrls } from "./urls"
import { env } from "../../config/env"

ShopifyUrls

export const getProducts = async () => {

    try {


        const res = await fetch(`${ShopifyUrls.products.all}`, {
            headers: new Headers({
                "X-Shopify-Access-Token": env.SHOPIFY_TOKEN ,
            })
        })
        
        const { products } = await res.json()
        console.log(products)

        return products

    } catch (err) {
        console.error("Error fetching products:", err)
    }
}
