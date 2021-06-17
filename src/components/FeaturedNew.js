import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import {FaAngleDoubleRight,
    FaAngleDoubleLeft} from 'react-icons/fa'

const FeaturedNew = ({label, title, key}) => {
    const { featureds, news } = useGlobalContext()
    const  currentLabel = label==='featureds'?featureds:news
    const slider = useRef()

    useEffect(()=>{
        slider.current = document.getElementsByClassName(`${title}class`)[0]
    },[])

    function sideScroll (element,direction,speed,distance,step){
        var stepAmount = 0;
        var slideTimer = setInterval(() => {
            if(direction==='left'){
                element.scrollLeft -= step;
            }else{
                element.scrollLeft += step;
            }
            stepAmount += step ;
            if(stepAmount >= distance){
                window.clearInterval(slideTimer);
            }
        }, speed);
    }

    return(
        <section className='featured_container'>
            <h2 className='font_lib f6'>{title}</h2>
            <div className='fang_angle fang_left f6'
            onClick={()=>{
            sideScroll(slider.current,'left',25,120,10);}}>
                <FaAngleDoubleLeft/>
            </div>
            <div className={`featured_slider hide_slider ${title}class`}>
                {currentLabel.map((item) => {
                    return(
                        <Link 
                        className='product slider_product' 
                        key={`${label}${item.id}`}
                        to={`/product/:${item.id}`}>
                            <img className='product_img' src={item.image} alt={item.name}/>
                            <div className='product_datail_container'>
                                <p className='product_title f2'>{item.name}</p>
                                <p className='product_price f3'>$ {item.price}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className='fang_angle fang_right f6'
            onClick={()=>{
            sideScroll(slider.current,'right',25,160,10);}}>
                <FaAngleDoubleRight/>
            </div>
        </section>
    )
}

export default FeaturedNew