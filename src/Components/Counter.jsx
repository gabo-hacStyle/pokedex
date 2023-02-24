import { useDispatch, useSelector } from "react-redux"
import { lessNumbers, setNumbers } from "../actions";

export const Counter = () => {
    const numbersState = useSelector(state => state.getIn(['count', 'numbers']))
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(setNumbers(numbersState + 2))}>Add</button>
            <button onClick={() => dispatch(lessNumbers(numbersState - 3))}>Less</button>
            <p>La cuenta es {numbersState}</p>
        </div>
    )
}