const initialState = { maxId: 0, counters: [{ id: 0, value: 0 }] }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC': {
            return {
                ...state,
                counters: state.counters.map((counter) => {
                    if (counter.id == action.payload) {
                        return { ...counter, value: counter.value + 1 }
                    }
                    return counter
                }),
            }
        }
        case 'DEC': {
            return {
                ...state,
                counters: state.counters.map((counter) => {
                    if (counter.id == action.payload) {
                        return { ...counter, value: counter.value - 1 }
                    }
                    return counter
                }),
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
