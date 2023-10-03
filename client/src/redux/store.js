import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
})