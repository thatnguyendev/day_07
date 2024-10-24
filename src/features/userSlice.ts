import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IUserState {
    name: string
    email: string
}

const initialState: IUserState = {
    name: '',
    email: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUserState>) => {
            state.name = action.payload.name
            state.email = action.payload.email
        },

        clearUser: (state) => {
            state.name = ''
            state.email = ''
        },
    }
})


export const { clearUser, setUser } = userSlice.actions
export default userSlice.reducer

