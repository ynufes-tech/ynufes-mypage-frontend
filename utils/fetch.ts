import { useFetch } from '#app'
import { Response, ErrorType } from '~/types/utils/api'

const config = useRuntimeConfig().public

export async function getRequest<T>(endpoint: string, query: any): Promise<Response<T>> {
  if (!useCookie('Authorization').value) {
    console.log('no cookie')
    return new Response<T>(null, ErrorType.UNAUTHORIZED)
  }
  const { data: resp, error } = useFetch(config.baseURL + endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + useCookie('Authorization').value
    },
    query: query
  })
  if (error.value != null) {
    if (error.value.status === 401) {
      console.log('401 Unauthorized')
      return new Response<T>(null, ErrorType.UNAUTHORIZED)
    }
    console.log('Connection error')
    console.log(error.value)
    return new Response<T>(null, ErrorType.CONNECTION_ERROR)
  }
  const respJson = JSON.parse(resp.value as string)
  return new Response<T>(respJson, null)
}

export async function postRequest<T>(endpoint: string, body: any): Promise<Response<T>> {
  const { data: resp, error } = useFetch(config.baseURL + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + useCookie('Authorization').value
    },
    body: JSON.stringify(body)
  })
  if (error.value != null) {
    if (error.value.status === 401) {
      console.log('401 Unauthorized')
      return new Response<T>(null, ErrorType.UNAUTHORIZED)
    }
    console.log('Connection error')
    console.log(error.value)
    return new Response<T>(null, ErrorType.CONNECTION_ERROR)
  }
  const respJson = JSON.parse(resp.value as string)
  return new Response<T>(respJson, null)
}
