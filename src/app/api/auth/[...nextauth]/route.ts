import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import {env} from "@/config/env";

const handler = NextAuth({
providers:  [
    GoogleProvider({
        clientId: env.GOOGLE_CLIENT_ID as string,
        clientSecret: env.GOOGLE_CLIENT_SECRET as string,
    })
]

})


export {handler as GET, handler as POST}