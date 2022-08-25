import styled from "@emotion/styled";
import {MainProps, Tag} from "../types";
import {useState} from "react";
import SubMenuItem from "./SubMenuItem";
import {css} from "@emotion/react";

const Wrapper = styled.li`
  margin-top: 0;
  
  padding: 0.5rem 0;
  position: relative;
  
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
`;

const Container = styled.button<{isA: boolean}>`
  position: relative;
  height: 24px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;

  ${({ isA }) => isA &&
    css`
      cursor: pointer;
      :hover {
        color: #39ac37;
        text-decoration: underline solid rgb(57, 172, 55);
      }`
    }
`;

const MainMenuItem = ({item}: MainProps) => {
    const [onHover, setHover] = useState<boolean>(false);
    const tag: Tag = item.subCategories.length ? "button" : "a";
    const isA: boolean = tag === "a";

    return (
        <Wrapper onMouseEnter={setHover.bind(this, true)} onMouseLeave={setHover.bind(this, false)}>
            <Container as={tag} isA={isA}>
                {item.name}
                {onHover && !isA && (
                    <SubMenuItem list={item.subCategories} />
                )}
            </Container>
        </Wrapper>
    );

};

export default MainMenuItem;