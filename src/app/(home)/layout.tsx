import Hero from '@/components/home/Hero';
import Description from '@/components/home/Description';

export default function Home({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Hero />
            <Description image='/description.jpeg'/>
            {children}
        </div>
    )
}