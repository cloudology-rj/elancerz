import React from 'react'
import { Header } from '../reusables/Header'
import {StyledPayment} from './paymentStyles'

const Payment = () => {
    return (
        <StyledPayment>
            <Header headerText="Payment Details"/>
        </StyledPayment>
    )
}

export default Payment
