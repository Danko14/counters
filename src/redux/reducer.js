const initialState = { maxId: 0, counters: [{ id: 0, value: 0 }] }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC': {
            const idx = state.counters.findIndex((x) => x.id == action.payload)
            if (~idx) {
                state.counters[idx].value += 1
                return {
                    ...state,
                }
            } else {
                return { ...state }
            }
        }
        case 'DEC': {
            const counter = state.counters.find((x) => x.id == action.payload)
            counter.value = counter.value - 1
            return {
                ...state,
            }
        }
        case 'ADD':
            return {
                ...state,
                counters: [...state.counters, action.payload],
            }
        case 'INC_ID':
            return {
                ...state,
                maxId: state.maxId + 1,
            }
        case 'DEL': {
            return {
                ...state,
                counters: state.counters.filter((x) => x.id != action.payload),
            }
        }
        default:
            return state
    }
}

export default reducer
