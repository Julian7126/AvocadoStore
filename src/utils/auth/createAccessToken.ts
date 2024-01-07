import { GraphQLClientSingleton } from "@/graphql"
import { customerAccessTokenCreateMutation } from "@/graphql/mutations/customerAccessTokenCreate";
import { cookies } from "next/headers"

// almarcenar en una nueva cookie 


export const createAccessToken = async (email: string , password: string ) => {
 const cookiesStore = cookies();   
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient();


try {
    const {customerAccessTokenCreate}  = await graphqlClient.request( customerAccessTokenCreateMutation , {
        "email" : email,
        "password" : password,  
    })


const { accessToken, expiresAt } = customerAccessTokenCreate?.customerAccessToken || {};

if (accessToken) {
    cookiesStore.set("accessToken" , accessToken , {
        path: "/",
        expires: new Date(expiresAt),
        httpOnly: true,
        sameSite: true,
    })
}




return accessToken
    
} catch (
    error
) {
    console.error("Error al crear el accessToken:", error);
    // Puedes manejar el error de acuerdo a tus necesidades.    
    
}



}