import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Announcement from "../components/Announcement";
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    ${mobile({ width: "0px 20px", alignItems: "inherit", flexDirection: "column" })};
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })};
`;

const Select = styled.select`
    padding: 10px;
    padding-right: 20px;
    margin-right: 20px;
    background: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="%23000" d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>')
        no-repeat 95% 50%;
    appearance: none;
    ${mobile({ margin: "10px 0px" })};
`;

const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split('/')[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('newest');

    const handleFilters = e => {
        const value = e.target.value;

        if (value === "All") {
            const newFiltersValue = {...filters};
            delete newFiltersValue[e.target.name];
            setFilters(newFiltersValue);
        } else {
            setFilters({
                ...filters,
                [e.target.name]: value
            });
        }
    }

    const handleSort = e => {
        setSort(e.target.value);
    }
    
    return (
        <Container>
            <Navbar />
            <Announcement/>
            <Title>{category.toUpperCase()}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Color:</FilterText>
                    <Select name='color' onChange={handleFilters} defaultValue="All">
                        <Option>All</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <FilterText>Size:</FilterText>
                    <Select name='size' onChange={handleFilters} defaultValue="All">
                        <Option>All</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select defaultValue="Newest" onChange={handleSort}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort}/>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductList;