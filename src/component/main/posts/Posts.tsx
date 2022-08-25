import styled from "@emotion/styled";
import { PostItem } from '../types';
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  width: 100%;
`;

const Container = styled.section`
  padding: 5rem 2rem 3rem;
  position: relative;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h2`
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  text-align: center;

  font-size: 2.375rem;
  line-height: 3rem;
  font-weight: bold;
`;

const CardItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(26%,1fr));
  grid-column-gap: 2.6315789474%;
`;

const CardItems = styled.article`
  padding-top: 1rem;
  margin-bottom: 2rem;
  
  position: relative;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: 1rem;
  font-weight: bold;
  text-align: start;
  letter-spacing: -0.5px;
`;

const CardImg = styled.img`
  cursor: pointer;
`;

const CardBottom = styled.a`;
  margin-top: 1rem;
  font-weight: bold;
  padding: 0;
  border: none;
  background-color: transparent;
  color: #39ac37;
  text-decoration: underline;
  
  :hover {
    text-decoration: none;
  }
`;

const Posts = () => {
    const [cardList, setCardList] = useState<PostItem[]>([]);

    useEffect(() => {
        async function fetchCardList() {
            const response = await fetch("/mock/posts.json");
            const result = await response.json();
            setCardList(result.result);
        }

        fetchCardList();
    }, []);

    const imgClick = (href: string) => {
        window.location.href = href;
    }

    return (
        <Wrapper>
            <Container>
                <Title>Get inspired on how to use Slido</Title>
                <CardItemList>
                    {cardList.map((card) => (
                        <CardItems key={card.id}>
                            <CardImg onClick={() => imgClick(card.href)} src={card.thumbnail} alt={card.title} />
                            <CardTitle>{card.title}</CardTitle>
                            <CardBottom href={card.href}>Learn more</CardBottom>
                        </CardItems>
                    ))}
                </CardItemList>
            </Container>
        </Wrapper>
    )
};

export default Posts;