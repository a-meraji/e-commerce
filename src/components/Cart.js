import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { FaAngleDoubleDown } from 'react-icons/fa'
const Cart = () => {
    const {
        toggleCartBar,
        cartBar,
        clearCart,
        cart,
        priceTotal, } = useGlobalContext()  

    if (cart.length === undefined ||cart.length === 0){
        return (
            <section className={cartBar ?'cart_bar show_cart_bar': "cart_bar"}>
                <header>
                <button className='cart_btn' onClick={()=>toggleCartBar()}><FaAngleDoubleDown /></button>
                    <h2 className='font_lib f6 cream1'>Your Bag</h2>
                    <h4 className='font_lib f5 cream2'>is currently empty!</h4>
                </header>
            </section>
        )
    }
    else{
    return(
        <section className={cartBar ?'cart_bar show_cart_bar': "cart_bar"}>
      <header>
        <h1 className='font_lib f5 cart-header'>your bag</h1>
      </header>
      {/* cart items */}
      <button className='cart_btn' onClick={()=>toggleCartBar()}><FaAngleDoubleDown /></button>
      <div className='cart_container'>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <hr/>
      {/* cart footer */}
      <div className='cart-footer'>
        <div className='cart-total'>
          <h3>
            total :  <span>$ {priceTotal}</span>
          </h3>
        <button className='clear-btn f2' onClick={clearCart}>
          clear cart
        </button>
        </div>
        <div className='center-flex'>
        <Link 
          className='check-btn f5'
          onClick={()=>toggleCartBar()} 
          to='/checkout'>
          check out
        </Link>
        </div>
      </div>
    </section>
    )
      }
}

export default Cart