import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import EventList from '../../components/event/EventList'
import EventResult from '../../components/event/EventResult'
import { Event, getEventByDate } from '../../components/helpers/db-utils'

type Props = {
  filteredEvent: Event[]
  hasError?: boolean
  numYear: number
  numMonth: number
}

const FilterEvents = ({
  filteredEvent,
  hasError,
  numYear,
  numMonth,
}: Props) => {
  console.log(filteredEvent)
  if (hasError) {
    return (
      <section className='mt-20 w-[80%] max-w-4xl mx-auto'>
        <h2 className='mb-20 text-center'>
          Invalid Filters. Please Adjust your values
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
  if (filteredEvent.length === 0) {
    return (
      <section className='mt-20 w-[80%] max-w-4xl mx-auto'>
        <h2 className='mb-20 text-center'>
          no events found for the chosen filter
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
  const date = new Date(numYear, numMonth - 1)
  return (
    <>
      <EventResult date={date} />
      <EventList items={filteredEvent} />
    </>
  )
}
export default FilterEvents

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  if (!context.params) return
  const params = context.params.slug!

  const filteredYear = params[0]
  const filteredMonth = params[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2015 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    }
  }

  const filteredEvent = await getEventByDate(numYear, numMonth)

  return {
    props: { filteredEvent, numYear, numMonth },
  }
}
