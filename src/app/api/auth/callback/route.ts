// pages/api/auth/callback.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { code } = req.query;

  if (!code || typeof code !== 'string') {
    res.status(400).json({ error: 'Missing or invalid code' });
    return;
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  try {
    const { tokens } = await oauth2Client.getToken(code);
    const { refresh_token } = tokens;

    if (!refresh_token) {
      res.status(400).json({ error: 'Missing refresh token in response' });
      return;
    }

    // Você pode armazenar o refresh token em seu banco de dados ou em um local seguro aqui

    res.status(200).json({ refresh_token });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}
