import axios from 'axios'

export const token = 'c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd'

export const API = axios.create({
  baseURL: 'https://changenow.io/api/v1',
})
