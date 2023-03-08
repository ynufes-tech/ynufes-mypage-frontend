import { User } from '~/types/user'
import { Response } from '~/types/utils/api'
import { useGetAPI, usePostAPI } from '~/utils/fetch'

export interface UserPersistence {
  getUserInfo(): Promise<Response<User>>

  postChangeInfo(newUser: User): Promise<Response<User>>
}

export class UserPersistenceImpl implements UserPersistence {
  async getUserInfo(): Promise<Response<User>> {
    return useGetAPI<User>('/api/v1/user/info', {})
  }

  async postChangeInfo(newUser: User): Promise<Response<User>> {
    return usePostAPI<User>('/api/v1/user/info', {})
  }
}
