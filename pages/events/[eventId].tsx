import { GetStaticPropsContext } from 'next'

import {
  Event,
  getEventById,
  getFeaturedEvents,
} from '../../components/helpers/db-utils'
import EventComments from '../../components/event/EventComments'
import SingleEventDetails from '../../components/event/SingleEventDetails'
import Head from 'next/head'

type Props = {
  event: Event
}

const EventDetails = ({ event }: Props) => {
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name='description' content={event.description} />
      </Head>
      <SingleEventDetails event={event} />
      <EventComments id={event.id} />
    </>
  )
}
export default EventDetails

export const getStaticProps = async (context: GetStaticPropsContext) => {
  if (!context.params) return

  const id = context.params.eventId as string
  const selectedEvent = await getEventById(id)

  return {
    props: {
      event: selectedEvent,
    },
    revalidate: 30,
  }
}

export const getStaticPaths = async () => {
  const data = await getFeaturedEvents()
  const paths = data.map((item) => {
    return { params: { eventId: item.id } }
  })
  return {
    paths,
    fallback: 'blocking',
  }
}
