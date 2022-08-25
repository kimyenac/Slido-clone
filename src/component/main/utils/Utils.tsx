import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import { UtilItem } from "../types";

const Container = styled.div`
  width: 80rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3.5rem 2rem;
`;

const SubHeadline = styled.h2`
  text-align: center;
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: -0.5px;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  line-height: 2rem;
  letter-spacing: -0.5px;
  text-align: center;
`;

const Utils = () => {

    const [logosList, setLogosList] = useState<UtilItem[]>([]);

    useEffect(() => {
        async function fetchLogosList() {
            const response = await fetch("/mock/integrations.json");
            const result = await response.json();
            setLogosList(result.result);
        }

        fetchLogosList();
    }, []);

    return (
        <Container>
            <SubHeadline>You can use Slido with</SubHeadline>
            <ItemContainer>
                {logosList.map((logo) => (
                    <Item key={logo.id}>
                        <img src={logo.icon} />
                        <SubTitle>{logo.name}</SubTitle>
                    </Item>
                ))}
            </ItemContainer>
        </Container>
    )
}

export default Utils