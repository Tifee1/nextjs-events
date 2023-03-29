import { MongoClient } from 'mongodb'

export const connectDb = async () => {
  return await MongoClient.connect(
    'mongodb+srv://tifee1:jtNa6ivh2HNdKxZ7@cluster0.x5npoxe.mongodb.net/events?retryWrites=true&w=majority'
  )
}

export const insertCollection = async (
  db: any,
  collectionName: string,
  item: any
) => {
  await db.collection(collectionName).insertOne(item)
}

export const findItem = async (
  db: any,
  collectionName: string,
  sort: {},
  filter: {}
) => {
  return await db.collection(collectionName).find(filter).sort(sort).toArray()
}
