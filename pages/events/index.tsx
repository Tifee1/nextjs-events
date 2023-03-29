import EventList from '../../components/event/EventList'
import EventSearch from '../../components/event/EventSearch'
import { Event, getAllEvents } from '../../components/helpers/db-utils'

type Props = {
  allEvents: Event[]
}

const Event = ({ allEvents }: Props) => {
  return (
    <>
      <EventSearch />
      <EventList items={allEvents} />
    </>
  )
}
export default Event

export const getStaticProps = async () => {
  const allEvents = await getAllEvents()
  return {
    props: {
      allEvents,
    },
    revalidate: 60,
  }
}
