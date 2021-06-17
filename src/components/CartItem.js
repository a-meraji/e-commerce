import React from 'react'
import { useGlobalContext } from '../context'
import { FaTrash, FaPlus, FaMinus  } from 'react-icons/fa'
const CartItem = ({ id, img, name, color, size, price, amount }) => {
  const { removeItem, handleAmount } = useGlobalContext()
  return (
    <article className='cart-item'>
      <img className='cart_img' src={img} alt={name} />
      <div className='cart-detail'>
        <h5 className='cart-title f6' >{name}</h5>
        <div className='cart-flex-detail f3'>
          <p>size : {size}</p>
          <p>color : {color}</p>
        </div>
        {/* remove button */}
        <h4 className='cart-price-each f2'>$ {price} : for each</h4>
        <div className='amount'>
      <div className='amount-container'>
        {/* increase amount */}
        <button className='amount-btn f0' onClick={() => handleAmount(id, 'dec')}>
          <FaMinus />
        </button>
        {/* amount */}
        <p className='amount-number f1'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn f0' onClick={() => handleAmount(id, 'inc')}>
          <FaPlus />
        </button>
      </div>
        <button className='remove-btn f3' onClick={() =>removeItem(id)}>
          <FaTrash />
        </button>
      </div>
      </div>
    </article>
  )
}

export default CartItem