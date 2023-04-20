import { createContext,useEffect,useState} from "react";

const addCartItem = (cartItems, productToAdd) => {
        const cartItemExists  = cartItems.find(cartItem =>{
               return cartItem.id ===  productToAdd.id
        })
        if(cartItemExists){
            return cartItems.map(cartItem => {
                return cartItem.id === productToAdd.id?{...cartItem,quantity: cartItem.quantity +1}: cartItem
            })
        }

        return [...cartItems, {...productToAdd, quantity: 1}]
}


const removeCartItem =(cartItems, cartItemToRemove) => {
    const cartItemExists  = cartItems.find(cartItem =>{
        return cartItem.id ===  cartItemToRemove.id
 })
 if(cartItemExists.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
 }
 return cartItems.map ((cartItem)=> cartItem.id===cartItemToRemove.id?{...cartItem, quantity:cartItem.quantity -1}:cartItem)
}



const clearCartItem =(cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}



export const CartContext = createContext({
        isCartOpen: false,
        setIsCartOpen: () => {},
        cartItems: [],
        addItemToCart: () => {},
        removeItemFromCart: () => {},
        clearItemFromCart: () => {},
        carCount: 0,
        totalCount: 0,
        
})


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState('');
    const [totalCount, setTotalCount] = useState('');
    
    useEffect(() => {
        const newCartCount = cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.quantity
        },0)
        setCartCount(newCartCount);
    },[cartItems])
    
    useEffect(() => {
        const newTotalCount = cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.quantity * cartItem.price
        },0)
        setTotalCount(newTotalCount);
    },[cartItems])

    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems,cartItemToRemove))
    }
    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }


    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        removeItemToCart,
        clearItemFromCart,
        totalCount
    
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}