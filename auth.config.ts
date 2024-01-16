import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isLogin = nextUrl.pathname.startsWith("/login");

      if (isLogin && isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return isLoggedIn;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
