// import React from 'react'
import { useRecoilValue } from 'recoil'
import { itemsState } from '../../ItemAtoms'
import ItemListUnit from './ItemListUnit'
import type { Item, CSSProperties } from '../../../../types'

const ItemList = (): JSX.Element => {
  const items: Item[] = useRecoilValue(itemsState)

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Your Items</h1>
      <div style={styles.itemButtons}>
        <button style={styles.button}>
          <span className="material-icons">add</span>Add item
        </button>
        <button style={styles.button}>
          <span className="material-icons">sort</span>Filter items
        </button>
      </div>
      <div>
        <div style={styles.tableHead}>
          <div style={styles.tableHeaderItemName}>Item Name</div>
          <div style={styles.tableHeaderDetail}>Detail</div>
          <div style={styles.tableHeaderDueDate}>Due Date</div>
          <div style={styles.tableHeaderProgress}>Progress</div>
        </div>
        {items.map((item: Item) => {
          return <ItemListUnit item={item} key={item.id} />
        })}
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
  itemButtons: {
    display: 'flex',
    marginBottom: '30px',
    position: 'relative',
  },
  button: {
    padding: '16px',
    fontSize: '16px',
    marginRight: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  tableHead: {
    display: 'flex',
    fontSize: '24px',
    borderBottom: '1px solid #D8D8D8',
  },
  tableHeaderItemName: {
    padding: '16px',
    width: '15%',
  },
  tableHeaderDetail: {
    padding: '16px',
    width: '30%',
  },
  tableHeaderDueDate: {
    padding: '16px',
    width: '10%',
  },
  tableHeaderProgress: {
    padding: '16px',
    width: '15%',
  },
}

export default ItemList
