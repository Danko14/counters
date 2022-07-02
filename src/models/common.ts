export interface IStore {
    maxId: number
    counters: { id: string; value: number }[]
}
