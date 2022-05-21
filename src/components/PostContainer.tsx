import React , { useState } from 'react'
import { PostAPI } from '../service/PostService'
import { PostItem } from './PostItem'
import { IPost } from '../models/IPost'


export const PostContainer = () => {
  const [ limit , setLimit ] = useState<number> (20)
  const {
    data : posts ,
    error ,
    isLoading ,

  } = PostAPI.useFetchAllPostsQuery (limit)
  const [ createPost , { error : createError , isLoading : loading } ] = PostAPI.useCreatePostMutation ()
  const [ updatePost , {} ] = PostAPI.useUpdatePostMutation ()
  const [ deletePost , {} ] = PostAPI.useDeletePostMutation ()

  const handleCreate = async () => {
    const title = prompt ()
    await createPost ({ title , body : title } as IPost)
  }
  const handleRemove = (post : IPost) => {
    deletePost (post)
  }
  const handleUpdate = (post : IPost) => {
    updatePost (post)
  }
  return (
    <div>
      <div className="post__lists">
        <button onClick={ handleCreate }>POST</button>
        { isLoading && <h1>Загрузка</h1> }
        { error && <h1>Ошибка</h1> }
        { posts && posts.map (post =>
          <PostItem remove={ handleRemove } update={ handleUpdate } post={ post }/>
        ) }
      </div>
    </div>
  )
}


