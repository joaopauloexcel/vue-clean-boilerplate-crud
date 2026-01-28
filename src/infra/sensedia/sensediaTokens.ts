import axios from 'axios'

import { env } from '@/config'

type SensediaAccessTokenResponse = {
  access_token: string
  token_type: 'access_token'
  expires_in: number
}

type AccessToken = SensediaAccessTokenResponse & {
  expires_at: number
}

const SECOND = 1000
const MINUTE = 60 * SECOND
const SESSION_STORAGE_PROPERTY = 'sensedia_access_token'

async function requestAccessToken(): Promise<AccessToken> {
  if (!env.sensediaAuthUrl) {
    throw new Error('Missing value for SENSEDIA_AUTH_URL')
  }

  const response = await axios.post<SensediaAccessTokenResponse>(
    env.sensediaAuthUrl,
    {
      grant_type: 'client_credentials'
    },
    {
      headers: {
        Authorization: `Basic ${btoa(`${env.sensediaClientId}:${env.sensediaClientSecret}`)}`
      }
    }
  )

  return {
    ...response.data,
    expires_at: Date.now() + response.data.expires_in * SECOND - MINUTE
  }
}

function storeAccessTokenInSesion(accessToken: AccessToken): void {
  sessionStorage.setItem(SESSION_STORAGE_PROPERTY, JSON.stringify(accessToken))
}

export const _storeAccessTokenInSesion = storeAccessTokenInSesion

function retrieveAccessTokenFromSesion(): AccessToken | null {
  const sessionStorageValue = sessionStorage.getItem(SESSION_STORAGE_PROPERTY)
  try {
    if (!sessionStorageValue || sessionStorageValue.length === 0) {
      return null
    }

    const accessToken = JSON.parse(sessionStorageValue) as AccessToken
    if (accessToken.expires_at < Date.now()) {
      return null
    }

    return accessToken
  } catch (error) {
    console.error('Error while retriving sensedia token from SessionStorage: ', error)
    return null
  }
}

export async function getAccessToken(): Promise<AccessToken> {
  let accessToken = retrieveAccessTokenFromSesion()
  if (!accessToken) {
    accessToken = await requestAccessToken()
    storeAccessTokenInSesion(accessToken)
  }

  return accessToken
}
