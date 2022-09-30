import fetcher from './fetcher'

type Mode = 'signin' | 'signup'
type Body = {
  email: string
  password: string
}

export const auth = (mode: Mode, body: Body) => fetcher(`/${mode}`, body)
