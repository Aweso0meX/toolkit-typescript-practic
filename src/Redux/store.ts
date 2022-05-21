import { combineReducers , configureStore } from '@reduxjs/toolkit'
import { userSliceReducer } from './reducers/UserSlice'
import { PostAPI } from '../service/PostService'


const rootReducer = combineReducers ({
  user : userSliceReducer ,
  [ PostAPI.reducerPath ] : PostAPI.reducer
})

export const setupStore = () => {
  return configureStore ({
    reducer : rootReducer ,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware ().concat (PostAPI.middleware)

  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
export type AppStore = ReturnType<typeof setupStore>
