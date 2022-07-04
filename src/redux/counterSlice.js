import { createSlice } from '@reduxjs/toolkit'

const initialState = { maxId: 0, counters: [{ id: 0, value: 0 }] }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        inc: (state, action) => {
            const counter = state.counters.find((x) => x.id == action.payload)
            counter.value += 1
        },
        dec: (state, action) => {
            const counter = state.counters.find((x) => x.id == action.payload)
            counter.value -= 1
        },
        add: (state, action) => {
            state.counters.push(action.payload)
        },
        del: (state, action) => {
            const idx = state.counters.findIndex((x) => x.id == action.payload)
            state.counters.splice(idx, 1)
        },
        incId: (state) => {
            state.maxId += 1
        },
    },
})

const { actions, reducer } = counterSlice

export default reducer
export const { inc, dec, add, del, incId } = actions
