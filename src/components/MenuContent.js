import React from "react";
import styled from "styled-components";

import Menus from "./Menus";

function MenuContent() {
  return (
    <Wrapper>
      <Menus />
    </Wrapper>
  );
}
const Wrapper = styled.section`
  margin: 60px auto;
  padding: 0 50px;

  h2 {
    text-align: center;
    margin-top: 40px;
  }
`;
export default MenuContent;
