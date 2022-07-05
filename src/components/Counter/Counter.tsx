import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Counter.scss'

import { inc, dec, del } from '../../redux/actions'
import { IStore } from '../../models/common'

interface CounterProps {
    // fourth?: boolean
    count: number
    key: number
    id: string
    inc: any
    dec: any
}

const Counter: FC<CounterProps> = ({ count, id }) => {
    const counter = useSelector(
        (state: IStore) => state.counters.find((x) => x.id == id)?.value
    )

    const counters = useSelector((state: IStore) => state.counters)

    const fourth = useSelector((state: IStore) => {
        const idx = state.counters.findIndex((x) => x.id == id)
        return (idx + 1) % 4 === 0 && idx !== 0
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if (!fourth) {
            return
        }

        const timer = setInterval(() => {
            dispatch(inc(id))
        }, 1000)

        return () => clearInterval(timer)
    }, [counters.length])

    return (
        <div className='Counter'>
            <div className='container align-items-start pt-3'>
                <h2 id='counter'>{counter}</h2>
                {!fourth && (
                    <div className='container'>
                        <button
                            id='dec'
                            className='btn btn-primary mr-2'
                            onClick={() => dispatch(dec(id))}
                        >
                            DEC
                        </button>
                        <button
                            id='inc'
                            className='btn btn-primary mr-2'
                            onClick={() => dispatch(inc(id))}
                        >
                            INC
                        </button>
                    </div>
                )}
                <button
                    className='btn btn-primary mt-1'
                    onClick={() => dispatch(del(id))}
                >
                    DEL
                </button>
            </div>
        </div>
    )
}

export default Counter
