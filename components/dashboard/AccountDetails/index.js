import React from 'react';
import Image from 'next/image';

import { 
    Wrapper,
    BoxWrapper,
    BoxLeft,
    BoxRight,
    Heading,
    Value,
    Percentage
} from './AccountDetailStyles'

const AccountDetails = ({ accountLabel, accountImageUrl, percent, acountAmount, isFreelancer }) => {

  return (<>
        <Wrapper>
            <Image className="accountDetailsImage" src={ accountImageUrl } height="200px" width="320px" />
            <Heading>{ accountLabel }</Heading>
            <BoxWrapper>
                <BoxLeft>
                    <Value>$ { acountAmount }</Value>
                </BoxLeft>
                <BoxRight>
                    { isFreelancer ? <Image src="/icons/doubleArrowUpSuccess.svg" height="24px" width="24px" /> : <Image src="/icons/doubleArrowDown.svg" height="24px" width="24px" />}
                    <Percentage doRed={ !isFreelancer }>{ percent }%</Percentage>
                </BoxRight>
            </BoxWrapper>
        </Wrapper>
        <style jsx global> {`
            .accountDetailsImage {
                margin:0 auto;
                display:block;
                float:none;
            }
        `}
        </style>
        </>
  )
};

export default AccountDetails;
