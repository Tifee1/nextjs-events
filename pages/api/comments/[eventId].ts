import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'
import {
  connectDb,
  findItem,
  insertCollection,
} from '../../../components/helpers/api-utils'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.query.eventId
  let client
  try {
    client = await connectDb()
  } catch (error) {
    res.status(500).json({ message: 'Connecting to database failed' })
    return
  }

  if (req.method === 'POST') {
    const { email, name, comment } = req.body
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() == '' ||
      !comment ||
      comment.trim() == ''
    ) {
      res.status(422).json({ message: 'Invalid Inputs' })
      client.close()
      return
    }
    const db = client.db()
    const newComment = {
      name,
      email,
      comment,
      eventId,
    }
    try {
      await insertCollection(db, 'comments', newComment)
    } catch (error) {
      res.status(500).json({ message: 'Could not submit Comment' })
      client.close()
      return
    }

    res.status(200).json({ message: 'Comment submitted', comment: newComment })
  }
  if (req.method === 'GET') {
    const db = client.db()
    try {
      const documents = await findItem(db, 'comments', { _id: -1 }, { eventId })
      res.status(200).json({ data: documents })
    } catch (error) {
      res.status(500).json({ message: 'Getting comments failed' })
      client.close()
      return
    }
  }

  client.close()
}

export default handler
