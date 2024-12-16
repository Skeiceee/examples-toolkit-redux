import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice'

function App() {
  const counterState = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is { counterState.value }</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>

        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>

        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment +2
        </button>

      </div>
    </>
  )
}

export default App
