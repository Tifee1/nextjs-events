import { NextApiRequest, NextApiResponse } from 'next'
import { connectDb, insertCollection } from '../../components/helpers/api-utils'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email } = req.body

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid Email' })
      return
    }

    let client

    try {
      client = await connectDb()
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed' })
      return
    }

    const db = client.db()

    try {
      await insertCollection(db, 'emails', { email })
      client.close()
    } catch (error) {
      client.close()
      res.status(500).json({ message: 'Registering email failed' })
      return
    }

    res.status(201).json({ message: 'Email Submitted' })
  }
}
export default handler
