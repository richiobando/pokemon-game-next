// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {Cards} from '../../types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { data } = await import('../../data/cards.json')
  
  res.status(200).json({ data })
}
