// import React from 'react'
import { RecoilRoot } from 'recoil' // RECOIL
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // ROUTER
import SideMenuLayout from './layouts/SideMenuLayout' // NESTED ROUTING
import ItemSummary from './features/items/components/ItemSummary' // LINK TO ITEM SUMMARY PAGE
import SideMenu from './components/SideMenu'

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
        element: <SideMenu />,
      },
      {
        path: '/item-progress',
        element: <SideMenu />,
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
