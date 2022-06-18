import styled from "styled-components";
import { FaRegCalendarCheck } from "react-icons/fa";
import moment from "moment";
function News() {
  return (
    <Wrapper>
      <h1>Recent News</h1>
      <hr className='hr' />
      <div className='news-container'>
        <div>
          <h3>Annual Cooking Contest</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            optio quisquam. Iste nam velit ullam ..
          </p>
          <p>
            <FaRegCalendarCheck />{" "}
            {moment(new Date(2022, 5, 12).getTime()).format("Do MMM YYYY")}
          </p>
        </div>
        <div>
          <h3>10years Anniversary</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            dolor beatae magnam qui atque expedita impedit?
          </p>
          <p>
            <FaRegCalendarCheck />{" "}
            {moment(new Date(2022, 6, 12).getTime()).format("Do MMM YYYY")}
          </p>
        </div>

        <div>
          <h3>Renovation</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            vitae, aliquid quidem libero tenetur deleniti?
          </p>
          <p>
            <FaRegCalendarCheck />{" "}
            {moment(new Date(2022, 5, 22).getTime()).format("Do MMM YYYY")}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  h1 {
    text-align: center;
    margin-bottom: 5px;
  }

  .news-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: space-around;
    column-gap: 30px;
    margin: 40px auto;
  }
  .news-container div {
    width: 100%;
    border-top-left-radius: 120px;
    border-bottom-right-radius: 120px;
    background-color: var(--primary-400);
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    padding: 30px;
  }
  @media (max-width: 992px) {
    .news-container {
      grid-template-columns: none;
      grid-template-rows: repeat(3, 1fr);
      row-gap: 30px;
    }
  }
`;
export default News;
