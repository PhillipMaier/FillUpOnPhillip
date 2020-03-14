import React from 'react'

import 'react-grid-layout/css/styles.css'
import { Responsive, WidthProvider } from 'react-grid-layout'

import { breakpoints, columns } from '../layouts'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

const ResponsiveGridLayout = ({ children, layouts, ...props }: any) => {
  console.log('layouts', layouts)
  return (
    <ResponsiveReactGridLayout
      rowHeight={20}
      breakpoints={breakpoints}
      cols={columns}
      isResizable
      layouts={layouts}
      draggableCancel=".react-grid-cancel-drag"
      draggableHandle=".react-grid-handle-drag"
      {...props}
    >
      {children}
    </ResponsiveReactGridLayout>
  )
}

export { ResponsiveGridLayout }
