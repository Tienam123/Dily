import NextAuth from 'next-auth';
import Credentials from '@auth/core/providers/credentials';
import {
  csrf,
  setCsrfLaravelCookie,
  setLaravelCookie,
  setOptions,
} from '@/utils/helpers';
import Google from '@auth/core/providers/google';
import GitHub from '@auth/core/providers/github';
import Facebook from '@auth/core/providers/facebook';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const res = await csrf();
        const setCookieHeader = res.headers.get('set-cookie');
        const cookies: string[] | undefined = setCookieHeader?.split(', ');

        let sessionKey = setLaravelCookie(cookies) ?? null;
        let xsrfToken = setCsrfLaravelCookie(cookies) ?? null;

        const data = {
          email: credentials?.email,
          password: credentials?.password,
        };
        const options = setOptions(sessionKey, xsrfToken, data);
        console.log('Options: ', options);

        try {
          const response = await fetch('http://localhost/login', options);
          if (response.ok) {
            return await response.json();
          } else {
            return null;
          }
        } catch (error) {
          console.log('Error', error);
        }
        return null;
      },
    }),
    Google({
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      clientId: process.env.AUTH_GOOGLE_ID,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Facebook({
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (user) {
        token.user = user;
        token.accessToken = user.access_token;
        return { ...user };
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.access_token as string;
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: '/login',
    newUser: '/register',
  },
});
