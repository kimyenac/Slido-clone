import styled from "@emotion/styled";
import { CardItem } from '../types';
import { useEffect, useState } from "react";

const Container = styled.section`
  padding: 5rem 2rem 3rem;
  display: flex;
  justify-content: center;
  
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`;

const CardItemList = styled.div`
  display: flex;
  gap: 1.875rem;
`;

const CardItems = styled.div`
  padding: 2.5rem;
  background-color: #f5f5f5;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.563rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  text-align: start;
  font-weight: bold;
  letter-spacing: -0.5px;
`;

const CardSubTitle = styled.p`
  text-align: start;
  line-height: 1.75rem;
`;

const Cards = () => {
    const [cardList, setCardList] = useState<CardItem[]>([]);

    useEffect(() => {
        async function fetchCardList() {
            const response = await fetch("/mock/sub-features.json");
            const result = await response.json();
            setCardList(result.result);
        }

        fetchCardList();
    }, []);

    return (
        <Container>
            <CardItemList>
                {cardList.map((card) => (
                    <CardItems key={card.id}>
                        <img src={card.icon} alt={card.title} width={48} />
                        <CardTitle>{card.title}</CardTitle>
                        <CardSubTitle>{card.description}</CardSubTitle>
                    </CardItems>
                ))}
            </CardItemList>
        </Container>
    )
};

export default Cards;