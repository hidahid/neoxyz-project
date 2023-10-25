// import React from 'react'
import { useRecoilValue } from 'recoil'
import {
  notStartedItemsSelector,
  inProgressItemsSelector,
  waitingItemsSelector,
  completedItemsSelector,
} from '../../ItemSelectors'
import ItemColumn from './ItemColumn'
import type { Item, CSSProperties } from '../../../../types'
import { ITEM_PROGRESS_STATUS } from '../../../../constants/app'

const ItemProgress = (): JSX.Element => {
  const notStartedItems: Item[] = useRecoilValue(notStartedItemsSelector)

  const inProgressItems: Item[] = useRecoilValue(inProgressItemsSelector)

  const waitingItems: Item[] = useRecoilValue(waitingItemsSelector)

  const completedItems: Item[] = useRecoilValue(completedItemsSelector)

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Item Progress</h1>
      <div style={styles.itemCategories}>
        <ItemColumn columnTitle={ITEM_PROGRESS_STATUS.NOT_STARTED} items={notStartedItems} />
        <ItemColumn columnTitle={ITEM_PROGRESS_STATUS.IN_PROGRESS} items={inProgressItems} />
        <ItemColumn columnTitle={ITEM_PROGRESS_STATUS.WAITING} items={waitingItems} />
        <ItemColumn columnTitle={ITEM_PROGRESS_STATUS.COMPLETED} items={completedItems} />
      </div>
    </div>
  )
}

const styles: CSSProperties = {
  container: {
    padding: '20px',
  },
  heading: {
    color: '#55C89F',
    marginBottom: '60px',
  },
  itemCategories: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}

export default ItemProgress
