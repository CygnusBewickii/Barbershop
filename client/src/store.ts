import { configureStore } from '@reduxjs/toolkit'
import barberReducer from './features/barber/barberSlice'

const store = configureStore({
    reducer: {
        barber: barberReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;