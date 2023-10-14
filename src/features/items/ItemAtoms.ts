import { atom } from 'recoil'
import type { Item } from '../../types'

export const itemsState = atom<Item[]>({
    key: 'items',
    default: [
        {
            id: 1,
            title: 'Bird Wing',
            detail: 'Farm from Beak for craft Adventure Garb Armor 2S',
            dueDate: '2023-10-01',
            progressOrder: 1,
        },
        {
            id: 2,
            title: 'Flower Nectar',
            detail: 'Farm from Pova for craft Revita',
            dueDate: '2023-10-02',
            progressOrder: 1,
        },
        {
            id: 3,
            title: 'Minotaur Skin',
            detail: 'Kill Minotaur Boss to get some Minotaur Skins to exchange for Anti-Degradation',
            dueDate: '2023-10-03',
            progressOrder: 2,
        },
        {
            id: 4,
            title: 'Energy Bottle',
            detail: 'Farm from Mech Little Boar to get some useful potions',
            dueDate: '2023-10-04',
            progressOrder: 2,
        },
        {
            id: 5,
            title: 'Mithril Ore',
            detail: "Farm from Nemico for use as a forging material",
            dueDate: '2023-10-05',
            progressOrder: 3,
        },
        {
            id: 6,
            title: 'Tasty Honey',
            detail: 'Farm from Antbee for craft Flower Nectar',
            dueDate: '2023-10-06',
            progressOrder: 4,
        },
    ],
})