// import React from 'react'
import type { Item, CSSProperties } from '../../../../types'
import { ITEM_PROGRESS_STATUS, ITEM_PROGRESS_ID } from '../../../../constants/app'

interface ItemListItemProps {
  item: Item
}

const getProgressCategory = (progressOrder: number): string => {
  switch (progressOrder) {
    case ITEM_PROGRESS_ID.NOT_STARTED:
      return ITEM_PROGRESS_STATUS.NOT_STARTED
    case ITEM_PROGRESS_ID.IN_PROGRESS:
      return ITEM_PROGRESS_STATUS.IN_PROGRESS
    case ITEM_PROGRESS_ID.WAITING:
      return ITEM_PROGRESS_STATUS.WAITING
    case ITEM_PROGRESS_ID.COMPLETED:
      return ITEM_PROGRESS_STATUS.COMPLETED
    default:
      return ITEM_PROGRESS_STATUS.NOT_STARTED
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
