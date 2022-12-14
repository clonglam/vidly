import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from '../src/app/store'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SkeletonTheme } from 'react-loading-skeleton'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
      <ToastContainer />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SkeletonTheme>
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
