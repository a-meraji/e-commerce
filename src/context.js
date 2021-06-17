import React,{ useContext, useReducer, useState, useEffect} from 'react'
import reducer from './reducer'
import { categories,
        jackets, t_shirts, 
        shirts, pants, jeans}from './data'

//const url = ''
const ContextObj = React.createContext()

const initialState = {
    loading: false,
    cart:{},
    amount: 0,
    priceTotal: 0,
  }

const ProviderFunction = ({ children }) => {

    // showing side bar and cart or not
    const [sideBar, setSideBar] = useState(false)
    const [cartBar, setCartBar] = useState(false)

    //getProducts stuff
    const [category, setCategory] = useState('')
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [featureds, setFeatureds] = useState([])
    const [news, setNews] = useState([])
    // set productS for productS page
    const handleProducts = () => {
        let tmpPro = []
        switch(category){
            case"jackets":
            tmpPro = [...jackets]
            break
            case"shirts":
            tmpPro = [...shirts]
            break
            case"t_shirts":
            tmpPro = [...t_shirts]
            break
            case"pants":
            tmpPro = [...pants]
            break
            case"jeans":
            tmpPro = [...jeans]
            break
            default:break
        }
        const newPro = tmpPro.map((item) => {
            const {
                id,
                img,
                hoverImage,
                title,
                price,
                sizes,
                labels,
            } = item

            return {
                id: id,
                name: title,
                hoverImg: hoverImage,
                images: img,
                price: price,
                sizes: sizes,
                labels: labels,
            }
        })
        setProducts(newPro)      
        if(featureds.length === 0){
            const tmpFeature = [
                ...jackets,...shirts,...t_shirts,
                ...pants,...jeans
            ]
            handleLabels(tmpFeature)
        }
    }
    // set featured and new section
    const handleLabels = (tmpPro) => {
        const newFeatured = tmpPro.filter((item)=>{
            return item.labels.includes('featured')})
            .map((item) => {
            const{
                id, title, hoverImage, img, price,
            } = item
            return{
                id: id,
                name: title,
                hoverImg: hoverImage,
                image: img[0]['url'][0],
                price: price,
            }
        })
        
        const newNews = tmpPro.filter((item) =>
        item.labels.includes('new'))
        .map((item) => {
            const{
                id, title, hoverImage, img, price,
            } = item
            return{
                id: id,
                name: title,
                hoverImg: hoverImage,
                image: img[0]['url'][0],
                price: price,
            }
        })

        setFeatureds(newFeatured)
        setNews(newNews)
    }

    // single pro
    const fetchPro = ({id}) => {
        setLoading(false)
        const letter = id.slice(1)
        const all=[...jackets,...shirts,...t_shirts,...pants,...jeans]
        const it= all.find((item)=>item.id===letter)
        setLoading(true)
        return(it)
    }
    useEffect(()=>{
        handleProducts()
    },[category])

    //sidebar
    const toggleSideBar = () => {
        setSideBar(!sideBar)
    }

    //cartBar
    const toggleCartBar = () => {
        setCartBar(!cartBar)
    }

    //reducer stuff
    const [state, dispatch] = useReducer(reducer, initialState)
    // const fetchData = async () => {
        //     dispatch({ type: 'LOADING' })
        //     const response = await fetch(url)
        //     const cart = await response.json()
        //     console.log(cart)
        //     dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
        // }
    const addItem = (item) => {
        dispatch({ type:"ADD", payload: {item} })
    }    
    const handleAmount = (id, type) => {
        dispatch({ type:'HANDLE_AMOUNT', payload: { id, type }})
    }
    const removeItem = (id) => {
        dispatch({ type:'REMOVE', payload:id })
    }
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' })
      }, [state.cart])

    return(
        <ContextObj.Provider
            value ={{
                addItem,
                clearCart,
                handleAmount,
                removeItem,
                toggleSideBar,
                sideBar,
                toggleCartBar,
                cartBar,
                categories,
                category,
                setCategory,
                products,
                loading,
                fetchPro,
                featureds,
                news,
                ...state,
            }}
        >
            {children}
        </ContextObj.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(ContextObj)
}

export { ContextObj, ProviderFunction }