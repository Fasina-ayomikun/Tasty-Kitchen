import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PageHero({ title }) {
  return (
    <Wrapper className='zindex'>
      <h5>
        <Link to='/'>Home</Link>/<span>{title}</span>
      </h5>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;

  background-color: var(--primary-300);
  margin: auto;
  padding: 30px 100px;
  text-transform: capitalize;

  h5 {
    color: var(--primary-900);

    margin: 0;
  }
  span {
    color: var(--primary-100);
  }
`;
export default PageHero;
