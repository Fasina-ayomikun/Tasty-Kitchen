import styled from "styled-components";
import PageHero from "./PageHero";

function AboutInfo() {
  return (
    <Wrapper>
      <PageHero title='About' />

      <div className='about-info'>
        <h1>About Us</h1>
        <hr className='hr' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          assumenda alias explicabo nihil velit, corrupti eaque earum iusto
          labore deserunt similique facere harum atque architecto, cupiditate
          consequatur qui, exercitationem obcaecati vero. Illo asperiores
          cupiditate totam quas maxime itaque dolores? Corporis eos harum ipsam
          dolorum delectus, excepturi quisquam tempora veritatis porro. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Nam molestiae,
          accusantium sequi rem tenetur ex nobis est atque! Officiis nemo quos
          sapiente, libero ipsa delectus fugit atque quod. Doloribus sapiente,
          nihil deleniti eius fuga impedit voluptate veritatis aliquid voluptas
          eos blanditiis officiis aut animi alias possimus a provident nostrum.
          Itaque.
        </p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .about-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px auto;
  }
  h1,
  p {
    text-align: center;
    margin: 20px 10px;
  }
`;
export default AboutInfo;
