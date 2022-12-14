import axios, { AxiosError } from 'axios'
import { Router } from 'next/router'
import { destroyCookie, parseCookies } from 'nookies'
const cookies = parseCookies()

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization: `Bearer ${cookies['caparao.token']}`
  }
})
