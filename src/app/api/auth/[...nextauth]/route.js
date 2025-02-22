import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

//  Named exports for Next.js 13+ App Router
export { handler as GET, handler as POST };


// notes of updated next js versions +13
// In the App Router (src/app/), you must export GET and POST handlers explicitly.
