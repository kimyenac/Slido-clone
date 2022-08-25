import styled from "@emotion/styled";
import { CustomerData, CustomerSlideItem } from "../types";
import CustomerSlideItems from "./CustomerSlideItems";
import { useEffect, useState } from "react";
import CustomerButton from "./CustomerButton";

const Container = styled.div`;
  position: relative;
  width: 80rem;
  height: 32.625rem;
  overflow: hidden;
  margin-left: 10px;
`;

const CustomerSlide = () => {

    const [customerList, setCustomerList] = useState<CustomerData[]>([]);
    const [animationMeta, setAnimationMeta] = useState<CustomerSlideItem>({ before: -1, current: -1, isValidation: true });

    const showPrev = () => {
        setAnimationMeta((prev) => ({
            ...prev,
            before: prev.current,
            current: prev.current === 0 ? customerList.length - 1 : prev.current - 1,
            dir: "right",
        }));
    };

    const showNext = () => {
        setAnimationMeta((prev) => ({
            ...prev,
            before: prev.current,
            current: prev.current === customerList.length - 1 ? 0 : prev.current + 1,
            dir: "left",
        }));
    };

    useEffect(() => {
        async function fetchCustomerList() {
            const response = await fetch("/mock/customers.json");
            const result = await response.json();
            console.log(result);
            setCustomerList(result.reviewList);
            setAnimationMeta({ isValidation: false, before: -1, current: 0 });
        }

        fetchCustomerList();
    }, []);

    console.log(customerList)

    if (animationMeta.isValidation) return null;

    return (
        <Container>
            {animationMeta.before >= 0 && (
                <CustomerSlideItems customerItem={customerList[animationMeta.before]} dir={animationMeta.dir} />
            )}
            {animationMeta.current >= 0 && (
                <CustomerSlideItems customerItem={customerList[animationMeta.current]} dir={animationMeta.dir} isCurrent={true} />
            )}
            <CustomerButton current={animationMeta.current + 1} length={customerList.length} showPrev={showPrev} showNext={showNext} />
        </Container>
    )

};

export default CustomerSlide;