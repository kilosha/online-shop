import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive';

const Component = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: '0px', flexDirection: 'column' })};
`;

const Categories = () => {
    return (
        <Component>
            {categories.map((category) => (
                <CategoryItem item={category} key={category.id}></CategoryItem>
            ))}
        </Component>
    );
};

export default Categories;
