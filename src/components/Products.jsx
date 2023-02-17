import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredAndSortedProducts, setfilteredAndSortedProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    category
                        ? `http://localhost:3333/api/products?category=${category}`
                        : 'http://localhost:3333/api/products',
                );
                setProducts(res.data);
            } catch (e) {}
        };
        getProducts();
    }, [category]);

    useEffect(() => {
        category &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) => {
                        return item[key].includes(value);
                    }),
                ),
            );
    }, [products, category, filters]);

    useEffect(() => {
        switch (sort) {
            case 'asc':
                setfilteredAndSortedProducts(
                    [...filteredProducts].sort((a, b) => a.price - b.price)
                );
                break;
            case 'desc':
                setfilteredAndSortedProducts(
                    [...filteredProducts].sort((a, b) => b.price - a.price)
                );
                break;
            default:
                setfilteredAndSortedProducts(
                    [...filteredProducts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                );
        }
    }, [sort, filteredProducts]);

    return (
        <Container>
            {category
                ? filteredAndSortedProducts.map((product) => <Product item={product} key={product.id} />)
                : products
                      .slice(0, 8)
                      .map((product) => <Product item={product} key={product.id} />)}
        </Container>
    );
};

export default Products;