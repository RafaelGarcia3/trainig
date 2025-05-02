import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementIfOdd } from '../../redux/actions';
import { store } from '../../redux/store';

function CounterComponent() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
        <p> Clicked: <span>{count}</span> times </p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementIfOdd())}>Increment if odd</button>
    </div>
  );  
}

export default function Counter(){
    return(
        <Provider store={store}>
            <CounterComponent/>
        </Provider>
    );
}
