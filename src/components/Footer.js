import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <h5>Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.</h5>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: var(--primary-800);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 45px 0;
  margin-top: 60px;
  h5 {
    color: var(--primary-200);
    margin: 0 10px;
    text-align:center;
  }
`;
export default Footer;
