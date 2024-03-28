import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../stores'
import { decrement, increment } from '../../stores/features/counter/counterSlice'

export default function CounterPage() {
    const counter = useSelector((state: RootState) => state.counter)
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    const counterStatus = () => {
        console.log('counter', counter)
    }

    useEffect(() => {
        console.log('counter val changed: ', counter);
    }, [count])

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
            <button onClick={counterStatus}>
                Counter Status
            </button>
        </div>
    )
}