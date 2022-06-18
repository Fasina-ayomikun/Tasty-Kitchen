import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../images/favicon_io/navlogo.png";
import { FaInstagram, FaFacebook, FaAlignRight } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsPersonPlusFill } from "react-icons/bs";
import { BsFillPersonDashFill } from "react-icons/bs";
import { useAppProvider } from "../context/context";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";

function Navbar() {
  const { openSidebar } = useAppProvider();
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();
  if (isLoading) {
    return (
      <div className='loading-container'>
        <Loading />
      </div>
    );
  }
  return (
    <Wrapper className='zindex'>
      <div className='nav-center'>
        <img src={logo} alt='logo' className='logo' />
        <ul className='links'>
          <li className='nav-link'>
            <NavLink to='/' activeclassname='active'>
              Home
            </NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to='/about' activeclassname='active'>
              About
            </NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to='/menu' activeclassname='active'>
              Menu
            </NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to='/contact' activeclassname='active'>
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className='social-icons'>
          <li className='social-icon'>
            <a href='https://www.instagram.com'>
              <FaInstagram />
            </a>
          </li>
          <li className='social-icon'>
            <a href='https://www.twitter.com'>
              <FiTwitter />
            </a>
          </li>
          <li className='social-icon'>
            <a href='https://www.instagram.com'>
              <FaFacebook />
            </a>
          </li>
          <li>
            {isAuthenticated ? (
              <BsFillPersonDashFill
                className='login-btn'
                onClick={() => logout({ returnTo: window.location.origin })}
              />
            ) : (
              <BsPersonPlusFill
                className='login-btn'
                onClick={() => loginWithRedirect()}
              ></BsPersonPlusFill>
            )}
          </li>
        </ul>

        <FaAlignRight className='toggle-btn' onClick={() => openSidebar()} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background-color: var(--primary-700);

  color: #ffff;
  margin: 0;
  padding: 5px 10px;
  height: 90px;
  display: flex;
  align-items: center;
  z-index: 4;
  .logo {
    width: 50px;
    height: 50px;
  }
  .nav-center {
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90vw;
    margin: 0 auto;
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .nav-link a {
      margin: 0 30px;
      font-weight: 300;
      font-size: 1.3rem;
      color: var(--grey-300);
    }
    .nav-link > a:hover {
      border-bottom: 3px solid var(--primary-300);
      padding-bottom: 33px;
      transition: 0.5s ease-in-out;
    }
  }
  .social-icons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .social-icon,
    a {
      margin: 0 10px;
      color: var(--grey-300);
    }
    .social-icon a:hover {
      color: var(--primary-300);
      transition: 0.3s ease-in-out;
    }
  }
  .toggle-btn {
    display: none;
  }
  .active,
  .active a {
    padding: 33px 0;
    background-color: var(--primary-300);
    border-bottom: 3px solid var(--grey-900);
  }
  .login-btn {
    color: var(--grey-300);
    font-size: 2rem;
  }
  .login-btn:hover {
    color: var(--primary-100);
    transition: 0.5s ease-in-out;
  }
  @media (max-width: 992px) {
    .toggle-btn {
      display: block;
      width: 30px;
      height: 30px;
      color: var(--grey-300);
    }

    .links {
      display: none;
    }
    .login-btn {
      display: none;
    }
  }
`;
export default Navbar;
