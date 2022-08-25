import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import { BadgeItem } from "../types";

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  padding: 3.5rem 0;
  justify-content: space-around;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`;

const ItemContainer = styled.ul`
  display: flex;
  gap: 2rem;
`;

const Item = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
`;

const Badges = () => {

    const [badgeList, setBadgeList] = useState<BadgeItem[]>([]);

    useEffect(() => {
        async function fetchLogosList() {
            const response = await fetch("/mock/badges.json");
            const result = await response.json();
            setBadgeList(result.result);
        }

        fetchLogosList();
    }, []);

    return (
        <Container>
            <ItemContainer>
                {badgeList.map((badge) => (
                    <Item key={badge.id}>
                        <img src={badge.icon} alt={badge.title} />
                    </Item>
                ))}
            </ItemContainer>
        </Container>
    )
}

export default Badges