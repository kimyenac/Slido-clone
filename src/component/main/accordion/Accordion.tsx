import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {AccordionItem} from "../naming/types";
import SelectedItem from "./SelectedItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem 2rem;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const AccordionVideo = styled.video`
  width: 42%;
  margin-left: 6.875rem;
`;

const AccordionList = styled.div`
  width: calc(40% - 2rem);
  margin-right: 5rem;
`;

const Accordion = () => {
    const [accordionList, setAccordionLIst] = useState<AccordionItem[]>([]);
    const [currentIdx, setCurrentIdx] = useState<number>(0);

    useEffect(() => {
        async function fetchAccordionList() {
            const response = await fetch("/mock/main-features.json");
            const result = await response.json();
            setAccordionLIst(result.result);
        }

        fetchAccordionList();
    }, []);

    if (!accordionList.length) return null;
    return (
        <Wrapper>
            <Container>
                <AccordionVideo src={accordionList[currentIdx].video} autoPlay loop playsInline muted />
                <AccordionList>
                    {accordionList.map((item, idx) => (
                        <SelectedItem key={item.id} item={item} selected={currentIdx === idx} selectedState={setCurrentIdx.bind(this, idx)} />
                    ))}
                </AccordionList>
            </Container>
        </Wrapper>
    )
};

export default Accordion;