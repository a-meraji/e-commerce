import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../context'
import { FaTimes } from 'react-icons/fa' 
import {
    FaBehance,
    FaFacebook,
    FaTwitter,
    FaInstagram,
} from 'react-icons/fa'


const SideBar = () => {
    const { toggleSideBar, sideBar, setCategory } = useGlobalContext()

    return (
        <div className={sideBar ?'side_bar show_side_bar': "side_bar"}>
            <button className='side_btn' onClick={()=>toggleSideBar()}><FaTimes /></button>
            <ul className='side_ul font_lib'>
                <li className='side_li' onClick={()=>toggleSideBar()}>
                    <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
                </li>
                <li className='side_li' onClick={()=>toggleSideBar()}>
                    <Link to='/about'>About</Link>
                </li>
                <li className='side_li' onClick={()=>toggleSideBar()}>
                <Link onClick={()=>setCategory('all')} to={`/products/all`}>
                    Categories
                </Link>
                </li>
            </ul>
            <ul className='social_ul'>
                <li>
                    <a className='social_icon f5' href='https://twitter.com/mamad_coder'><FaFacebook/></a>
                </li>
                <li>
                    <a className='social_icon f5' href='https://twitter.com/mamad_coder'><FaInstagram/></a>
                </li>
                <li>
                    <a className='social_icon f5' href='https://twitter.com/mamad_coder'><FaTwitter/></a>
                </li>
                <li>
                    <a className='social_icon f5' href='https://twitter.com/mamad_coder'><FaBehance/></a>
                </li>
            </ul>
        </div> 
    )
}

export default SideBar