import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Error() {
  return (
    <Wrapper>
      <h1>404</h1>
      <button className='error-btn'>
        <Link to='/'>Back Home</Link>
      </button>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 15rem;
    font-weight: 600;
    margin: 0 auto;
  }
  @media (max-width: 500px) {
    h1 {
      font-weight: 5rem;
    }
  }
`;
export default Error;
