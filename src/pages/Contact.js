import styled from "styled-components";
import { Link } from "react-router-dom";

import image from "../images/hero-image.jpg";
import PageHero from "../components/PageHero";
import ContactInfo from "../components/ContactInfo";

function Contact() {
  return (
    <>
      <Wrapper className='section section-container'>
        <div className='section-center'>
          <div className='info'>
            <h1>Contact Us</h1>
            <p>we are always here for you.</p>
            <button className='btn'>
              <Link to='/menu'>Explore</Link>
            </button>
          </div>
          <div className='img-container'>
            <div className='cover'></div>
            <img src={image} alt='image' />
          </div>
        </div>
      </Wrapper>
      <PageHero title='Contact' />
      <ContactInfo />
    </>
  );
}
const Wrapper = styled.section`
  .section-center {
    height: calc(100vh - 90px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 100px;
    z-index: 2;
  }
  h1 {
    font-size: 5rem;
    color: var(--primary-700);
    font-weight: 700;
    font-style: italic;
    letter-spacing: 2px;
  }
  p {
    color: var(--primary-100);
  }
  .img-container {
    width: 100%;
    height: calc(100vh - 90px);

    position: relative;
  }
  .cover {
    position: absolute;
    top: -100%;
    transform: skewX(330deg);
    width: 50%;
    height: 200%;
    background-color: var(--backgroundColor);
    z-index: 1;
    animation: cover 3s infinite;
  }
  img {
    height: 100%;
    transform: none;
    width: 100%;
  }
  @keyframes cover {
    0% {
      width: 50%;
    }

    50% {
      width: 20%;
    }

    100% {
      width: 50%;
    }
  }
  @media (max-width: 1052px) {
    .cover {
      display: none;
    }
    .img-container {
      display: none;
    }
    .info {
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0;
    }
    .info h1 {
      font-size: 4rem;
    }
    .section-center {
      grid-template-columns: none;
    }
  }
`;
export default Contact;
