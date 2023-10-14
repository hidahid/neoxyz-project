// import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { completedItemsSelector, uncompletedItemsSelector } from '../ItemSelectors'
import type { Item, CSSProperties } from '../../../types'

const ItemSummary = (): JSX.Element => {
  const completedItems = useRecoilValue<Item[]>(completedItemsSelector)

  const uncompletedItems = useRecoilValue<Item[]>(uncompletedItemsSelector)

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Summary of Your Items</h1>
      <div style={styles.list}>
        <span className="material-icons">check_circle</span>
        <h2>
          You have completed {completedItems.length} {completedItems.length <= 1 ? 'item' : 'items'}
        </h2>
      </div>
      <div style={styles.list}>
        <span className="material-icons">list</span>
        <h2>
          You still have {uncompletedItems.length} {uncompletedItems.length <= 1 ? 'item' : 'items'}{' '}
          left
        </h2>
      </div>
      <div style={styles.links}>
        <Link to="/item-list" style={styles.link}>
          See Your Item List
        </Link>
        <Link to="/item-progress" style={styles.link}>
          Manage Your Item Progress
        </Link>
      </div>
    </div>
  )
}

const styles: CSSProperties = {
  container: {
    padding: '40px',
  },
  heading: {
    color: '#55C89F',
    marginBottom: '60px',
  },
  list: {
    color: '#fff',
    backgroundColor: '#55C89F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '40px',
    width: '60%',
  },
  links: {
    display: 'flex',
  },
  link: {
    padding: '16px',
    marginRight: '24px',
    backgroundColor: '#55ACC8',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
  },
}

export default ItemSummary
