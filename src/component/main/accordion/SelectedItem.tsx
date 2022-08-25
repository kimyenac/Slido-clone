import {AccordionItem} from "../naming/types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

type Props = {
    item: AccordionItem;
    selected: boolean;
    selectedState: () => void;
}

const Container = styled.div<{selected: boolean}>`
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 90%;

  ${({ selected }) =>
          selected ?
                  css`
                      gap: 1.5rem;
                      box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 15%);
                      border-radius: 0.25rem;`
                  : css`border: none;`}
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const ArrowDown = styled.img<{selected: boolean}>`
    ${({selected}) => selected && css`transform: rotate(180deg);`}
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
`;

const SelectedItem = ({item, selected, selectedState}: Props) => {
    return (
        <Container selected={selected} onClick={selectedState}>
            <TitleWrapper>
                <TitleContainer>
                    <img src={item.icon} />
                    <Title>{item.title}</Title>
                </TitleContainer>
                <ArrowDown src={"/icons/ic_arrow_down.svg"} selected={selected} />
            </TitleWrapper>
            {selected && (
                <div>
                    <Description>{item.description}</Description>
                </div>
            )}
        </Container>
    )
};

export default SelectedItem;