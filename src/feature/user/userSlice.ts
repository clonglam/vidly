import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'
import _ from 'lodash'
import { FormValues } from './RegisterForm'
import http from '../../app/service/httpService'

const apiUrl = 'http://localhost:3900/api'
const tokenKey = 'token'

export const registerUser = createAsyncThunk<
  { email: string; name: string; token: string },
  FormValues,
  { state: { user: UserState } }
>('user/registerStatus', async (userData, thunkAPI) => {
  const apiEndpoint = apiUrl + '/users'
  try {
    const response = await http.post(apiEndpoint, {
      email: userData.email,
      password: userData.password,
      name: userData.name,
    })
    return response.data
  } catch (err) {
    if (err.response.data) return thunkAPI.rejectWithValue(err.response.data)
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const loginUser = createAsyncThunk<
  string,
  { email: string; password: string },
  { state: { user: UserState } }
>('user/loginStatus', async ({ email, password }, thunkAPI) => {
  const apiEndpoint = apiUrl + '/auth'
  try {
    const response = await http.post(apiEndpoint, { email, password })
    console.log(response.data)
    return response.data
  } catch (err) {
    if (err.response.data) return thunkAPI.rejectWithValue(err.response.data)
    return thunkAPI.rejectWithValue(err.message)
  }
})

export type UserType = {
  email: string
  name: string
}

export interface UserState {
  currentUser: UserType
  token: string | null
}

// Define the initial state using that type
const initialState = {
  currentUser: { name: '', email: '' },
  token: null,
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logout(state: UserState) {
      state.token = null
      localStorage.removeItem(tokenKey)
    },
    getJwt(state: UserState) {
      state.token = localStorage.getItem(tokenKey)
    },
    getCurrentUser(state: UserState) {
      console.log('getcurrent User')
      try {
        const jwt = localStorage.getItem(tokenKey)
        const user = jwtDecode<UserType>(jwt)

        state.currentUser.email = user.email
        state.currentUser.name = user.name
        console.log(state.currentUser)
      } catch (ex) {
        state.currentUser = { name: '', email: '' }
      }
    },
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.token = payload

        toast('registed a account successful')
        localStorage.setItem(tokenKey, payload.token)
        window.location.href = '/'
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        toast.error(payload as string)
      })

      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.token = payload
        localStorage.setItem(tokenKey, payload)
        toast('login successful')
        window.location.href = '/'
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        toast.error(payload as string)
      })
  },
})

export const { logout, getCurrentUser } = userSlice.actions

export async function login(email, password) {
  const { data: jwt } = await http.post('http://localhost:3900/api/auth', { email, password })
  localStorage.setItem(tokenKey, jwt)
}

export default userSlice.reducer
