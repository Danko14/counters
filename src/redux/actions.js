export const inc = (id) => ({ type: 'INC', payload: id })
export const dec = (id) => ({ type: 'DEC', payload: id })
export const add = (id, count) => ({
    type: 'ADD',
    payload: { id: id, value: count },
})
export const del = (id) => ({ type: 'DEL', payload: id })
export const incId = () => ({ type: 'INC_ID' })
