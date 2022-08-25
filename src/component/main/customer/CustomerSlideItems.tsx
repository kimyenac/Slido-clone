import styled from "@emotion/styled";
import {CustomerData, CustomerSlideProps} from "../types";
import { css, keyframes } from "@emotion/react";

const moveToLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const moveToRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const SlideContainer = styled.div<CustomerSlideProps>`

  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  ${({ isCurrent, dir }) => dir === "left" && isCurrent 
          ? css`
            top: 0;
            left: 0;
        ` : dir === "left" && !isCurrent 
                  ? css`
                  top: 0;
                  left: -100%;`
                  : dir === "right" && isCurrent 
                          ? css`
                          top: 0;
                          right: 0;
        `                 : dir === "right" && !isCurrent 
                                  ? css`
                                  top: 0;
                                  right: -100%;
        `                         : css`
                                    top: 0;
                                    left: 0; `}
  ${({ dir }) => dir === "left"
          ? css`
            animation: ${moveToLeft} 0.5s;
        ` : dir === "right" 
                  ? css`
                  animation: ${moveToRight} 0.5s;`
                  : css`animation: none;`}
`;

const ReviewWrap = styled.div`
  max-width: 36.25rem;
  margin-left: 5rem;
  margin-top: 3.125rem;
`;

const CustomerImg = styled.div`
  margin-right: 6.25rem;
`;

const Logo = styled.img`
  height: 2rem;
`;

const Comment = styled.p`
  letter-spacing: -0.5px;
  font-size: 1.75rem;
  line-height: 2.5rem;
  text-align: start;
  margin-top: 1.5rem;
`;

const Staff = styled.p`
  margin-top: 1rem;
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: -0.5px;
  text-align: start;
`;

const StaffImg = styled.img`
  margin-right: 14px;
  height: 32.625rem;
`;

const CustomerSlideItems = ({customerItem, isCurrent = false, dir}:
                                { customerItem: CustomerData;
                                    isCurrent?: boolean;
                                        dir?: "left" | "right";}) => {

    return (
        <SlideContainer isCurrent={isCurrent} dir={dir} key={customerItem.id}>
            <ReviewWrap>
                <Logo src={customerItem.companyLogo} alt={customerItem.company} />
                <Comment>"{customerItem.comment}"</Comment>
                <Staff>{customerItem.staff}</Staff>
            </ReviewWrap>
            <CustomerImg>
                <StaffImg src={customerItem.staffPhoto} alt={customerItem.staff} />
            </CustomerImg>
        </SlideContainer>
    )
}

export default CustomerSlideItems;