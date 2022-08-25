import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {FooterSelect} from "../type";

const Container = styled.form`
  position: relative;
  padding-bottom: 0;
  font-size: .875rem;
  font-weight: 700;
  border: none;
`;

const SocialFormLabel = styled.label`
  font-size: .875rem;
  font-weight: 700;
  text-align: center;
`;

const SocialSelect = styled.select`
  padding-right: 1rem;
  width: 11rem;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  border: none;
  background-color: #f5f5f5;
`;

const SocialForm = () => {

    const [footerSelectList, setFooterSelectList] = useState<FooterSelect[]>([]);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        async function fetchFooterSocialList() {
            const response = await fetch("/mock/socials.json");
            const result = await response.json();
            setFooterSelectList(result.selectOption);
        }

        fetchFooterSocialList();
    }, []);

    return (
        <Container>
            <SocialFormLabel>Choose a language:</SocialFormLabel>
            <SocialSelect name="language">
                {footerSelectList.map((item) => {
                    return (
                        <option
                            key={item.id}
                            selected={selected === item.id}
                            value={item.value}
                            onClick={setSelected.bind(this, item.id)}
                        >
                            {item.title}
                        </option>
                    )
                })}
            </SocialSelect>
        </Container>
    )
};

export default SocialForm;