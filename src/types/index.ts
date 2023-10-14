import React from 'react'
export interface CSSProperties {
    [key: string]: React.CSSProperties
}

export interface Item {
    id: number
    title: string
    detail: string
    dueDate: string
    progressOrder: number
}