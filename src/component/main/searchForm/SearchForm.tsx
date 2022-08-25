import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState } from "react";

const Wrapper = styled.form`
  text-align: center;
`;

const Container = styled.div`
  margin: 1.5rem 0 2.125rem;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  border-radius: 2rem;
  
  position: relative;
  background-color: #1a73e8;
`;

const Label = styled.span`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
  color: #fff;
  padding-right: 2rem;
`;

const InputContainer = styled.div`
  margin-top: 0;
  position: relative;
  display: flex;
`;

const InputIcon = styled.img<{horizontal: string}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  
  ${({horizontal}) => horizontal === 'left' ? css`left: 1rem` : css`right: 0.5rem`}
`;

const Input = styled.input`
  width: auto;
  padding: 0.5rem 2.5rem;

  font-size: 1.125rem;
  line-height: 1.5rem;
  
  border: 0.0625rem solid #999;
  background-color: #fff;
  border-radius: 1.5rem;
  
  box-sizing: content-box;
  
  &::placeholder {
    color: #000;
  }
`;

const Describe = styled.p<{inputValue: string | ''}>`
  position: absolute;
  top: 50%;
  left: calc(100% + 1rem);
  transform: translateY(-50%);
  width: 12rem;
  text-align: start;

  font-size: .85rem;
  line-height: 1.5rem;
  transition: opacity .1s;
  
  ${({inputValue}) => inputValue === '' ? css`opacity: 0` : css`opacity: 1`}
  
  a {
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    text-decoration: underline;
    color: #39ac37;
    cursor: pointer;
  }
`;

const SearchForm = () => {

    const [value, setValue] = useState('');

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <Wrapper>
            <Container>
                <Label>Joining as a participant?</Label>
                <InputContainer>
                    <InputIcon horizontal={'left'} src='/icons/search/ic_hashtag.svg' />
                    <Input
                        placeholder='Enter code here'
                        value={value}
                        onChange={(e) => onInput(e)}
                    />
                    <InputIcon horizontal={'right'} src='/icons/search/ic_next.svg' />
                </InputContainer>
                <Describe inputValue={value}>
                    By using Slido you accept our <br />
                    <a href='/Users/kimyena/Desktop/React/slido-clone/public'>Policy.</a>
                </Describe>
            </Container>
        </Wrapper>
    )
};

export default SearchForm;