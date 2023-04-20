import { Preview,CategoryPreviewContainer,Title } from './category-preview.styles';
import ProductCard from '../product-card/product-card.component';





const CategoryPreview = ({title, products}) => {
  
    return(
        <CategoryPreviewContainer>
            <h2>
                <Title to={`${title}`}className='title'>{title.toUpperCase()}</Title>
            </h2>
            <Preview >
                {products.filter((_, idx) => {
                    return idx < 4
                }).map(product => {
                    return <ProductCard title={title} key={product.id} product={product}/>
                })}
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;