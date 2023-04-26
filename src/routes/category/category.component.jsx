
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {selectCategoriesMap} from '../../store/categories/categories.selector'
import { useSelector } from 'react-redux';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryTitle,CategoryContainer } from './category.styles';


const Category = () => {
 const {category} = useParams();
 const categoriesMap = useSelector(selectCategoriesMap)
 const [products, setProducts] = useState(categoriesMap[category])

 useEffect(() => {
    setProducts(categoriesMap[category])

 },[category,categoriesMap])


 return(
    <Fragment>
    <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
    <CategoryContainer>
        {products && products.map(product =>{
            return <ProductCard key={product.id} product={product}/>
        }) }
    </CategoryContainer>
    </Fragment>
 )
}

export default Category;