import { useRef } from 'react'
import { toast } from 'react-toastify'

type Props = {
  id: string
  loadComments: () => void
}

const CommentForm = ({ id, loadComments }: Props) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const commentRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = emailRef.current!.value
    const name = nameRef.current!.value
    const comment = commentRef.current!.value

    if (!email || !name || !comment) {
      toast.error('Please input all fields')
      return
    }

    await toast.promise(
      async () => {
        await fetch(`/api/comments/${id}`, {
          method: 'POST',
          body: JSON.stringify({ email, name, comment }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
      },
      {
        pending: 'Loading...',
        success: 'Comment Submitted Successfully',
        error: 'Error, Please try again',
      }
    )
    await loadComments()
    emailRef.current!.value = ''
    nameRef.current!.value = ''
    commentRef.current!.value = ''

    // const data = await response.json()

    // console.log(data)
  }

  return (
    <form
      className='bg-[#03be9f] p-4 text-[#aef3eb] w-full rounded-md'
      onSubmit={handleSubmit}
    >
      <div className='grid md:grid-cols-2 md:gap-4'>
        <div className='grid mb-4'>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            id='email'
            className='bg-[#aef3eb] rounded-sm outline-[#03be9f] text-black py-1 px-2'
            ref={emailRef}
          />
        </div>
        <div className='grid mb-4'>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            id='name'
            className='bg-[#aef3eb] rounded-sm outline-[#03be9f]  text-black py-1 px-2'
            ref={nameRef}
          />
        </div>
      </div>
      <div>
        <label htmlFor='comment'>Your Comment</label>
        <textarea
          rows={5}
          id='comment'
          className='bg-[#aef3eb] rounded-sm w-full outline-[#03be9f] resize-none  text-black  py-1 px-2'
          ref={commentRef}
        ></textarea>
      </div>
      <div className='flex'>
        <button
          type='submit'
          className='trans bg-[#aef3eb] hover:bg-[#aef3eb]/70 rounded-sm text-[#03be9f] px-2 py-1 capitalize mx-auto'
        >
          submit
        </button>
      </div>
    </form>
  )
}
export default CommentForm
