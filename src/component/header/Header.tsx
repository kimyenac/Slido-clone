import SlidoLogo from "./logo/SlidoLogo";
import HeaderMenu from "./menu/HeaderMenu";
import styled from "@emotion/styled";
import {MenuProps} from "./menu/types";
import { useState, useEffect } from "react";
import classNames from "classnames";
import HeaderAccount from "./acount/HeaderAccount";

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 0 0;
  background-color: #fff;
  
  z-index: 1;
  
  &.scrolling {
    box-shadow: 0 0.125rem 0.125rem rgb(0, 0, 0, 0.1);
  }
`;

const NavContainer = styled.nav`
  position: relative;
  height: 3.438rem;
  max-width: 1280px;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = ({ menuList }: MenuProps) => {
    const [scrollY, setScrollY] = useState(false);
    const scrollEvent = () => {
        if (window.scrollY) {
            setScrollY(true);
        } else {
            setScrollY(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollEvent);

        return () => window.removeEventListener('scroll', scrollEvent);
    }, []);

    return (
        <Container className={classNames({ scrolling: scrollY})}>
            <NavContainer>
                <SlidoLogo />
                <HeaderMenu list={menuList} />
                <HeaderAccount />
            </NavContainer>.
        </Container>
    );
}

export default Header;