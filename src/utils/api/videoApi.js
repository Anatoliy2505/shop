import { request } from '../helpers/network'

export const getVideosApi = () => request('api/video/getVideos', 'GET')
