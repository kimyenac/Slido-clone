import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {useEffect, useState} from "react";
import {FooterSocial} from "../type";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.img<{key: number}>`
  ${({key}) => !(key === 1) ? css`margin-left: 1rem` : ''}
  cursor: pointer;
`;

const SocialIcon = () => {
    const [footerSocialList, setFooterSocialList] = useState<FooterSocial[]>([]);

    useEffect(() => {
        async function fetchFooterSocialList() {
            const response = await fetch("/mock/socials.json");
            const result = await response.json();
            setFooterSocialList(result.result);
        }

        fetchFooterSocialList();
    }, []);

    return (
        <Container>
            {footerSocialList.map((item) => (
                <Icon key={item.id} src={item.icon} />
            ))}
        </Container>
    )
};

export default SocialIcon;