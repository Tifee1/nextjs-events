import Head from 'next/head'
import EventList from '../components/event/EventList'
import { Event, getFeaturedEvents } from '../components/helpers/db-utils'
import Subscription from '../components/ui/Subscription'

type Props = {
  featuredEvents: Event[]
}

export default function Home({ featuredEvents }: Props) {
  return (
    <>
      <Head>
        <title>Events || HomePage</title>
        <meta name='description' content='Events near you' />
      </Head>
      <Subscription />
      <EventList items={featuredEvents} />
    </>
  )
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  }
}
