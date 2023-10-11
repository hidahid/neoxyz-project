// import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SideMenuLayout from './layouts/SideMenuLayout' // NESTED ROUTING
// import ItemSummary from './features/items/components/ItemSummary' // LINK TO ITEM SUMMARY PAGE

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
  return <RouterProvider router={router} />
}

export default App
