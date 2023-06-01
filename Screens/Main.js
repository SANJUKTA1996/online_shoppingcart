import React, { useEffect } from "react";
import {View,Text} from 'react-native';
import AppNavigation from "./AppNavigation";
import { addMyProducts } from "../src/newredux/MyProductSlice";
import { useDispatch} from 'react-redux';

const items = [
    {
        id: 0,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
        name: 'XRay Jr Dark Shad Lace-Up Causual Shoes',
        brand: 'PUMA',
        price: 2500,
        qty: 0,
    },
    {
        id: 1,
        image: 'https://m.media-amazon.com/images/I/71esFp02LiL._UL1500_.jpg',
        name: 'Sneakers For Men (Navy)',
        brand: 'RED TAPE',
        price: 999,
        qty: 0,
    },
    {
        id: 2,
        image: 'https://www.dealsmagnet.com/images/Provogue-Canvas-Shoes-For-Men-o-141jvhj7.jpg',
        name: 'Sneakers For Men (Navy)',
        brand: 'PROVOGUE',
        price: 449,
        qty: 0,
    },
    {
        id: 3,
        image: 'https://www.pngpacks.com/uploads/data/602/thumbs/IMG_S5xNihHexzcI.png',
        name: 'Ankar shoes   (Navy)',
        brand: 'ask',
        price: 550,
        qty: 0
    },
];
const Main=()=>{
 
   const dispatch=useDispatch();
    useEffect(()=>{
        items.map(item=>{
            dispatch(addMyProducts(item));
            
        });

    },[]);

  return(
 
   <AppNavigation/>
   )
  
}
export default Main;