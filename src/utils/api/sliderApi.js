import { request } from '../helpers/network'

export const getSlidesApi = () => request('api/slide/getSlides', 'GET')
