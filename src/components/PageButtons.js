import React from 'react';
import { useState } from 'react';
import { useFilterContext } from '../context/filter_context';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import styled from 'styled-components';

const PageButtons = ({ utils }) => {
  const { pageProducts, filtered_products } = useFilterContext();
  const { page, prevPage, nextPage, handlePage } = utils;
  if (filtered_products.length < 9) return;
  return (
    <Wrapper>
      <button
        className='changeP-btn'
        onClick={() => prevPage(pageProducts.length)}
      >
        <FaAngleDoubleLeft />
      </button>
      <div className='page-btn-container'>
        {pageProducts.map((_, i) => {
          return (
            <button
              className={`${page === i ? 'page-btn active-btn' : 'page-btn'}`}
              onClick={() => handlePage(i)}
              key={i}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
      <button
        className='changeP-btn'
        onClick={() => nextPage(pageProducts.length)}
      >
        <FaAngleDoubleRight />
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 1rem 1rem;

  .changeP-btn {
    background-color: transparent;
    border: none;
    font-size: 2rem;
    color: var(--clr-primary-1);
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      color: var(--clr-primary-5);
    }
  }
  .page-btn-container {
    display: flex;
    justify-content: space-evenly;
    display: none;
  }
  .page-btn {
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    font-weight: bolder;
    border-radius: 50%;
    aspect-ratio: 1/1;
    color: var(--clr-primary-1);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      color: var(--clr-primary-5);
      box-shadow: 0px 2px 0px 0px var(--clr-primary-5);
    }
  }
  .active-btn {
    color: var(--clr-primary-5);
    box-shadow: 0px 2px 0px 0px var(--clr-primary-5);
  }

  @media (min-width: 680px) {
    & {
      grid-template-columns: auto 1fr auto;
    }
    .page-btn-container {
      display: flex;
    }
  }
`;

export default PageButtons;
