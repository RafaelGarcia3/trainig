import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    incrementIfOdd: state => {
      if (state.value % 2 !== 0) state.value += 1
    }
  }
})

const { increment, decrement, incrementIfOdd } = counterSlice.actions

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

function CounterComponent() {
  const value = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <p> Clicked: <span>{value}</span> times </p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementIfOdd())}>Increment if odd</button>
    </div>
  )
}

export default function CounterTK() {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  )
}
