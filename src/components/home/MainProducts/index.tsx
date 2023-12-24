import Image from "next/image";
import styles from "./MainProducts.module.css";
import { getProducts } from "@/services/shopify";




const MainProducts = async () => {

    const products = await getProducts()

    console.log(products)

    return (
        <section className={styles.MainProducts}>
            <div className="flex gap-5 justify-center">

                <h3 className="text-purple-400">✨ New
                </h3>
                <h3>Products Released ✨ </h3>

            </div>
            <br />

            <div className={styles.MainProducts__grid}>
                {products?.map((product) => {
                    const imageSrc = product.images[0].src;
                    return (
                        <article key={product.id}>
                            <p>{product.title}</p>
                            <Image src={imageSrc} fill alt={product.title} loading="eager" />
                        </article>
                    )
                })}
            </div>
        </section>

    )
}

export default MainProducts