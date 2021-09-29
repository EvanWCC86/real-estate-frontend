import React from 'react'

import PostCard from './PostCard'
const Posts = ({postsData}) => {
  return (
    <>
      {postsData.map((item) => (
          <PostCard post={item} key={item._id} />
      ))}
    </>
  )
}

export default Posts

