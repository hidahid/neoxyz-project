// import React from 'react'
import type { Item, CSSProperties } from '../../../../types'

interface ItemListItemProps {
  item: Item
}

const getProgressCategory = (progressOrder: number): string => {
  switch (progressOrder) {
    case 1:
      return 'Not Started'
    case 2:
      return 'In Progress'
    case 3:
      return 'Waiting/In Review'
    case 4:
      return 'Completed'
    default:
      return 'Not Started'
  }
}

const ItemListUnit = ({ item }: ItemListItemProps): JSX.Element => {
  return (
    <div style={styles.tableBody}>
      <div style={styles.tableBodyItemTitle}>
        <span className="material-icons">check_circle</span>
        {item.title}
      </div>
      <div style={styles.tableBodyDetail}>{item.detail}</div>
      <div style={styles.tableBodyDueDate}>{item.dueDate}</div>
      <div style={styles.tableBodyprogress}>{getProgressCategory(item.progressOrder)}</div>
      <div>
        <span className="material-icons" style={styles.menuIcon}>
          more_horiz
        </span>
      </div>
    </div>
  )
}

const styles: CSSProperties = {
  tableBody: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #D8D8D8',
    fontSize: '20px',
    position: 'relative',
  },
  tableBodyItemTitle: {
    width: '15%',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    overflowWrap: 'anywhere',
    borderRight: '1px solid #D8D8D8',
  },
  tableBodyDetail: {
    width: '30%',
    padding: '16px',
    overflowWrap: 'anywhere',
    borderRight: '1px solid #D8D8D8',
  },
  tableBodyDueDate: {
    width: '10%',
    padding: '16px',
    borderRight: '1px solid #D8D8D8',
  },
  tableBodyprogress: {
    width: '15%',
    padding: '16px',
  },
  menuIcon: {
    cursor: 'pointer',
  },
}

export default ItemListUnit
