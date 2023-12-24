interface CategoriesProps {

    params: {

        categories: string[];
        searchParams: string;

    }
}


export default function Category( props: CategoriesProps) {

    const {categories}= props.params;   

   

        return(
            <div>
                <h1>Category pagina dimnamica {categories}</h1>
            </div>
        )

}
