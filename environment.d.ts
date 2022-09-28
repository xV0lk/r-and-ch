declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string
      NODE_ENV: 'development' | 'production'
      PORT?: string
      PWD: string
      YOUTUBE_API_KEY: string
      CLIENT_ID: string
      PROJECT_ID: string
      AUTH_URI: string
      TOKEN_URI: string
      AUTH_PROVIDER_X509_CERT_URL: string
      CLIENT_SECRET: string
      JAVASCRIPT_ORIGINS: string
      JWT_SECRET: string
      COOKIE_NAME: string
    }
  }
}
export {}
