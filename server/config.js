import { config } from 'dotenv'

if (process.env.NODE_ENV !== 'production') config()

export const port = process.env.PORT || '5500'
export const db = process.env.DB || ''
export const user = process.env.USER || 'root'
export const password = process.env.PASSWORD || ''
