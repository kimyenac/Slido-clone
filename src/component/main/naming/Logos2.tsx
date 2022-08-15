import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {LogoItem2} from "./types";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 56px 32px;
  background-color: #f5f5f5;
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
  gap: 4px;
`;

const Logos2 = () => {
    const [logosList, setLogosList] = useState<LogoItem2[]>([]);

    useEffect(() => {
        async function fetchLogosList() {
            const response = await fetch("/mock/customers.json");
            const result = await response.json();
            setLogosList(result.customerList);
        }

        fetchLogosList();
    }, []);

    return (
        <Container>
            <ItemContainer>
                {logosList.map((logo) => (
                    <Item key={logo.id}>
                        <img src={logo.companyLogo} alt={logo.company} />
                    </Item>
                ))}
            </ItemContainer>
        </Container>
    )
};

export default Logos2;