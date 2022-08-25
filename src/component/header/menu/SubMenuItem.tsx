/** @jsxImportSource @emotion/react */

import { jsx, css } from "@emotion/react";
import {SubProps} from "../types";
import styled from "@emotion/styled";
import {useState} from "react";
import {Icon, Title, Description, Link} from "./subMenuRight";

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 2.5rem;
  padding: 1.5rem 0;
  margin-top: -0.5rem;

  background-color: #fff;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  border-radius: 0.25rem;
  z-index: 4;
  
  display: flex;
`;

const Left = styled.div`
  border-right: 1px solid #eee
`;

const Right = styled.div`
  width: 24rem;
  padding: 2rem;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 16px;
`;

const SubMenuItemDropdown = styled.div<{selected: boolean}>`
  height: 48px;
  padding: 0 32px;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  ${({selected}) => selected && css`background-color: #f4f4f4`}
`;

const SubMenuItem = ({list}: SubProps) => {
    const [currentIdx, setCurrentIdx] = useState<number>(0);
    const currentItem = list[currentIdx];
    const isShowRight = currentItem.description && currentItem.icon;
    return (
        <Container>
            <Left>
                {list.map((menu, idx) => (
                    <SubMenuItemDropdown key={menu.id} selected={currentIdx === idx} onMouseOver={setCurrentIdx.bind(this, idx)}>
                        {menu.name}
                    </SubMenuItemDropdown>
                ))}
            </Left>
            {isShowRight && (
                <Right>
                    <Icon src={currentItem.icon} alt={currentItem.name}></Icon>
                    <Title>{currentItem.name}</Title>
                    <Description>{currentItem.description}</Description>
                    <Link>Learn More</Link>
                </Right>
            )}
        </Container>
    )
}


export default SubMenuItem