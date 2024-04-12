import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface starState{
    value : number
}

const initialState: starState = {
    value : 25
}

const selectStar = createSlice({
    name : "selectStar",
    initialState,
    reducers: {
        changeState: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        },
    },
})



export const {changeState} = selectStar.actions
export default selectStar.reducer