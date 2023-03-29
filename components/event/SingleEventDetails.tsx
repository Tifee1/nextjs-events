import Image from 'next/image'
import { Event } from '../helpers/db-utils'
import { AiOutlineCalendar } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import dayjs from 'dayjs'

type Props = {
  event: Event
}

const SingleEventDetails = ({ event }: Props) => {
  if (!event) {
    return (
      <section className='grid items-center justify-center'>
        <h2 className='mt-20'>Sorry no such event exists</h2>
      </section>
    )
  }
  return (
    <section>
      <div className='h-[35vh] bg-gradient-to-l from-[#008b79] to-[#1180a1] text-white'>
        <h1 className='text-center pt-8 px-2 font-extrabold'>{event.title}</h1>
      </div>
      <article className='-mt-12 bg-[#2b2b2b] w-[80%] max-w-[50rem] text-white flex gap-4 md:gap-16 items-center justify-center mx-auto p-8 rounded-lg'>
        <Image
          src={`/${event.image}`}
          alt={event.title}
          className='w-40 md:w-[20rem] h-40 md:h-[20rem] overflow-hidden rounded-full border-[5px] border-white object-cover'
          width={320}
          height={320}
        />
        <div className='text-[#a7f7ec]'>
          <div className='flex flex-col justify-center gap-1 mb-2 '>
            <span className='text-[#008b79]'>
              <AiOutlineCalendar />
            </span>
            <span>{dayjs(event.date).format('MMMM D, YYYY')}</span>
          </div>
          <div className='flex flex-col justify-center gap-1 italic mb-2'>
            <span className='text-[#008b79]'>
              <BiMap />
            </span>
            <span>{event.location}</span>
          </div>
        </div>
      </article>
      <p className='my-8 w-[80%] max-w-[50rem] mx-auto text-center text-lg'>
        {event.description}
      </p>
    </section>
  )
}
export default SingleEventDetails
