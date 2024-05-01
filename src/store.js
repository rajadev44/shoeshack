import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/features/authentication'
import productReducer from './features/products'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer
  },
})
