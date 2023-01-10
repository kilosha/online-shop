import styled from 'styled-components';
import {categories} from '../data';
import CategoryItem from './CategoryItem';

const Component = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const Categories = () => {
    return (
        <Component>
            {categories.map(category => (
                <CategoryItem item={category} key={category.id}></CategoryItem>
            ))}
        </Component>
    );
}

export default Categories;