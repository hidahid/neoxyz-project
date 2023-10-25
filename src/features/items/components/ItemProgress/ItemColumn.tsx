// import React from 'react'
import ItemCard from './ItemCard'
import type { Item, CSSProperties } from '../../../../types'

interface ItemColumnProps {
  columnTitle: string
  items: Item[]
}

const ItemColumn = ({ columnTitle, items }: ItemColumnProps): JSX.Element => {
  return (
    <div style={styles.categoryColumn}>
      <div style={styles.columnTitleWrapper}>
        <h2 style={styles.categoryTitle}>{columnTitle}</h2>
        <div className="material-icons" style={styles.plusIcon}>
          add
        </div>
      </div>
      <div>
        {items.map((item: Item) => {
          return <ItemCard key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

const styles: CSSProperties = {
  plusIcon: {
    cursor: 'pointer',
  },
  categoryColumn: {
    width: '22%',
  },
  columnTitleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 4px',
  },
}

export default ItemColumn
