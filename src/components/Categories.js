import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../context'
import {FaAngleDoubleRight,
        FaAngleDoubleLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Categories = () => {
    const {categories, setCategory} = useGlobalContext()
    const [showCat, setShowCat] = useState(true)
    const slider = useRef()

    useEffect(()=>{
        slider.current=document.getElementsByClassName('cat_slider')[0]
    },[])

    const changeCat = () => {
        if(window.scrollY >= 500){
            setShowCat(false)
        }
        else if(window.scrollY < 1){
            setShowCat(true)
        }
    }

    function sideScroll(element,direction,speed,distance,step){
       var scrollAmount = 0;
        var slideTimer = setInterval(function(){
            if(direction == 'left'){
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if(scrollAmount >= distance){
                window.clearInterval(slideTimer);
            }
        }, speed);
    }

    window.addEventListener('scroll', changeCat)
    return(
        <React.Fragment>
        <section className=
        {showCat?'cat_container show-cat' : 'cat_container hide-cat'}>
            <div>
            <div className='cat_angle ang_left'
            onClick={()=>{
            sideScroll(slider.current,'left',25,100,10);}}>
                <FaAngleDoubleLeft/>
            </div>
            <div className='cat_slider hide_slider'>
                {categories.map((cat)=>{
                    var tempTitle = cat.title
                    tempTitle = tempTitle.toLowerCase()
                    return(
                        <Link className='cat' onClick={()=>{setCategory(tempTitle)}} to={`/products/${tempTitle}`} key={cat.id}>
                            <img className='cat_img' src={cat.img} alt={cat.title}/>
                            <p className='cat_txt f4'>{cat.title}</p>
                        </Link>
                        )
                })}
            </div>
            <div className='cat_angle ang_right'
            onClick={()=>{
                sideScroll(slider.current,'right',25,100,10);}}>
                    <FaAngleDoubleRight/>
            </div>
            </div>
                {showCat?
                <button className='zabane'
                onClick={()=>setShowCat(!showCat)}>
                    <FaAngleDoubleLeft/>
                </button>
                :
                ''}

            </section>
            {showCat?'':
            <button 
                className='abs_btn'
                onClick={()=>setShowCat(!showCat)}>
                    <FaAngleDoubleRight/>
             </button>
             }
            </React.Fragment>
    )
}

export default Categories