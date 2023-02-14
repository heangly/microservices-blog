import React from 'react'
import PostCreate from './components/PostCreate'
import PostList from './components/PostList'

const App = () => {
  return (
    <div className='container mt-5'>
      <h1>Create Post</h1>
      <PostCreate />

      <hr />

      <h1>Post</h1>
      <PostList />
    </div>
  )
}

export default App
