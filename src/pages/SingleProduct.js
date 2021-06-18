import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../context'
import FeaturedNew from '../components/FeaturedNew'
import { useParams } from 'react-router'
import { FaAngleDoubleDown, FaAngleDoubleRight } from 'react-icons/fa'

const SingleProduct = () => {
    const id = useParams()
    const prod = useRef()
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        const it = fetchPro(id)
        prod.current=it
        setPic(it.img[0])
        if(prod.current!==null)
            setLoading(false)
    },[id])

    const { fetchPro, addItem, toggleCartBar } = useGlobalContext()
    const[pic, setPic] = useState({})
    const [size, setSize] = useState(0)
    const [amount, setAmount] = useState(1)

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    const addToCart = () =>{
        if(size === 0){
            alert ('Please select your size')
        }else{
            const reff = prod.current
            const newItem = {
                id: 1,
                proId:`${reff.id}`,
                name: `${reff.title}`,
                color: pic['color'],
                price: reff.price,
                amount: amount,
                size: size,
                img: pic['url'][0],
            }
            addItem(newItem)
        }
    }
    const selectedClass = (e) => {
        var btns= e.target.parentElement.getElementsByClassName('btnArr')
        for(var i=0; i < btns.length; i++){
            if (btns[i].classList.contains('selected')){
                btns[i].classList.remove('selected')
            }
        }
        e.target.classList.add('selected')
    }
  
    if(loading === false ){
        const{title,
            price,
            img,
            sizes} = prod.current
    return(
        <React.Fragment>
        <section className='sngl'>
            <form className='abs' onSubmit={handleSubmit}>
            <div className='sngl_grid'>
                <div className='gr2 sngl_clrs'>
                    {img.map(({color, url})=>{
                        return(<React.Fragment>
                                <input 
                                    type='button' 
                                    className='clr btnArr f2'
                                    onClick={(e)=>{setPic({color, url});selectedClass(e)}} 
                                    key={color} id={ color}
                                    value={color}
                                />
                                <label for={color}></label>
                                </React.Fragment>)
                    })}
                </div>
                <div className='gr3 sngl_sizes'>
                    {sizes.map((item) => {
                        return(
                            <button className='size_btn btnArr f2' key={item} onClick={(e)=>{setSize(item);selectedClass(e)}}>
                                {item}
                            </button>)
                    })}
                </div>
                <div className='gr4 sngl_img_cnt'>
                    <img className='sngl_img' src={pic['url'][0]} alt={title}/>
                </div>
            </div>
            <div className='grd_txt'>
            <div className='sngl_txt_container'>
                <p className='sngl_product_title font_lib f5'>{title}</p>
                <p className='product_desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis semper fringilla. Aliquam fringilla justo at nisi vulputate pharetra. Curabitur bibendum ultrices mi id accumsan. Nunc vestibulum commodo bibendum. Cras accumsan lectus sit amet metus ornare, ac bibendum elit dignissim.
                </p>
                <div className='amount_price f3'>
                    <p className='product_price'>${price}</p>
                    <input className='input_amount' type='number' placeholder='1' onChange={e => setAmount( parseInt(e.target.value))}/>
                </div>
                <div className='sngl_repeat_btns'>
                <div>
                <p>color: </p>
                    <select 
                    onChange= {e=>{setPic(img[e.currentTarget.value])}}>
                    {img.map(({color, url},index)=>{
                    return(<React.Fragment>
                            <option
                                 key={color} 
                                 id={ color}
                                value={index}
                            >{color}</option>
                            </React.Fragment>)
                        })}
                    </select>
                </div>
                <div>
                <p>size: </p>
                    <select onChange={(e)=>{setSize(e.currentTarget.value)}}>
                    {sizes.map((item) => {
                    return(
                        <option 
                            key={item}
                            value={item}>
                            {item}
                        </option>)
                    })}
                    </select>
                </div>
                </div>
                <div>
                <input className='input_submit'  type='submit' id='buy_btn' onClick={()=>addToCart()}/>
                <label className='input_label f2 onHover' for='buy_btn'>add to cart</label>
                <input className='input_submit'  type='submit' id='submit_btn' onClick={()=>{addToCart(); if(size!==0) toggleCartBar()}}/>
                <label className='input_label f2 onHover' for='submit_btn'>check out</label>
                </div>
            </div>
            </div>
            </form>
        </section>
        <section>
        <FeaturedNew label={'featureds'} title={'You may also like these'} key={'1'}/>
        </section>
        </React.Fragment>
    )}else{
        return(<h1>Loading</h1>)
    }
}

export default SingleProduct