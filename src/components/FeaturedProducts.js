import React, { useState } from 'react';
import { useProductsContext } from '../context/products_context';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Error from './Error';
import Loading from './Loading';
import Product from './Product';

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  const [featuredIndexDisplay, setFeaturedIndexDisplay] = useState(0);

  const slideLeft = () => {
    if (featuredIndexDisplay < 0) {
      setFeaturedIndexDisplay(featured.length - 1);
    } else {
      setFeaturedIndexDisplay(featuredIndexDisplay - 1);
    }
  };
  const slideRight = () => {
    if (featuredIndexDisplay >= featured.length - 1) {
      setFeaturedIndexDisplay(0);
    } else {
      setFeaturedIndexDisplay(featuredIndexDisplay + 1);
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        <div className='carousel'>
          {featuredIndexDisplay !== 0 && (
            <button className=' btn-left' onClick={slideLeft}>
              <FaAngleDoubleLeft />
            </button>
          )}
          {featured.map((product, index) => {
            if (window.innerWidth >= 900) {
              let nextItem = featuredIndexDisplay + 1;

              if (index === featuredIndexDisplay || index === nextItem) {
                return <Product key={product.id} {...product} />;
              } else {
                return null;
              }
            }

            if (index !== featuredIndexDisplay) return null;
            return <Product key={product.id} {...product} />;
          })}
          {featuredIndexDisplay !== featured.length - 1 && (
            <button className='btn-right' onClick={slideRight}>
              <FaAngleDoubleRight />
            </button>
          )}
        </div>
      </div>
      <Link to='/products' className='btn'>
        all products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
    .carousel {
      height: 270px;
      overflow: hidden;
      position: relative;
      padding: 0 2rem;

      @media (min-width: 600px) {
        padding: 0 4rem;
      }
      @media (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
      }

      .btn-left,
      .btn-right {
        position: absolute;
        top: 50%;
        left: 0%;
        z-index: 10;
        width: 50px;
        aspect-ratio: 1/1;
        font-size: 1.5rem;
        font-weight: bolder;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.4);
        color: var(--clr-primary-3);
        border-color: var(--clr-primary-3);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transform: translateY(-50%);
        transition: all 0.5s linear;

        &:hover {
          background-color: rgba(0, 0, 0, 0.6);
          border-color: var(--clr-primary-9);
          color: var(--clr-primary-9);
          @keyframes bounce {
            0% {
              scale: 1;
            }
            50% {
              scale: 1.05;
              border-width: 5px;
              font-size: 2rem;
            }
            100% {
              scale: 1;
            }
          }

          animation: bounce 1s ease-in-out infinite;
        }
      }
      .btn-right {
        left: auto;
        right: -0%;

        transform: translateY(-50%);
      }
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
