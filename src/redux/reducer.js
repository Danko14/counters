import { createReducer } from '@reduxjs/toolkit'

import * as actions from './actions'

const initialState = { maxId: 0, counters: [{ id: 0, value: 0 }] }

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.inc, (state, action) => {
            const counter = state.counters.find((x) => x.id == action.payload)
            counter.value += 1
        })
        .addCase(actions.dec, (state, action) => {
            const counter = state.counters.find((x) => x.id == action.payload)
            counter.value -= 1
        })
        .addCase(actions.add, (state, action) => {
            state.counters.push(action.payload)
        })
        .addCase(actions.del, (state, action) => {
            const idx = state.counters.findIndex((x) => x.id == action.payload)
            state.counters.splice(idx, 1)
        })
        .addCase(actions.incId, (state) => {
            state.maxId += 1
        })
})

export default reducer
