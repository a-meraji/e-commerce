import React from 'react'
import { useGlobalContext } from '../context'
import Categories from '../components/Categories'
import { Link } from 'react-router-dom'

const Products = () => {
    const { category,  products} = useGlobalContext()

    return(
        <React.Fragment>
        <Categories />
        <section className="products">
            <h1 className='font_lib f6 header_title'>{category}</h1>
            <div className='product_container'>
            {products.map((item) => {
                return(
                    <Link className='product' to={`/product/:${item.id}`} key={item.id}>
                        <div className='product_img_container'>
                            <img className='product_img' 
                                src={item.images[0]['url'][0]}
                                alt={item.name}
                                onTouchStart={ e => e.currentTarget.src = item.hoverImg }
                                onMouseEnter={ e => e.currentTarget.src = item.hoverImg }
                                onTouchEnd  ={ e => e.currentTarget.src = item.images[0]['url'][0] }
                                onMouseLeave={ e => e.currentTarget.src = item.images[0]['url'][0]}
                            />
                        </div>
                        <div className='product_datail_container'>
                            <p className='product_title f3'>{item.name}</p>
                            <p className='product_price f2'>$ {item.price}</p>
                        </div>
                    </Link>
                )
             })}
            </div>
        </section>
        </React.Fragment>
    )
}

export default Products