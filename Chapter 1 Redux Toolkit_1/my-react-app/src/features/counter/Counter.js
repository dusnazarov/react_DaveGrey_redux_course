import {useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const distpatch = useDispatch();
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => distpatch(increment())}>+</button>
            <button onClick={() => distpatch(decrement())}>-</button>      
        </div>
    </section>    
  )
};

export default Counter;
