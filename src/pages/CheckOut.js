import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import contries from '../components/contries'
const CheckOut = () => {
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const { cart, priceTotal, } = useGlobalContext()

    return(
    <article className='checkout-sec'>
        <h2 className='checkout-header f6'>Post Information</h2>
        <form className='checkout-form f4'>
            <select id="country" 
                name="country"
                onChange={(e)=>{
                    setCountry(e.currentTarget.value)
                }}
                required>
            <option>select country</option>
            {contries.map((cont) => {
                return(<option value={cont}>{cont}</option>)
            })}
            </select>
            <br/>
            <label for='city'>
                city :
            </label>
            <br/>
            <input className='f3' type='text' id='city'
            onChange={(e)=>setCity(e.currentTarget.value)}/>
            <br/>
            <label for='address'>
                address:
            </label>
            <br/>
            <input className='f3' type='text' id='adress'
            onChange={(e)=>setAddress(e.currentTarget.value)}/>
            <br/>
            <label for='postal-code'>
                postal code:
            </label>
            <br/>
            <input className='f3' type='text' id='postal-code'
            onChange={(e)=>setPostalCode(e.currentTarget.value)}/>
        </form>
        <section className='review-sec'>
            <h2 className='checkout-header f6'>
                Your Order
            </h2>
            <div className='review-container'>
            <table className='f2'>
                <tr>
                    <th>Product</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Amnt</th>
                    <th>Sum</th>
                </tr>
                {cart.map((item) => {
                return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.color}</td>
                    <td>{item.size}</td>
                    <td>{item.price}</td>
                    <td>{item.amount}</td>
                    <td>{item.price * item.amount}</td>
                </tr>)
                 })}
            </table>
            </div>
        </section>
        <section className='pay-sec f4'>
            <form className='pay-form'>
                <p className='f6'>Please select a payment method:</p>
                <input type="radio" id="paypal" name="payment" value="paypal"/>
                <label for="paypal">PayPal</label><br/>
                <input type="radio" id="credit" name="payment" value="credit"/>
                <label for="credit">Credit Card</label><br/>
            </form>
            <div className='pay-btn-div'>
            <Link className='pay-btn f6' to='/success'>
                pay
            </Link>
            <Link className='pay-btn f3' to='/'>
                Back to Home
            </Link>
            </div>
        </section>
    </article>
    )
}

export default CheckOut