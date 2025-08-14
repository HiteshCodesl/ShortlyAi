import { prismaClient } from "@/prisma/src";
import { compare } from "bcrypt";
import { error } from "console";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
               email: {label: "email", type: "text", placeholder: "enter a email"},
               password: {label: "password", type: "password"}
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password) return null;
                
                const user = await prismaClient.user.findUnique({
                    where: {
                        email: credentials.email
                    },
                })
    
                if(!user || !user.password) return null;
    
                const isValidPass = await compare(credentials.password, user?.password)
                if(!isValidPass){
                    return null;
                }
                return {
                   id: user.id,
                   email: user.email,
                   name: user.name
                }
            }
        })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if(session.user){
         session.user.id = token.id as string;
         session.user.email = token.email as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
