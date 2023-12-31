

import MainProducts from "../../components/home/MainProducts"
import { Metadata } from "next"


export const metadata: Metadata ={
  title: "Tienda Tech",
  description:"Welcome to Future World, the best place to find the coolest tech products.",
  keywords:[
    'Next.js',
    'eCommerce',
    'Tienda en línea',
    'Desarrollo web',
    'React.js',
    'Comercio electrónico',
    'Futurista',
    'Tecnología avanzada',
    'Experiencia de usuario',
    'Compras online',
    'Innovación',
    'Responsive design',
    'Animaciones interactivas',
    'Pagos seguros',
    'Catálogo de productos',
    'Navegación intuitiva',
    'Estilo moderno',
    'Tecnologías preferidas',
    'JavaScript',
    'CSS',
    'Integración con Shopify',
    'Optimización de rendimiento',
  ]

}
export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  )
}
