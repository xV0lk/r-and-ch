import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { AppleLogo } from '../../../public/AppleLogo'
import { GoogleLogo } from '../../../public/GoogleLogo'
import { auth } from '../../lib/mutations'
import { AuthMode } from '../../models/Global'

type Error = {
  type?: 'auth' | 'pass'
  message?: string
}

const AuthForm: FC<{ mode: AuthMode }> = ({ mode }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<Error>({})
  // const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await auth(mode, { email, password })
      router.push('/')
    } catch (err) {
      console.log('error')
      console.log(err)
    }
  }

  const handlePass = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== password) {
      setError({ type: 'pass', message: 'Las contraseñas no coinciden' })
    } else {
      setError({})
    }
  }

  return (
    <div className="w-96 h-fit p-8 space-y-3 rounded-xl mx-auto my-auto bg-transparent">
      <h1 className="text-2xl font-bold text-center">
        {mode === 'signin' ? 'Iniciar Sesión' : 'Crear Cuenta'}
      </h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
        data-bitwarden-watching="1"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-400">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-400">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
          {/* <div className="flex justify-end text-xs dark:text-gray-400">
            <a rel="noopener noreferrer" href="#">
              Forgot Password?
            </a>
          </div> */}
        </div>
        {mode === 'signup' && (
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-400">
              Confirmar contraseña
            </label>
            <input
              type="password"
              name="ConfirmPassword"
              id="Confirmpassword"
              onChange={(e) => handlePass(e)}
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
        )}
        {error && <p className="text-red-700">{error.message}</p>}
        <button
          type="submit"
          disabled={error?.type === 'pass'}
          className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-orange-1"
        >
          {mode === 'signin' ? 'Iniciar Sesión' : 'Registrarse'}
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700" />
        <p className="px-3 text-sm dark:text-gray-400">Inicio de sesión social</p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700" />
      </div>
      <div className="flex justify-center space-x-4">
        <button type="button" aria-label="Log in with Google" className="p-3 rounded-sm">
          <GoogleLogo />
        </button>
        <button type="button" aria-label="Log in with GitHub" className="p-3 rounded-sm">
          <AppleLogo />
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        {mode === 'signin' ? 'No tienes una cuenta?' : 'Ya tienes una cuenta?'}
        <Link
          href={`/${mode === 'signin' ? 'signup' : 'signin'}`}
          className="underline dark:text-gray-100 mx-2"
        >
          <button type="button" className="underline cursor-pointer dark:text-gray-100 mx-2">
            {mode === 'signin' ? 'Registrate' : 'Inicia sesión'}
          </button>
        </Link>
      </p>
    </div>
  )
}

export default AuthForm
