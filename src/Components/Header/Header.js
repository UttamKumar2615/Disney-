import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="Home" />
          <span>Home</span>
        </a>
        <a href="/search">
          <img src="/images/search-icon.svg" alt="Search" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="Watch" />
          <span>WatchList</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="Original" />
          <span>Originals</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="Movies" />
          <span>Movies</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="Series" />
          <span>Series</span>
        </a>
      </NavMenu>
      <UserImg src="" alt="" />
    </Nav>
  );
}

export default Header;
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  z-index: 3;
  letter-spacing: 16px;
`;
const Logo = styled.a`
  width: 80px;
  padding: 0;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      font-size: 13px;
      color: rgb(249, 249, 249);
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      text-transform: uppercase;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        content: "";
        border-radius: 0px 0px 4px 4px;
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left-center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
