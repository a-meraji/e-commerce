const reducer = (state, action) => {
    console.log(action.type)

    switch (action.type) {
        case 'LOADING':
            return{...state, loading: true}
        case 'CLEAR_CART':
            return { ...state, cart: []}
        case 'DISPLAY_ITEMS':
            return{ ...state, cart: action.payload, loading: false}
        case 'REMOVE':
            console.log(state.cart, action.payload)
            return{
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            }
        case 'ADD':
            let tempC =[]
            let newItem = action.payload.item
            if(state.cart.length !== undefined){
                tempC = state.cart.map((item)=>item)
                newItem.id = tempC.length+1 
            }
            // tempC.map((item) => {
            //     if(item.proId === newItem.proId &&
            //         item.color === newItem.color){
            //         item.amount += newItem.amount
            //         console.log(item)
            //         newItem = {}
            //     }
            //     return item
            // })
            // if(newItem !== {}){
            //     tempC.push(newItem)
            // }
            tempC.push(newItem)
            return { ...state, cart: tempC }    
        case 'GET_TOTALS':
            if(state.cart.length !== undefined ){
            let { priceTotal, amount } = state.cart.reduce(
                (totalCart, itemCart) => {
                const { amount, price }  = itemCart
                totalCart.amount = totalCart.amount + amount
                const tempPrice = amount * price
                totalCart.priceTotal = totalCart.priceTotal + tempPrice
                console.log(totalCart.amount)
                return totalCart
                },{ priceTotal : 0, amount : 0,})
            priceTotal = parseFloat(priceTotal.toFixed(2))
            return { ...state, amount, priceTotal }
            }else{
                return { ...state, amount: 0, priceTotal: 0 }
            }
        case 'HANDLE_AMOUNT':
            let tempCart = state.cart.map((cartItem) => {
                if(cartItem.id === action.payload.id) {
                    if(action.payload.type === 'inc') {
                        return{ ...cartItem, amount: cartItem.amount + 1}
                    }else if(action.payload.type==='dec'){
                        return{...cartItem, amount: cartItem.amount - 1}
                    }
                }
                return cartItem
            })
            .filter((cartItem) => cartItem.amount !== 0)
            return{ ...state, cart:tempCart }
        default:
            break
    }
    throw new Error(`no action type matched, dispatch: ${state.type}, payload: ${action.payload}`)
}
export default reducer