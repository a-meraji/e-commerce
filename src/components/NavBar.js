import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { FaShoppingBasket, FaBars } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const NavBar = () => {
    const { toggleCartBar, toggleSideBar, ...state } = useGlobalContext()
    const [scrolled, setScrolled] = useState(false)

    const changeColor = () => {
        if(window.scrollY >= 65){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    } 
    window.addEventListener('scroll', changeColor)
    return(
        <nav className={scrolled ? 'scrolled' : ''}>
            <Link to='/'>
                <div className='logo f7'>
                    <h3>REVIGA</h3>
                </div>
            </Link>
            <div className='nav_items'>
                <button className='cart_icon nav_icon f5' onClick={()=>toggleCartBar()}>
                    <div> <FaShoppingBasket /> </div>
                    <div className='cart_icon_number f1'> <h5>{state.amount}</h5> </div>
                </button>
                <button className='nav_icon f5' onClick={()=>toggleSideBar()}><FaBars/></button>
            </div>
        </nav>
    )
}

export default NavBar