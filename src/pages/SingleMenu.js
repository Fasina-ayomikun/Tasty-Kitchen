import React, { useEffect } from "react";
import {Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { useAppProvider } from "../context/context";
import Loading from "../components/Loading";
import { yahoo_api } from "../keys";

const singleUrl = `https://api.spoonacular.com/recipes/informationBulk?apiKey=${yahoo_api}&ids=`;

function SingleMenu() {
  const { id } = useParams();

  const {
    fetchSingleProduct,
    single_product,
    single_product_loading,
    single_product_error,
    single_error_message,
  } = useAppProvider();

  let {
    readyInMinutes: readytime,
    image,
    title,
    servings,
    cuisines,

    extendedIngredients,
    instructions,
  } = single_product;

  useEffect(() => {
    fetchSingleProduct(`${singleUrl}${id}`);
  }, [id]);
  const ingredients = extendedIngredients;

  console.log(single_product);
  if (single_product_loading) {
    return (
      <div className='loading-container'>
        <Loading />;
      </div>
    );
  }
  if (single_product_error) {
    return (
      <div className='error'>
        <h4>{single_error_message}</h4>
        <button className='error-btn'>
          <Link to='/menu'>Back to menu</Link>
        </button>
      </div>
    );
  }
  return (
    <Wrapper className='about'>
      <button className='error-btn'>
        <Link to='/menu'>Go Back </Link>
      </button>
      <div className='container'>
        <img src={image} alt={title} />
        <div className='info-container'>
          <h3>{title}</h3>
          <p>
            <span>{servings} servings</span>||
            <span>{readytime} minutes cook time</span>
          </p>
          <div className='divs-container'>
            {ingredients.length >= 1 && (
              <div className='div ingre'>
                <h4>Ingredient{ingredients.length > 1 && "s"} : </h4>
                <div className='ingredients'>
                  {ingredients.map((item, index) => {
                    const { name } = item;

                    return (
                      <p key={index} className='ingredient'>
                        {name}
                      </p>
                    );
                  })}
                </div>
              </div>
            )}

            <div className='div instruct'>
              <h4>Instruction : </h4>
              <div className='instructions'>
                <p>
                  <span className='step'>Steps : </span>

                  {instructions}
                </p>
              </div>
            </div>

            {cuisines.length >= 1 && (
              <div className='div cuis'>
                <h4>Cuisine{cuisines.length > 1 && "s"} : </h4>
                <div className='cuisines'>
                  {cuisines.map((item, index) => {
                    return (
                      <span key={index} className='cuisine'>
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <button className='order-btn error-btn'>
          <a href='#'>Order now</a>
        </button>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 50px 100px;
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    margin: 40px auto;
    align-items: center;
    justify-content: center;
  }
  .order-btn {
    width: 50%;
  }
  img {
    width: 500px;
    border-radius: 10px;
  }
  h4 {
    text-align: start;
    width: 100%;
  }
  p {
    text-align: start;
  }
  span {
    margin: 0 10px;
    color: var(--primary-700);
  }
  .div {
    display: grid;
    grid-template-columns: none;
    grid-template-rows: auto;
    align-items: center;
    column-gap: 30px;
    margin-bottom: 20px;
  }
  .ingredients {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
  }
  .equipments {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
  }
  .cuisines {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
  }
  .ingredient,
  .equipment,
  .cuisine,
  .step {
    margin: 7px 0;
    text-align: center;
    border-radius: 5px;
    padding: 3px 5px;
    color: var(--primary-200);
    text-transform: capitalize;
    box-shadow: var(--shadow-2);
  }
  .step {
    margin-right: 10px;
  }
  .instructions {
    height: 100px;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .read-more {
    cursor: pointer;
  }

  @media (max-width: 778px) {
    padding: 30px 40px;
    .container {
      grid-template-columns: none;
      grid-template-rows: auto;
      row-gap: 60px;
      column-gap: 0;
    }
    .div {
      grid-template-columns: none;
      grid-template-rows: auto;
    }
    h4 {
      font-size: 1.1rem;
    }

    img {
      width: 100%;
    }
    h3 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
  @media (max-width: 1280px) {
    .container {
      column-gap: 40px;
      margin: 10px;
    }
    .info-container {
      margin: 0 5px;
    }
    .ingredients,
    .equipments,
    .cuisines {
      /* grid-template-columns: repeat(2, 1fr); */
    }
  }
`;
export default SingleMenu;
