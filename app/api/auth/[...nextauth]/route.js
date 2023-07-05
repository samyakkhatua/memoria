// import { authConfig } from "@/lib/auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
  ],
  pages: {
    signIn: '/signin'
  }
}

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };