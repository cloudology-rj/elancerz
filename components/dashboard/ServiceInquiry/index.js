import React from 'react';
import Image from 'next/image';
import { ButtonPrimary } from "@/components/global/Button"
import { 
    Wrapper,
    Text,
    Inquiry,
    Title
} from './ServiceInquiryStyles'

import Person from './Person';

const ServiceInquiry = ({ inquiryTitle, inquiryLink,  inquiryButtonText, people, shortText }) => {

  return (
        <Wrapper>
            <Image src="/illustrations/inquiry-illustration.svg" height="280px" width="400px" />
            <Title>{ inquiryTitle }</Title>
            <Inquiry>
                { people && people.map((person, index) => <Person key={index} imageUrl={person.imageUrl} />)}
            </Inquiry>
            <Text>{ shortText }</Text>
            <ButtonPrimary href={inquiryLink}>{ inquiryButtonText }</ButtonPrimary>
        </Wrapper>
  )
};

export default ServiceInquiry;
