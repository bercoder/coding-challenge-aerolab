// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const URL = `${process.env.URL}/user/points`;
  
  if (req.method === 'POST') {

    const { amount } = req.body;

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',      
        'Authorization': `Bearer ${process.env.SECRET_TOKEN}`,
      }
    }

    try {
      const response = await fetch(`${URL}`, {
      ...options,
        body: JSON.stringify({
          amount
        })
      });

      const data = await response.json();

      if (response.status === 200) {
        res.status(200).json(data);
      } else {
        res.status(response.status).json(response.statusText);
      }

    } catch (error) {
      res.status(400);
    }
  }
}
