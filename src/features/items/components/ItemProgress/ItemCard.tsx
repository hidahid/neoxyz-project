import React from 'react'
import type { Item, CSSProperties } from '../../../../types'

interface ItemCardProps {
  item: Item
}

const getArrowPositionStyle = (progressOrder: number): React.CSSProperties => {
  const justifyContentValue: 'flex-end' | 'space-between' =
    progressOrder === 1 ? 'flex-end' : 'space-between'
  return {
    display: 'flex',
    justifyContent: justifyContentValue,
  }
}

const ItemCard = ({ item }: ItemCardProps): JSX.Element => {
  return (
    <div style={styles.itemCard}>
      <div style={styles.itemIcons}>
        <div className="material-icons">check_circle</div>
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
        {item.progressOrder !== 1 && <button className="material-icons">chevron_left</button>}
        {item.progressOrder !== 4 && <button className="material-icons">chevron_right</button>}
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
