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

export const completedItemsSelector = selector<Item[]>({
    key: 'completed_items',
    get: ({ get }) => {
        return get(itemsState).filter((item) => {
            return item.progressOrder === 4
        })
    },
})