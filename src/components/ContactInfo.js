import styled from "styled-components";
import { FiMap, FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
function ContactInfo() {
  return (
    <Wrapper>
      <div className='contact-container'>
        <div className='info-container'>
          <h3>Contact Info</h3>
          <div>
            <p>
              <span className='icon'>
                <FiMap className='icon' />
              </span>
              Address: <span>3338 Griffin Street ,Phoenix,Azona State</span>
            </p>
            <p>
              <span className='icon'>
                <FiPhoneCall className='icon' />
              </span>
              Phone: <span>+234 9999 9999 999</span>
            </p>
            <p>
              <span className='icon'>
                <HiOutlineMail className='icon' />
              </span>
              Email: <span>testing@gmail.com</span>
            </p>
          </div>
        </div>

        <form>
          <div>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' />
          </div>
          <div>
            <label htmlFor='email' required>
              Your Email
            </label>
            <input type='email' id='email' />
          </div>
          <div className='sub'>
            <label htmlFor='subject'>Subject</label>
            <input type='text' id='subject' />
          </div>
          <div className='text'>
            <label htmlFor='message'>Message</label>
            <textarea type='text' id='message' />
          </div>
          <button className='submit-btn' type='submit'>
            Send Message
          </button>
        </form>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  .contact-container {
    width: 70%;
    height: 600px;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 50px auto;
    display: grid;
    grid-template-columns: 30% 70%;
    column-gap: 30px;
    padding: 0 80px;
  }
  .info-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
  .info-container h3 {
    font-weight: 600;
  }
  .info-container p {
    font-size: 1.1rem;
  }
  span {
    color: var(--primary-400);
    margin: 0 5px;
  }
  .icon {
    color: var(--grey-700);
    margin-right: 7px;
    font-size: 1.3;
  }
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
  }
  .sub {
    grid-column: span 2/3;

    width: 100%;
    margin: 0;
  }
  .text {
    grid-column: span 2/3;
  }
  input,
  textarea {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    background-color: transparent;
    border: 0;
    max-height: 100px;
    max-width: 600px;
    border-bottom: 3px solid var(--primary-800);
  }
  .submit-btn {
    background-color: var(--primary-800);
    border: 0;
    border-radius: 20px;
    padding: 10px 20px;
    color: var(--grey-200);
    grid-column: span 2/3;
  }
  .submit-btn:hover {
    background-color: var(--grey-200);
    color: var(--primary-800);
    transition: 0.5s ease-in-out;
  }
  @media (max-width: 992px) {
    .contact-container {
      grid-template-columns: none;
      grid-template-rows: 30% 70%;
      height: 900px;
      padding: 40px 30px;
      row-gap: 20px;
    }
    .info-container {
      align-items: center;
    }
    .info-container div {
      display: flex;
      flex-wrap: wrap;
    }
    p {
      margin: 5px;
    }
    h1 {
      text-align: center;
    }
  }
`;
export default ContactInfo;
