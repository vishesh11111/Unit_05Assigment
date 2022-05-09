// https://www.tannergoods.com/
import { Navbar } from "./Navbar"
import { Slide } from "./slide"
import { NavLine } from "./NavLine"
import {Product1} from "./product1"
import { Product2 } from "./product2"

export const Home = ()=>{

    return (
        <div>
            <Navbar/>
            <NavLine/>
            <Slide/>
            <Product1/>
            <Product2/>
            wlc Home
        </div>
    )
} 