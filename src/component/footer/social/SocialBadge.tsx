import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {BadgeItem} from "../type";

const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  grid-gap: 1.5rem;
  gap: 1.5rem;
`;

const Container = styled.li`
  display: flex;
  justify-content: center;
  
  a {
    width: 5.5rem;
    height: 5.5rem;
  }
  
  a:nth-of-type(n+1) {
    margin-right: 25px;
  }
`;

const BadgeIcon = styled.img`
  width: 200px;
`;

const SocialBadge = () => {

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
        <Wrapper>
            <Container>
                {badgeList.map((item) => (
                    <a key={item.id} href='/'>
                        <BadgeIcon src={item.icon} alt={item.title} />
                    </a>
                ))}
            </Container>
        </Wrapper>
    )
};

export default SocialBadge;