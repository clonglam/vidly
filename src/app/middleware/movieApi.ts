import { Middleware } from 'redux'
import * as actions from '../service/api'
import { RootState } from '../store'

const movieApi: Middleware<Record<string, unknown>, RootState> =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    // if thje action is not call api => go next
    if (action.type !== actions.apiCallBegan.type) return next(action)

    const { url, method, onSuccess, onError, onStart } = action.payload

    if (onStart) dispatch({ type: onStart })

    // prevent the middleware sworllo the action
    next(action)

    try {
      const res = await fetch(`http://localhost:3900/api/${url}`)
      const data = await res.json()
      dispatch(actions.apiCallSuccess(data))
      if (onSuccess) dispatch({ type: onSuccess, payload: data })
    } catch (error) {
      if (error instanceof Error) {
        //  General
        dispatch(actions.apiCallFailed(error.message))
        // Specify
        if (onError) dispatch({ type: onError, payload: error.message })
      }
    }
  }

export default movieApi
