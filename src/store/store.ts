import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"


const store = configureStore({
    reducer: {
        user: userReducer
    }
})


// Define TypeScript types for RootState and AppDispatch
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']

export default store