import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <Wrapper className='page-100'>
      <section>
        <h1>404 </h1>
        <h3>Sorry, the page you tried cannot be found.</h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
    color: var(--clr-red-dark);
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
    color: var(--clr-red-dark);
  }
  .btn {
    font-weight: bolder;
    background-color: var(--clr-green-dark);
    color: var(--clr-primary-10);
    padding: 0.7em 1em;
    font-size: 1.2rem;
    border-radius: 15px;
    transition: var(--transition);
    &:hover {
      color: var(--clr-grey-3);
      background-color: var(--clr-green-light);
      box-shadow: var(--light-shadow);
    }
  }
`;

export default ErrorPage;
