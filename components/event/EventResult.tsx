import Link from 'next/link'
import dayjs from 'dayjs'

type Props = {
  date: Date
}

const EventResult = ({ date }: Props) => {
  return (
    <section className='mt-10 w-[80%] max-w-4xl mx-auto'>
      <h2 className='mb-10 text-center'>
        events in {dayjs(date).format('MMMM YYYY')}
      </h2>
      <div className='flex'>
        <Link
          href='/events'
          className='trans bg-[#03be9f] text-white px-4 py-2 rounded-lg mx-auto hover:bg-[#03be9f]/70'
        >
          Back to all Events
        </Link>
      </div>
    </section>
  )
}
export default EventResult
