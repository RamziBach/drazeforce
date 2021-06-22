import {
  rally_api_url,
  httpPost,
  access_token,
  setCookie,
} from '../../../../utils/helperFunctions';

const userinfo = async (req, res) => {
  if (!access_token) {
    res.status(401).json({ error: 'Application not registered with Rally' });
  }
  console.log(`params = ${JSON.stringify(req.query)}`);
  const code = req.query.code;
  const state = req.query.state;
  console.log(`code = ${code}, state = ${state}`);
  if (code === 'cancelled') {
    res.status(200).json('No authorization to continue');
  }
  try {
    const rally_response = await httpPost(
      rally_api_url + '/oauth/userinfo',
      { code },
      { Authorization: 'Bearer ' + access_token }
    );
    const data = rally_response.data;
    setCookie(username, data.username, 7);
    setCookie(username, data.rnbUserId, 7);
  } catch (err) {
    res.status(500);
  }
};

export default async (req, res) => {
  await userinfo(req, res);
  res.redirect('/vip');
};
