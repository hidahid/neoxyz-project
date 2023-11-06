import { useRecoilState } from "recoil"
import { itemsState } from "../ItemAtoms"
import type { Item } from "../../../types"
import { ITEM_PROGRESS_ID } from "../../../constants/app"

interface useItemActionType {
    completeItem: (itemId: number) => void
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

    return {
        completeItem,
    }
}