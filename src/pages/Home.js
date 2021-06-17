import React from 'react'
import Categories from '../components/Categories'
import FeaturedNew from '../components/FeaturedNew'

const Home = () => {

    return(
        <div className='home' >
            <Categories /> 
            <section className='hero_1_container'>
                <h1 className='font_lib moto'>
                    STYLE <br/> in <br/> ADVANCE
                </h1>
                <div className='hero_1'></div>
            </section>
           <FeaturedNew label={'featureds'} title={'Featured Products'} key={0}/>
           <section className='hero_1_container hero_2_container'>
                <div className='hero_1 hero_2'></div>
                <h1 className='font_lib moto moto2'>
                        ADNANCE <br/> in <br/> DETAILS
                </h1>
            </section>
           <FeaturedNew label={'news'} title={'New Products'} key={1}/>
        </div>
    )
}

export default Home