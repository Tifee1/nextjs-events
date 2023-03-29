import { Event } from '../helpers/db-utils'
import SingleEvent from './SingleEvent'

type Props = {
  items: Event[]
}

const EventList = ({ items }: Props) => {
  return (
    <section className='my-8 w-[90%] max-w-[40rem] mx-auto'>
      {items.map((event) => {
        return <SingleEvent event={event} key={event.id} />
      })}
    </section>
  )
}
export default EventList
