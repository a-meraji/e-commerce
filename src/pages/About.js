import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return(
        <section className='about-sec'>
        <h1 className='font_lib f7'>About Us</h1>
        <p>
        Ornare ultrices ut imperdiet praesent non a, nisl sapien lacus inceptos magnis
         Inceptos nibh, pulvinar condimentum nam, faucibus est ridiculus.
         Ligula facilisi malesuada phasellus senectus pharetra eu. Tellus. Aptent per.
        Sociosqu magnis maecenas etiam cum magnis arcu sodales maecenas inceptos dis sem et a eu
        vehicula pharetra praesent ornare montes maecenas urna dis amet orci amet sit pretium
        massa fusce consectetuer. Lorem leo pharetra cras varius at posuere parturient praesent. A tempor. Libero justo vitae consectetuer fermentum.
        Tortor Condimentum enim inceptos montes. Sagittis urna fringilla elit non malesuada per
        dolor donec augue senectus, netus proin. Interdum volutpat phasellus blandit vel.
        </p>
        <button className='btn f4'><Link to={process.env.PUBLIC_URL + '/'}>back to home</Link></button>
        </section>
    )
}

export default About