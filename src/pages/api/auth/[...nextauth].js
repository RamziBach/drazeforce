import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    {
      id: 'rally',
      name: 'Rally',
      type: 'oauth',
      version: '2.0',
      scope: '',
      params: { grant_type: 'authorization_code' },
      accessTokenUrl: 'https://api.rally.io/v1/oauth/register',
      authorizationUrl: 'https://api.rally.io/v1/oauth/authorize',
      profileUrl: 'https://api.rally.io/v1/oauth/userinfo',
      async profile(profile, tokens) {
        return {
          username: profile.username,
          rnbUserId: profile.rnbUserId,
        };
      },
      clientId: '',
      clientSecret: '',
    },
  ],
});
