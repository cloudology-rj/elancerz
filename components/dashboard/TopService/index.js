import React from 'react';
import Image from 'next/image';
import { ButtonPrimary } from "@/components/global/Button"
import { 
    Wrapper,
    BoxLeft,
    BoxRight,
    Title
} from './TopServiceStyles'

const TopService = ({ title, link, buttonText }) => {

  return (
        <Wrapper>
            <BoxLeft>
                <Image src="/illustrations/search-illustration.svg" height="165px" width="160px" />
            </BoxLeft>
            <BoxRight>
                <Title>{ title }</Title>
                <ButtonPrimary href={link}>{ buttonText }</ButtonPrimary>
            </BoxRight>
        </Wrapper>
  )
};

export default TopService;
