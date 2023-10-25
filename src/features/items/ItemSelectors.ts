import { selector } from 'recoil'
import { itemsState } from './ItemAtoms'
import type { Item } from '../../types'

export const uncompletedItemsSelector = selector<Item[]>({
    key: 'uncompleted_items',
    get: ({ get }) => {
        return get(itemsState).filter((item) => {
            return item.progressOrder !== 4
        })
    },
})

export const notStartedItemsSelector = selector<Item[]>({
    key: 'notStarted_items',
    get: ({ get }) => {
        return get(itemsState).filter((item) => {
            return item.progressOrder === 1
        })
    },
})

export const inProgressItemsSelector = selector<Item[]>({
    key: 'inProgress_items',
    get: ({ get }) => {
        return get(itemsState).filter((item) => {
            return item.progressOrder === 2
        })
    },
})

export const waitingItemsSelector = selector<Item[]>({
    key: 'waiting_items',
    get: ({ get }) => {
        return get(itemsState).filter((item) => {
            return item.progressOrder === 3
        })
    },
})

export const completedItemsSelector = selector<Item[]>({
    key: 'completed_items',
    get: ({ get }) => {
        return get(itemsState).filter((item) => {
            return item.progressOrder === 4
        })
    },
})