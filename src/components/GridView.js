import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import PageButtons from './PageButtons';
import { useState } from 'react';

const GridView = ({ products }) => {
  const [page, setPage] = useState(0);
  const nextPage = (length) => {
    console.log(length);
    console.log(page);
    if (page === length - 1) {
      setPage(0);
    } else {
      setPage((prevPage) => {
        return prevPage + 1;
      });
    }
  };
  const prevPage = (length) => {
    console.log(page);
    if (page === 0) {
      setPage(length - 1);
    } else {
      setPage((pPage) => {
        return pPage - 1;
      });
    }
  };
  const handlePage = (index) => {
    setPage(index);
  };
  return (
    <Wrapper>
      <div className='products-container'>
        {products[page].map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <PageButtons utils={{ page, nextPage, prevPage, handlePage }} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 768px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 893px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
