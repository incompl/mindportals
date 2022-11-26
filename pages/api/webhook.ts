import https from 'https';
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const publishCode = process.env.PUBLISH_CODE;
  const netlifyBuildWebhook = process.env.NETLIFY_BUILD_WEBHOOK;

  if (!netlifyBuildWebhook || !publishCode) {
    res.status(500).send('Unconfigured')
    return;
  }

  const suppliedCode = req.body.password;

  if (suppliedCode !== publishCode) {
    res.status(401).send('Unauthorized')
    return;
  }

  const netlifyResponse = await axios.post(netlifyBuildWebhook, {});

  if (netlifyResponse.status !== 200) {
    res.status(500).send('Failed')
    return;
  }

  res.status(200).send('OK');
}