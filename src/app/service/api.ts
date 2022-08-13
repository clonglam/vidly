import { createAction } from '@reduxjs/toolkit'

type ApiType = {
  url: string
  method?: 'GET' | 'PUT' | 'PATCH' | 'DELETE'
  data?: string
  onSuccess?: string
  onError?: string
  onStart?: string
}
export const apiCallBegan = createAction<ApiType>('api/CallBegan')
export const apiCallSuccess = createAction<ApiType | undefined>('api/CallSuccess')
export const apiCallFailed = createAction<string>('api/CallFailed')
