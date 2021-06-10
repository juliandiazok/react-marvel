import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: white;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((50vw - 1000px) / 2);
    z-index: 10;
    /* Third Nav */
    /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  padding: 0 0.3rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: red;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
    font-size: 16px;
    opacity: 0.4;
  width: 100vw;
  white-space: nowrap;
  @media screen and (max-width: 510px) {
    display: none;
  }
`;


export const NavSearch = styled.div`
    margin-left: 1vw;
    font-size: 16px;
    opacity: 0.4;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 510px) {
    display: none;
  }
`;

export const InputSearch = styled.div`
    margin-left: 0.5vw;
    background-color: white;
    outline: none !important;
    border-width: 0px;
    border: none !important;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 510px) {
    display: none;
  }
`;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    font-size: 18px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: white;
  padding: 10px 22px;
  color: #BDBDBD;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-right: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: red;
    color: #BDBDBD;
  }
  @media screen and (max-width: 510px) {
    margin-right: 5px;
  }
`;

export const NavHidden = styled.nav`
  display: none;
  @media screen and (max-width: 510px) {
    margin-top: -15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding-top: 5px;
    border-top: 0.5px solid #E0E0E0;
  }
`;

export const NavHiddenSearch = styled.nav`
  margin-left: 1vw;
  font-size: 16px;
  opacity: 0.3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavHiddenInput = styled.nav`
  margin-left: 0.5vw;
  opacity: 0.4;
  margin-bottom: 4px;
  background-color: white;
  outline: none !important;
  border-width: 0px;
  border: none !important;
`;