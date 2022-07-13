import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import HomePage from './pages/home'
import Quiz from './pages/quiz'

import './styles/main.scss'

function App() {
  return (
    <BrowserRouter>
    <Provider store={store()}>
      <div className="App">
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<Quiz />} path="/quiz" />
        </Routes>
      </div>
    </Provider>
    </BrowserRouter>
  )
}

export default App
