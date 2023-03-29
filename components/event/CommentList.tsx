type Props = {
  comments: { name: string; _id: string; comment: string }[]
  loading: boolean
}

const CommentList = ({ comments, loading }: Props) => {
  if (loading) {
    return <h3 className='my-8 text-black/60 text-center'>Loading...</h3>
  }
  if (comments.length == 0) {
    return (
      <h3 className='my-8 text-black/60 text-center'>
        no comments yet. be the first to comment.
      </h3>
    )
  }
  return (
    <ul className='my-8 text-black/60'>
      {comments.map((comment) => {
        return (
          <li className='border-b border-b-black py-1' key={comment._id}>
            <span>{comment.comment}</span>
            <span className='block text-right italic'>By {comment.name}</span>
          </li>
        )
      })}
    </ul>
  )
}
export default CommentList
