import styled from "styled-components";
import data from "../utils/data.json";
import { Link } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
export default function Categories() {
  return (
    <Wrapper>
      <h2>Popular Recipes</h2>
      <hr className='hr' />
      <div className='categories-center'>
        {data.results.map((item) => {
          const { id, title, image } = item;
          return (
            <div key={id} className='category'>
              <img src={image} alt={title} />
              <div className='top'>
                <Link to='/menu'>
                  <GrSearch className='icon' />
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

const Wrapper = styled.section`
  background-color: var(--grey-100);
  padding: 10px 0;
  margin-bottom: 20px;
  h2 {
    text-align: center;
    margin-top: 30px;
  }
  .categories-center {
    width: 80vw;
    margin: 70px auto;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    column-gap: 40px;

    ::-webkit-scrollbar {
      width: 10px;
      height: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: var(--grey-100);
      border-radius: 30px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--primary-300);
      border-radius: 30px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: var(--primary-500);
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
  }
`;
