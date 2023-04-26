
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CheckoutContainer,CheckOutHeader,HeaderBlock,Total } from './checkout.styles';
import { useSelector } from 'react-redux';
import { selectCartItems,selectCartTotal } from '../../store/cart/cart.selector';



const Checkout = () => {

   const cartItems = useSelector(selectCartItems);
   const totalCount = useSelector(selectCartTotal);
    return(
        <CheckoutContainer>
        <CheckOutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckOutHeader>
            {cartItems.map((cartItem) => {
                return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            })}
            <Total>Total:${totalCount}</Total>
        </CheckoutContainer>
    )
}

export default Checkout