import { v4 as uuid } from 'uuid'

import Shoe1 from '../img/jpgs/shoe-1.jpg';
import Shoe2 from '../img/jpgs/shoe-2.jpg';
import Shoe3 from '../img/jpgs/shoe-3.jpg';
import Shoe4 from '../img/jpgs/shoe-4.jpg';
import Shoe5 from '../img/jpgs/shoe-5.jpg';

import Jew1 from '../img/jpgs/jew-1.jpg';
import Jew2 from '../img/jpgs/jew-2.jpg';
import Jew3 from '../img/jpgs/jew-3.jpg';
import Jew4 from '../img/jpgs/jew-4.jpg';
import Jew5 from '../img/jpgs/jew-5.jpg';

import Jeans1 from '../img/jpgs/jeans-1.jpg';
import Jeans2 from '../img/jpgs/jeans-2.jpg';

import Shirt1 from '../img/jpgs/shirt-1.jpg';
import Shirt2 from '../img/jpgs/shirt-2.jpg';
import Shirt3 from '../img/jpgs/shirt-3.jpg';

export const shoeData = [
    {
        img: Shoe1,
        id: uuid(),
        title:"Men's Sneakers",
        price: '$12.5'
    },
    {
        img: Shoe2,
        id: uuid(),
        title:"Unisex All Stars Sneakers",
        price: '$8.99'
    },
    {
        img: Shoe3,
        id: uuid(),
        title:"Female Blue Heels",
        price: '$13.0'
    },
    {
        img: Shoe4,
        id: uuid(),
        title:"Men's White Trainers",
        price: '$11.0'
    },
    {
        img: Shoe5,
        id: uuid(),
        title:"Ladies Heels Nude",
        price: '$10.99'
    },
   
]

export const jewData = [
    {
        img: Jew1,
        id: uuid(),
        title:"Gold Ring With Diamonds",
        price: '$80.0'
    },
    {
        img: Jew2,
        id: uuid(),
        title:"15 carat beads",
        price: '$129.99'
    },
    {
        img: Jew3,
        id: uuid(),
        title:"Ring",
        price: '$69.99'
    },
    {
        img: Jew4,
        id: uuid(),
        title:"Diamond Bracelets",
        price: '$110.99'
    },
    {
        img: Jew5,
        id: uuid(),
        title:"Gold Necklace",
        price: '$49.99'
    },
   
]


export const clothesData = [
    {
        img: Jeans1,
        id: uuid(),
        title:"Men's Denims",
        price: '$12.5'
    },
    {
        img: Jeans2,
        id: uuid(),
        title:"Men's stock Jeans",
        price: '$8.99'
    },
    {
        img: Shirt1,
        id: uuid(),
        title:"Men's round neck polo(pale yellow)",
        price: '$13.0'
    },
    {
        img: Shirt2,
        id: uuid(),
        title:"Men's shirt white",
        price: '$11.0'
    },
    {
        img: Shirt3,
        id: uuid(),
        title:"Men's shirt Black",
        price: '$10.99'
    },
   
]