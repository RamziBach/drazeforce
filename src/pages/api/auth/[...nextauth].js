import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';

const accessToken =
  'Bearer eyJraWQiOiJcL1dsbytVSFpwUXVublluMUp2VDI0dFJRdlwvcXhJR3VCWVpDblNcL211emdJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1NjEwZDY2MC1mNWE5LTRkMWItYjJkNS0zOGU4NGJjY2RhOTYiLCJjb2duaXRvOmdyb3VwcyI6WyJmYW4iLCJkZXZlbG9wZXIiXSwiZXZlbnRfaWQiOiJiMDM4NDViMi0zYzVlLTRlN2YtOTc5Mi1lMTg0ZTU0MzA5OWMiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjE0NzA3ODgxLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9WSnB3eXJCeFgiLCJleHAiOjE2MTQ3MTE0ODEsImlhdCI6MTYxNDcwNzg4MSwianRpIjoiODY4MDZiNTMtNWFkZS00YTgxLWI5NGMtYWIzM2RmZjliY2E0IiwiY2xpZW50X2lkIjoiM2ZtYm92ODFoY25mb3A0M2Rmc3UyZDB2NnUiLCJ1c2VybmFtZSI6IjU2MTBkNjYwLWY1YTktNGQxYi1iMmQ1LTM4ZTg0YmNjZGE5NiJ9.MYJuhOsDFOeJY_wiRJuDVcVSmsQJtvp5DYz5NQf4YthlnoYjakidZZ9n8-ryu64kZpqa0QvhcjrJDpjuAkk5ZWuaasLSxfPxdzegek5zxjuuUYAym4yy4UaqRUX1p9r0pxiY2DZSEODK6GW8ULbPAhBByDteZDAhhYmBGYMuA6KJUmkVJJMgzy4ZgYkMPt_XL51LTpSbeL-bQgRRJ4-jDUqiMZniZZnAqxRO8FOvgA_1OF2i3prQlbBDLg0H5sx6AtQ_f3sYR6lVo0O2upTVzQHrFGVKtJyQ4sVWEWjs3lHk-hTCq7w-mNPDbotQXZYz-XydTOENKVehTakNC6zNsw';

const authUrl =
  'https://rallyio-prod.auth.us-west-2.amazoncognito.com/login?client_id=3fmbov81hcnfop43dfsu2d0v6u&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://api.rally.io/v1/oauth/callback&state=f3315ef6b94f4f96da79fac5c8ff4971f8de61f9';

export default NextAuth({
  providers: [
    {
      id: 'rally',
      name: 'Rally',
      type: 'oauth',
      version: '2.0',
      // scope: '',
      params: { grant_type: 'authorization_code' },
      accessTokenUrl: accessToken,
      authorizationUrl: authUrl,
      profileUrl: 'https://api.rally.io/v1/oauth/userinfo',
      headers: {
        Authorization: accessToken,
      },
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
