declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string
      NODE_ENV: 'development' | 'production'
      PORT?: string
      PWD: string
      YOUTUBE_API_KEY: string
      ADMIN_GOOGLE_ID: string
      ADMIN_GOOGLE_SECRET: string
      GOOGLE_ID: string
      GOOGLE_SECRET: string
      JAVASCRIPT_ORIGINS: string
      JWT_SECRET: string
      COOKIE_NAME: string
    }
  }
}
export {}
