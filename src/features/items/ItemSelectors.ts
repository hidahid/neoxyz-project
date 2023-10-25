import { selector } from 'recoil'
import { itemsState } from './ItemAtoms'
import type { Item } from '../../types'
import { SelectorKeys } from '../../constants/recoilKeys'

export const uncompletedItemsSelector = selector<Item[]>({
    key: SelectorKeys.UNCOMPLETED_ITEMS,
    get: ({ get }) => {
        return get(itemsState).filter((item) => {
            return item.progressOrder !== 4
        })
    },
})

export const notStartedItemsSelector = selector<Item[]>({
    key: SelectorKeys.NOT_STARTED_ITEMS,
    get: ({ get }) => {
        return get(itemsState).filter((item) => {
            return item.progressOrder === 1
        })
    },
})

export const inProgressItemsSelector = selector<Item[]>({
    key: SelectorKeys.IN_PROGRESS_ITEMS,
    get: ({ get }) => {
        return get(itemsState).filter((item) => {
            return item.progressOrder === 2
        })
    },
})

export const waitingItemsSelector = selector<Item[]>({
    key: SelectorKeys.WAITING_ITEMS,
    get: ({ get }) => {
        return get(itemsState).filter((item) => {
            return item.progressOrder === 3
        })
    },
})

export const completedItemsSelector = selector<Item[]>({
    key: SelectorKeys.COMPLETED_ITEMS,
    get: ({ get }) => {
        return get(itemsState).filter((item) => {
            return item.progressOrder === 4
        })
    },
})