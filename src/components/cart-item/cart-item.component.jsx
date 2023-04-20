import { CartItemContainer, ItemDeatails, Name } from "./cart-item.styles";

const CartItem = ({cartItem}) => {
    const {name,imageUrl, quantity, price} = cartItem;
    return(
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDeatails>
            <Name >{name}</Name>
            <span>{quantity} x ${price}</span>
            </ItemDeatails>
        </CartItemContainer>
    )
}


export default CartItem;