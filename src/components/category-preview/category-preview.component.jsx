import { Preview,CategoryPreviewContainer,Title } from './category-preview.styles';
import ProductCard from '../product-card/product-card.component';
import Spinner from '../spinner/spinner.component';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading } from '../../store/categories/categories.selector';





const CategoryPreview = ({title, products}) => {

    const isLoading = useSelector(selectCategoriesIsLoading)
   

  
    return(
        <CategoryPreviewContainer>
            <h2>
                <Title to={`${title}`}className='title'>{title.toUpperCase()}</Title>
            </h2>
            {isLoading? (<Spinner/>):
            (<Preview >
                {products.filter((_, idx) => {
                    return idx < 4
                }).map(product => {
                    return <ProductCard title={title} key={product.id} product={product}/>
                })}
            </Preview>)}
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;