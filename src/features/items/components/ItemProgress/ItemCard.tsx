import React from 'react'
import type { Item, CSSProperties } from '../../../../types'
import { ITEM_PROGRESS_ID } from '../../../../constants/app'
import { useRecoilState } from 'recoil'
import { itemsState } from '../../ItemAtoms'

interface ItemCardProps {
  item: Item
}

const getIconStyle = (progressOrder: number): React.CSSProperties => {
  const color: '#55C89F' | '#C5C5C5' =
    progressOrder === ITEM_PROGRESS_ID.COMPLETED ? '#55C89F' : '#C5C5C5'

  const cursor: 'default' | 'pointer' =
    progressOrder === ITEM_PROGRESS_ID.COMPLETED ? 'default' : 'pointer'

  return {
    color,
    cursor,
    fontSize: '28px',
  }
}

const getArrowPositionStyle = (progressOrder: number): React.CSSProperties => {
  const justifyContentValue: 'flex-end' | 'space-between' =
    progressOrder === ITEM_PROGRESS_ID.NOT_STARTED ? 'flex-end' : 'space-between'
  return {
    display: 'flex',
    justifyContent: justifyContentValue,
  }
}

const ItemCard = ({ item }: ItemCardProps): JSX.Element => {
  const [items, setItems] = useRecoilState<Item[]>(itemsState)

  const completeItem = (itemId: number): void => {
    const updatedItems: Item[] = items.map((item) =>
      item.id === itemId ? { ...item, progressOrder: ITEM_PROGRESS_ID.COMPLETED } : item,
    )
    setItems(updatedItems)
  }

  return (
    <div style={styles.itemCard}>
      <div style={styles.itemIcons}>
        <div
          className="material-icons"
          style={getIconStyle(item.progressOrder)}
          onClick={(): void => {
            completeItem(item.id)
          }}
        >
          check_circle
        </div>
        <div className="material-icons" style={styles.menuIcon}>
          more_vert
        </div>
      </div>
      <p style={styles.itemTitle}>{item.title}</p>
      <div>
        <p>{item.detail}</p>
      </div>
      <div>
        <p>Due on {item.dueDate}</p>
      </div>
      <div style={getArrowPositionStyle(item.progressOrder)}>
        {item.progressOrder !== ITEM_PROGRESS_ID.NOT_STARTED && (
          <button className="material-icons">chevron_left</button>
        )}
        {item.progressOrder !== ITEM_PROGRESS_ID.COMPLETED && (
          <button className="material-icons">chevron_right</button>
        )}
      </div>
    </div>
  )
}

const styles: CSSProperties = {
  itemCard: {
    backgroundColor: '#C7EFD0',
    borderRadius: '12px',
    padding: '24px',
    margin: '12px 0',
    fontSize: '20px',
    overflowWrap: 'anywhere',
    position: 'relative',
  },
  itemIcons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuIcon: {
    cursor: 'pointer',
  },
  itemTitle: {
    fontSize: '30px',
  },
  arrowsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}

export default ItemCard
