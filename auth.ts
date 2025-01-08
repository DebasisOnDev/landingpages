import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { openAPI } from "better-auth/plugins";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
    },
  },
  user: {
    additionalFields: {
      premium: {
        type: "boolean",
        required: false,
      },
    },
    // changeEmail: {
    //   enabled: true,
    //   sendChangeEmailVerification: async ({ newEmail, url }) => {
    //     await sendEmail({
    //       to: newEmail,
    //       subject: "Verify your email change",
    //       text: `Click the link to verify: ${url}`,
    //     });
    //   },
    // },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      redirectURI: process.env.BETTER_AUTH_URL + "/api/auth/callback/google",
    },
  },
  plugins: [
    openAPI(),
    admin({
      impersonationSessionDuration: 60 * 60 * 24 * 7, // 7 days
    }),
  ], // api/auth/reference
} satisfies BetterAuthOptions);

export type Session = typeof auth.$Infer.Session;
