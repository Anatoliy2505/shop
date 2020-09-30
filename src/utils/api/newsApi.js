import { request } from '../helpers/network'

export const getNewsApi = () => request('api/news/getNews', 'GET')
