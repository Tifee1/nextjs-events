import { useEffect, useState } from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

type Props = {
  id: string
}

const EventComments = ({ id }: Props) => {
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    if (showComments) {
      setLoading(true)
      const response = await fetch(`/api/comments/${id}`)
      const data = await response.json()
      setComments(data.data)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [showComments])

  return (
    <section className='grid items-center w-[70%] max-w-xl mx-auto'>
      <div className='flex'>
        <button
          onClick={() => setShowComments(!showComments)}
          className='trans text-[#03be9f] border border-[#03be9f] rounded-lg capitalize px-2 py-1 mb-4 mx-auto hover:bg-[#aef3eb]'
        >
          {!showComments ? 'show comments' : 'hide comments'}
        </button>
      </div>
      {showComments && <CommentForm id={id} loadComments={fetchData} />}
      {showComments && <CommentList comments={comments} loading={loading} />}
    </section>
  )
}

export default EventComments
