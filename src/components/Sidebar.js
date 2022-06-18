import React from "react";
import { FaFacebook, FaInstagram, FaTimes, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsPersonPlusFill } from "react-icons/bs";
import { BsFillPersonDashFill } from "react-icons/bs";
import logo from "../images/favicon_io/navlogo.png";
import { useAppProvider } from "../context/context";
import Loading from "./Loading";
import { useAuth0 } from "@auth0/auth0-react";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useAppProvider();
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
    <Wrapper className={`${isSidebarOpen ? "bcg" : null}`}>
      <div className={`${isSidebarOpen ? "container show" : "container"}`}>
        <div>
          <img src={logo} alt='logo' />
          <FaTimes className='close-btn' onClick={() => closeSidebar()} />
        </div>

        <ul className='links'>
          <li>
            <NavLink
              to='/'
              activeclassname='active'
              onClick={() => closeSidebar()}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              activeclassname='active'
              onClick={() => closeSidebar()}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/menu'
              activeclassname='active'
              onClick={() => closeSidebar()}
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              activeclassname='active'
              onClick={() => closeSidebar()}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className='social-icons'>
          <li>
            <a href='https://www.instagram.com' target='blank'>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com' target='blank'>
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' target='blank'>
              <FaTwitter />
            </a>
          </li>
          <li className='login-icon'>
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
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  img {
    height: 60px;
  }
  .container div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .container {
    width: 70vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 7;
    transform: translateX(-100%);
    visibility: visible;
    background-color: var(--primary-100);
    height: 100vh;
    padding: 30px 40px;
    transition: 0.5s ease-out;
  }
  .show {
    visibility: visible;
    transform: translateX(0);
    transition: 0.5s ease-in;
  }

  .links {
    margin-top: 60px;
  }
  .links li a {
    color: var(--primary-800);
    font-weight: 400;
    font-size: 1.3rem;
    &:hover {
      color: var(--primary-400);
    }
  }
  .links li {
    margin-bottom: 20px;
  }
  .social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
  }
  .social-icons li a {
    margin: 0 10px;
    &:hover {
      color: var(--grey-400);
    }
  }
  .login-icon a {
    font-size: 2rem;
    color: var(--primary-400);
  }
  .close-btn {
    font-size: 2rem;
  }
  .active,
  .active a {
    padding-left: 10px;
  }
`;
export default Sidebar;
