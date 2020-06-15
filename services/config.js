const env = process.env.NODE_ENV

const config = {
  testing: {},
  development: {
    API_URL: 'http://localhost:3000',
  },
  production: {
    API_URL: 'https://cor9.pro',
  },
}

export default config[env]
