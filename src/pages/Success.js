import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const Success = () => {
    const { clearCart } = useGlobalContext()
    useEffect(()=>{
        clearCart()
    },[])
    return(
        <article className='success'>
            <h1 className='success-header f8'>
                Your order has submited successfully!
            </h1>
            <h3 className='f5'>you will receive your order untill next 5 days</h3>
            <div className='success-btn f6' >
                <Link to={process.env.PUBLIC_URL + '/'}>
                    Back to Home
                </Link>
            </div>
        </article>
    )
}

export default Success