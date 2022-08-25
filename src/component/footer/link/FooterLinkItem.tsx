import styled from "@emotion/styled";
import {FooterLinkItemProps} from "../type";

const Container = styled.div<{isBold: boolean}>`
    ${({isBold}) => isBold ?
    `margin-bottom: 1.5rem;
            margin-top: 0;
            font-size: 0.9375rem;
            line-height: 1.5rem;
            font-weight: 700;`
    :  `margin-bottom: 0rem;
                margin-top: 1rem;
                font-size: 0.875rem;
                line-height: 1.5rem;
                font-weight: 400;
                cursor: pointer;
                :hover {
                  text-decoration: underline;
                  color: #39ac37;
                }`};
`;

const FooterLinkItem = ({isBold, title}: FooterLinkItemProps) => {
    return (
        <Container isBold={isBold}>
            {title}
        </Container>
    )
};

export default FooterLinkItem;