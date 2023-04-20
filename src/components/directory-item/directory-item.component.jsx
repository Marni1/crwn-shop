import { useNavigate } from 'react-router-dom';
import { DirectoryItemContainer, BackGroundImage,Body } from './directory-item.styles';

const DirectoryItem =({category}) => {
    const {imageUrl, title, route} = category
    const navigate = useNavigate();
    const handleNavigate = () => {
      navigate(route)
    }
    return(
        <DirectoryItemContainer onClick={handleNavigate}>
          <BackGroundImage imageUrl={imageUrl}/>
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </DirectoryItemContainer>
    );

}


export default DirectoryItem;