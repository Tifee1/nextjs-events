import Link from 'next/link'
import { AiOutlineCalendar } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa'
import { Dummy } from '../../dummy_data/dumm'
import dayjs from 'dayjs'
import Image from 'next/image'

type Props = {
  event: Dummy
}

const SingleEvent = ({ event }: Props) => {
  return (
    <article className='flex rounded-lg overflow-hidden flex-col md:flex-row mb-4 shadow-2xl'>
      <Image
        src={`/${event.image}`}
        alt={event.title}
        className='w-full md:w-[40%] h-[10rem] md:h-[14rem] object-cover'
        width={250}
        height={160}
      />
      <div className='bg-white py-8 px-6 text-center md:text-left md:w-[60%] md:grid items-center'>
        <h3 className='font-bold mb-4'>{event.title}</h3>
        <div className='font-semibold flex items-center gap-2 mb-1'>
          <AiOutlineCalendar />{' '}
          <span>{dayjs(event.date).format('MMMM D, YYYY')}</span>
        </div>
        <div className='flex items-center gap-2 italic mb-2'>
          <BiMap /> <span>{event.location}</span>
        </div>
        <Link
          href={`/events/${event.id}`}
          className='trans bg-[#03be9f] text-white flex gap-4 items-center justify-center mx-2 capitalize text-xl py-1 rounded-xl hover:bg-[#03be9f]/70'
        >
          explore event <FaArrowRight />
        </Link>
      </div>
    </article>
  )
}
export default SingleEvent
