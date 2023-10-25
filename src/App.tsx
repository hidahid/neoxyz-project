// import React from 'react'
import { RecoilRoot } from 'recoil' // RECOIL
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // ROUTER
import SideMenuLayout from './layouts/SideMenuLayout' // NESTED ROUTING
import ItemSummary from './features/items/components/ItemSummary' // LINK TO ITEM SUMMARY PAGE
import ItemList from './features/items/components/ItemList/ItemList' // LINK TO ITEM LIST PAGE
import ItemProgress from './features/items/components/ItemProgress/ItemProgress' // LINK TO ITEM PROGRESS PAGE

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <SideMenuLayout />
      </div>
    ),
    children: [
      {
        path: '/',
        element: <ItemSummary />,
      },
      {
        path: '/item-list',
        element: <ItemList />,
      },
      {
        path: '/item-progress',
        element: <ItemProgress />,
      },
    ],
  },
])

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
