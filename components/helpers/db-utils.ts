export type Event = {
  title: string
  date: string
  location: string
  image: string
  id: string
  featured?: boolean
  description: string
}

export const getAllEvents = async (): Promise<Event[]> => {
  const response = await fetch(
    'https://furnish-d58e8-default-rtdb.firebaseio.com/events.json'
  )
  const data = await response.json()
  const events = []
  for (const key in data) {
    events.push({ id: key, ...data[key] })
  }
  return events
}

export const getFeaturedEvents = async () => {
  const data = await getAllEvents()
  return data.filter((item) => item.featured === true)
}

export const getEventById = async (id: string) => {
  const data = await getAllEvents()
  const event = data.find((item) => item.id === id)
  if (!event) return null
  return event
}

export const getEventByDate = async (year: number, month: number) => {
  const data = await getAllEvents()
  const filteredDate = data.filter((event) => {
    const date = new Date(event.date)
    return date.getFullYear() === year && date.getMonth() === month - 1
  })
  return filteredDate
}
