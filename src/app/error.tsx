"use client"


import Image from "next/image"
import styles from "../sass/global-error.module.sass"


export default function GlobalError({ reset }: ErrorPageProps) {

    return (
        <main className={styles.Error}>


            <h1 className={styles.Error__title}>
                Ha Ocurrido un Error
            </h1>

            <Image src={"/error.png"} width={500} height={500} alt={"error"} />
            <p className={styles.Error__message}>No te sientas mal y vuelvelo a intentar </p>

            <button className={styles.Error__button}onClick={reset}> Volver a intentar </button>
        </main>
    )

}
