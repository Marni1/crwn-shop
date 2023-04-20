import { useContext } from 'react';
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import { ProductCardContainer,Footer,Name,Price } from './product-card.styles';



const ProductCard = ({product,title}) => {
    const {name,price,imageUrl} = product;
    const {addItemToCart} = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)
    return(
        <ProductCardContainer className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <Footer >
                <Name className='name'>{name}</Name>
                <Price className='price'>{price}</Price>
            </Footer>
         <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>

        </ProductCardContainer>
    );
}



export default ProductCard;