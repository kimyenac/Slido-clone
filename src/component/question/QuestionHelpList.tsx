import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {QuestionList} from "./type";

const Container = styled.div`
  height: calc(100% - 128px);
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #f0f2f8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SuggestedPage = styled.div`
  color: #6b707e;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
  height: 30px;
  padding: 30px 20px 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-transform: uppercase;
`;

const ListMainContainer = styled.div`
  width: 100%;
  height: auto;
`;

const ListSubContainer = styled.div`
  
  &:first-of-type {
    border-top: 1px solid #f2f2f2;  
  }
  
  padding-left: 24px;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
  
  :hover {
    background-color: #f0f2f8;
  }
`;

const ItemWrap = styled.article`
  position: relative;
  padding: 16px 0;
  cursor: pointer;
  width: 100%;
  line-height: 16px;
  word-wrap: break-word;
  display: flex;
`;

const ItemContainer = styled.div`
  margin-left: 16px;
`;

const ItemTitle = styled.h4`
  margin: 0 0 8px;
  color: #1a1a1a;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

const ItemSubTitle = styled.div`
  cursor: pointer;
  line-height: 16px;
  word-wrap: break-word;
  
  span {
    color: #A7AEB5;
    font-size: 14px;
    font-weight: 300;
  }
`;

const NeedHelpContainer = styled.div`
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
  font-size: 14px;
  width: 100%;
  background-color: #fff;
`;

const NeedHelp = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f2f8;
  color: #6b707e;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
  height: 30px;
  padding: 30px 20px 20px;
  border-bottom: 1px solid #f2f2f2;
  text-transform: uppercase;
`;

const QuestionHelpList = () => {

    const [questionList, setQuestionList] = useState<QuestionList[]>([]);

    useEffect(() => {
        async function fetchQuestionList() {
            const response = await fetch("/mock/question.json");
            const result = await response.json();
            setQuestionList(result.result);
        }

        fetchQuestionList();
    }, []);

    return (
        <Container>
            <SuggestedPage>
                Suggested for this page
            </SuggestedPage>
            <ListMainContainer>
                {questionList.map((item) => (
                    <ListSubContainer key={item.id}>
                        <ItemWrap>
                            <div>
                                <img src='/icons/ic_file.svg' alt='file' />
                            </div>
                            <ItemContainer>
                                <ItemTitle>{item.title}</ItemTitle>
                                <ItemSubTitle>
                                    <span>
                                        {item.subTitle}
                                    </span>
                                </ItemSubTitle>
                            </ItemContainer>
                        </ItemWrap>
                    </ListSubContainer>
                ))}
            </ListMainContainer>
            <NeedHelpContainer>
                <NeedHelp>Need more help?</NeedHelp>
            </NeedHelpContainer>
        </Container>
    )
};

export default QuestionHelpList;