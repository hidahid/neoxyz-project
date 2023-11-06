import { useRecoilState } from "recoil"
import { itemsState } from "../ItemAtoms"
import type { Item } from "../../../types"
import { ITEM_PROGRESS_ID } from "../../../constants/app"

interface useItemActionType {
    completeItem: (itemId: number) => void
    moveItemCard: (itemId: number, directionNumber: 1 | -1) => void
}

export const useItemsAction = (): useItemActionType => {
    const [items, setItems] = useRecoilState<Item[]>(itemsState)

    const completeItem = (itemId: number): void => {
        const updatedItems: Item[] = items.map((item) =>
            item.id === itemId ? { ...item, progressOrder: ITEM_PROGRESS_ID.COMPLETED }
                : item,
        )
        setItems(updatedItems)
    }

    const moveItemCard = (itemId: number, directionNumber: 1 | -1): void => {
        const updatedItems: Item[] = items.map((item) =>
            item.id === itemId
                ?
                {
                    ...item,
                    progressOrder: item.progressOrder + directionNumber
                }
                : item,
        )
        setItems(updatedItems)
    }

    return {
        completeItem,
        moveItemCard,
    }
}