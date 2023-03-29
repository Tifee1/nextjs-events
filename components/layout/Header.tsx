import Link from 'next/link'

const Header = () => {
  return (
    <section className='bg-black text-cyan-500 py-8 px-20 flex flex-col md:flex-row gap-8 justify-between items-center'>
      <Link href='/'>
        <h2 className='trans hover:text-cyan-200'>NextEvents</h2>
      </Link>
      <Link href='/events'>
        <h3 className='trans hover:text-cyan-200'>Browse all events</h3>
      </Link>
    </section>
  )
}
export default Header
