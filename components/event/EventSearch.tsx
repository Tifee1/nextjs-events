import { useRouter } from 'next/router'
import React, { useRef } from 'react'

const EventSearch = () => {
  const yearRef = useRef<HTMLSelectElement>(null)
  const monthRef = useRef<HTMLSelectElement>(null)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const years = ['2023', '2022', '2021', '2020', '2019', '2018', '2017']

  const router = useRouter()

  const findEvent = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!yearRef.current || !monthRef.current) return
    const month = monthRef.current.value
    const year = yearRef.current.value
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <section className='bg-white w-[90%] max-w-[40rem] mx-auto my-8 py-4 px-2 shadow-2xl rounded-lg'>
      <form
        className='grid  md:grid-cols-[2fr_2fr_1fr] gap-4'
        onSubmit={findEvent}
      >
        <div className='flex items-center gap-6 md:gap-4'>
          <label htmlFor='month' className='font-semibold'>
            Month
          </label>
          <select
            id='month'
            className='border border-black rounded-lg w-[70%] md:w-full py-1'
            ref={monthRef}
          >
            {months.map((item, i) => {
              return (
                <option value={i + 1} key={i}>
                  {item}
                </option>
              )
            })}
          </select>
        </div>
        <div className='flex items-center gap-8 md:gap-4'>
          <label htmlFor='year' className='font-semibold'>
            Year
          </label>
          <select
            id='year'
            className='border border-black rounded-lg w-[70%] md:w-full py-1'
            ref={yearRef}
          >
            {years.map((item, i) => {
              return (
                <option value={item} key={i}>
                  {item}
                </option>
              )
            })}
          </select>
        </div>
        <button
          type='submit'
          className='trans bg-[#03be9f] text-white rounded-xl text-sm hover:bg-[#03be9f]/70 py-1 md:py-0'
        >
          Find Events
        </button>
      </form>
    </section>
  )
}
export default EventSearch
