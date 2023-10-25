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

const ItemProgress = (): JSX.Element => {
  const notStartedItems: Item[] = useRecoilValue(notStartedItemsSelector)

  const inProgressItems: Item[] = useRecoilValue(inProgressItemsSelector)

  const waitingItems: Item[] = useRecoilValue(waitingItemsSelector)

  const completedItems: Item[] = useRecoilValue(completedItemsSelector)

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Item Progress</h1>
      <div style={styles.itemCategories}>
        <ItemColumn columnTitle="Not Started" items={notStartedItems} />
        <ItemColumn columnTitle="In Progress" items={inProgressItems} />
        <ItemColumn columnTitle="In Review / Waiting" items={waitingItems} />
        <ItemColumn columnTitle="Completed" items={completedItems} />
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
