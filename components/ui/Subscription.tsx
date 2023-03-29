import { useRef } from 'react'
import { toast } from 'react-toastify'

const Subscription = () => {
  const emailRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = emailRef.current!.value
    if (!email || !email.includes('@')) {
      toast.error('Please input a valid Email')
      return
    }
    toast.promise(
      async () => {
        await fetch('/api/registration', {
          method: 'POST',
          body: JSON.stringify({ email }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        emailRef.current!.value = ''
      },
      {
        pending: 'Loading...',
        success: 'Email Submitted Successfully',
        error: 'Error, Please try again',
      }
    )

    // toast.success('Email Submitted Successfully')
    //  console.log(email)
  }

  return (
    <section className='w-[80%] max-w-3xl mx-auto grid justify-center my-20 gap-4'>
      <h3 className='text-center'>
        subscribe to our newsletter to stay updated!
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          className='w-3/4 max-w-xl mx-auto bg-transparent border border-black rounded-lg py-1 px-2'
          ref={emailRef}
        />
        <button
          type='submit'
          className='trans bg-[#03be9f] ml-2 rounded-lg py-1 text-center text-white px-2 uppercase hover:bg-[#03be9f]/70 tracking-wider'
        >
          submit
        </button>
      </form>
    </section>
  )
}
export default Subscription
