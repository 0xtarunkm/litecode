import CredentialProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';

export const authHandler = {
  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email' },
        password: {
          label: 'password',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials: any) {
        return {
          id: '1',
          email: 'tarunkumar',
          name: 'Tarun',
        };
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    session: ({ session, token, user }: any) => {
      if (session && session.user) {
        session.user.id = token.sub;
      }

      return session;
    },
  },
};
