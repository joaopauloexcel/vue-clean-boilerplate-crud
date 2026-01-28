import { server } from './src/mocks'
import { beforeAll, afterAll, afterEach } from 'vitest'

process.env.VITE_API_URL = 'https://dummyjson.com'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
