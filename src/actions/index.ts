"use server"

import { GraphQLClientSingleton } from "@/graphql"
import { createUserMutation } from "@/graphql/mutations/createUserMutation";
import { createAccessToken } from "@/utils/auth/createAccessToken";
import { redirect } from "next/navigation";


export const handleCreateUser= async (formData: FormData)=>{
    const FormDataObject = Object.fromEntries(formData);
    const graphqlCliet = GraphQLClientSingleton.getInstance().getClient();

    const variables ={
        input: {
         ...FormDataObject,
         phone : "+506" +FormDataObject.phone
            
        }

    }
    const {customerCreate}  = await graphqlCliet.request(createUserMutation ,variables);
    const {customerUserErrors , customer} = customerCreate;
 if (customer?.firstName) {
  
    await createAccessToken(FormDataObject.email as string  , FormDataObject.password as string );
    redirect("/store")
 }
   
}