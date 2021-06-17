import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/products'
import SingleProdutc from './pages/SingleProduct'
import CheckOut from './pages/CheckOut'
import Success from './pages/Success'
import Error from './pages/Error'

const  App = () =>{
    return(
        <div id='wrapper'>
        <Router>
            <SideBar />
            <NavBar />
            <Cart />
            <div className='container'>
            <Switch>
                <Route exact path = '/'>
                    <Home />
                </Route>
                <Route path='/products'>
                    <Products />
                </Route>
                <Route path='/product/:id'>
                    <SingleProdutc />
                </Route>
                <Route path='/checkout'>
                    <CheckOut />
                </Route>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route path='/success'>
                    <Success />
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
            </div>
            <Footer />
        </Router>
        </div>
    )
}

export default App