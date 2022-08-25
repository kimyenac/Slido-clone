import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import { companyLogoItem } from "../types";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3.5rem 2rem;
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
  gap: 0.25rem;
`;

const CompanyLogos = () => {
    const [logosList, setLogosList] = useState<companyLogoItem[]>([]);

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

export default CompanyLogos;