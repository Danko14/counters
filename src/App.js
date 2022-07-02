import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'

import { createStore } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import reducer from './redux/reducer'
import { add, incId } from './redux/actions'

import Counter from './components/Counter/Counter.tsx'

const store = createStore(reducer)

function App() {
    const counters = useSelector((state) => state.counters)
    const maxId = useSelector((state) => state.maxId)
    const dispatch = useDispatch()

    const addCounter = () => {
        let sum
        if (counters.length > 1) {
            sum = counters.reduce((x, y) => {
                return x + y.value
            }, 0)
        } else if (counters[0] != null) {
            sum = counters[0].value
        } else {
            sum = 0
        }

        dispatch(add(maxId + 1, sum))
        dispatch(incId())
    }

    return (
        <div className='App pt-3'>
            <button className='btn btn-primary' onClick={addCounter}>
                ADD
            </button>
            <div className='container'>
                {counters.map((counter, i) => (
                    <Counter
                        count={counter.value}
                        id={counter.id}
                        key={i}
                    ></Counter>
                ))}
            </div>
        </div>
    )
}

export default App
