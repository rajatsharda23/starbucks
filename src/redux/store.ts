import { configureStore } from "@reduxjs/toolkit"
import selectStar from "./slices/selectStar"


export const store = configureStore({
  reducer: {
    Stars : selectStar,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch