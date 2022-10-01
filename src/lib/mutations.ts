import { AuthMode, FetchBody } from '../models/Global'
import fetcher from './fetcher'

export const auth = (mode: AuthMode, body: FetchBody) => fetcher(`/${mode}`, body)
