import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import App from './App.jsx'
import PokemonApp from './PokemonApp.jsx'

import { Provider } from 'react-redux'
import { store } from './store/store' 
import TodoApp from './TodoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ store }>
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </StrictMode>,
)
