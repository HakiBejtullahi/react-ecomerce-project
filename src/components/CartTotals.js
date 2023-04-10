import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :{' '}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to='/checkout' className='btn'>
            procede to checkout
          </Link>
        ) : (
          <div className='alt-checkout'>
            <span>to procede to checkout please</span>
            <button
              type='button'
              className='auth-btn'
              onClick={() => loginWithRedirect()}
            >
              Login <FaUserPlus />
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
    text-transform: capitalize;
    font-weight: bolder;
    color: var(--clr-grey-3);
  }

  .alt-checkout {
    display: grid;
    background-color: var(--clr-primary-5);
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    @media (min-width: 776px) {
      grid-template-columns: 1fr 200px;
    }
    .auth-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border-color: transparent;
      min-height: 100%;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--clr-grey-1);
      letter-spacing: var(--spacing);
      margin: 0 auto;
      width: 100%;

      transition: all 0.5s ease-in-out;
      color: var(--clr-grey-9);
      @media (min-width: 776px) {
        padding: 0.5rem;
      }
      svg {
        transition: all 0.5s ease-in-out;
        margin-left: 5px;
        color: var(--clr-grey-9);
      }
      &:hover {
        background-color: var(--clr-primary-6);

        border-radius: var(--radius);
        color: var(--clr-primary-1);
        svg {
          color: var(--clr-primary-1);
        }
      }
    }
    span {
      display: none;
      @media (min-width: 776px) {
        display: block;
        padding: 0.5rem;
        align-self: center;
        justify-self: center;
        color: var(--clr-grey-9);
        font-weight: bolder;
        letter-spacing: 0.4px;
        border-right: 6px solid var(--clr-primary-8);
        border-radius: 30px;
        text-align: center;
      }
    }
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
