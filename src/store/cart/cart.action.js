import { CART_ACTION_TYPES } from './cart.types'
import { createAction } from '../../utils/reducer/reducer.utils'



const addCartItem = (cartItems, productToAdd) => {
    const cartItemExists = cartItems.find(cartItem => {
        return cartItem.id === productToAdd.id
    })
    if (cartItemExists) {
        return cartItems.map(cartItem => {
            return cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        })
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}


const removeCartItem = (cartItems, cartItemToRemove) => {
    const cartItemExists = cartItems.find(cartItem => {
        return cartItem.id === cartItemToRemove.id
    })
    if (cartItemExists.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}



const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}




export const setIsCartOpen = (bool) => {
    return createAction(CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN, bool)
}


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = (addCartItem(cartItems, productToAdd))
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = (removeCartItem(cartItems, cartItemToRemove))
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = (clearCartItem(cartItems, cartItemToClear))
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}