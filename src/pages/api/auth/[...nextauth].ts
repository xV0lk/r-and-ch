import NextAuth, { NextAuthOptions } from 'next-auth'
// import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'
// import AppleProvider from 'next-auth/providers/apple'
import adminGoogleProvider from '../../../lib/providers/adminGoogle'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  providers: [
    /* EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       }),
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains
    Providers.Apple({
      clientId: process.env.APPLE_ID, 
      clientSecret: {
        appleId: process.env.APPLE_ID,
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID,
      },
    }),
    */
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    adminGoogleProvider({
      clientId: process.env.ADMIN_GOOGLE_ID,
      clientSecret: process.env.ADMIN_GOOGLE_SECRET,
    }),
  ],
  // theme: {
  //   colorScheme: "light",
  // },
  // callbacks: {
  //   async jwt({ token }) {
  //     token.userRole = "admin"
  //     return token
  //   },
  // },
}

export default NextAuth(authOptions)
