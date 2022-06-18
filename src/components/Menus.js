import styled from "styled-components";

import { GrSearch } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useAppProvider } from "../context/context";
import Loading from "./Loading";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import { yahoo_api } from "../keys";

const singleUrl = `https://api.spoonacular.com/recipes/informationBulk?apiKey=${yahoo_api}&ids=715538`;

function Menus() {
  const { all_products, isLoading, isError, error_message } = useAppProvider();
  const { isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return (
      <div className='error'>
        <h1>{error_message}</h1>
        <button className='error-btn'>
          <Link to='/'>Back Home</Link>
        </button>
      </div>
    );
  }
  return (
    <Wrapper>
      <div className='container'>
        {all_products?.map(({ image, title, id }) => {
          return (
            <div key={id} className='category'>
              <img src={image} alt={title} />
              <div className='top'>
                <Link to={`/menu/${id}`}>
                  <GrSearch
                    className='icon'
                    onClick={() =>
                      isAuthenticated ? null : toast.error("Please Log In")
                    }
                  />
                </Link>
              </div>
              <div className='bottom'>
                <p>{title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .container {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    column-gap: 30px;
    padding: 0 100px;
    width: 100%;
    max-width: 1500px;
  }
  h2 {
    text-align: center;
    margin-top: 30px;
  }

  .category {
    position: relative;
    height: 250px;
    margin-bottom: 50px;
  }

  .icon {
    visibility: visible;
    color: var(--primary-300);
    background-color: var(--primary-200);
    padding: 9px;
    border-radius: 50%;
    font-weight: 300;
    font-size: 2.5rem;
  }
  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  .category .bottom {
    visibility: hidden;
  }
  .category:hover .bottom {
    visibility: visible;
  }
  .bottom:hover {
  }
  .top .icon {
    visibility: hidden;
  }
  .top:hover .icon {
    visibility: visible;
    transition: 1s ease-in-out;
  }
  .top {
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: rgba(0, 0, 0, 0.2);

    width: 100%;
    height: 250px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bottom {
    position: absolute;
    z-index: 3;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: var(--primary-100);
    width: 100%;
    text-align: center;
    height: 70px;
  }
  @media (max-width: 1200px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
      padding:0 50px;
    }
  }
  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
      padding:0 10px;
    }
  }
`;
export default Menus;
