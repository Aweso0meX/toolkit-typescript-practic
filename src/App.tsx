import React from 'react'
import { PostContainer } from './components/PostContainer'


function App () {
  // const dispatch = useDispatch ()
  // const { users , isLoading , error } = useAppSelector ( state => state.user )
  //
  // useEffect ( () => {
  //   // @ts-ignore
  //   dispatch ( fetchUsers () )
  // } , [] )

  return (
    <div className="App">
      {/*{ isLoading && <h1>Идет загрузка</h1> }*/ }
      {/*{ error && <h1>{ error }</h1> }*/ }
      {/*{ JSON.stringify ( users , null , 2 ) }*/ }
      <PostContainer/>
    </div>
  )
}

export default App
