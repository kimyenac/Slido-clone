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
  padding: 16px 0 0;
  
  &.scrolling {
    box-shadow: 0 0.125rem 0.125rem rgb(0, 0, 0, 0.1);
  }
`;

const NavContainer = styled.nav`
  position: relative;
  height: 55px;
  max-width: 1280px;
  padding: 0 32px;
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