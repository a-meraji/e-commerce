import React from 'react'
import {
    FaBehance,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaRegCopyright,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return <footer>
        <h2 className='footer_h2 f7'>
            follow us on
        </h2>
        
        <ul className='footer_social_ul'>
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
        <ul className='footer_links_ul'>
            <li>
                <Link className='footer_links_a f2' to='/'>Contacts</Link>
            </li>
            <li>
                <Link className='footer_links_a f2' to='/'>privacy & policy</Link>
            </li>
            <li>
                <Link className='footer_links_a f2' to='/'>cookies</Link>
            </li>
        </ul>
        <p className='copyright f1'>copyright <FaRegCopyright/> {new Date().getFullYear()} AllRights Reserved</p>
    </footer>
}

export default Footer