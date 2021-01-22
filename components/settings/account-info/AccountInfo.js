import React, {useState} from 'react'
import {StyledAccountInfo, StyledPretitle, StyledBold, StyledSmallText, ButtonError} from './AccountInfoStyles'
import {ButtonPrimary, ButtonOpacity, ButtonTransparent} from '@/components/global/Button'
import {HeaderThree, Body}  from '@/components/global/Text'
import {Header} from '../reusables/Header'
import Modal from '../reusables/Modal'


const AccountInfo = () => {
    const [modalActive, setModalActive] = useState(false)

    const ModalContent = () => {
        return(
            <>
                <HeaderThree className="card-header">Close Account</HeaderThree>
                <Body className='card-body'>Are you sure you want to close your account?</Body>
                <ButtonError className="close-account-btn"> CLOSE ACCOUNT</ButtonError>
                <ButtonTransparent onClick={() => setModalActive(!modalActive)}>CANCEL</ButtonTransparent>
            </>
        )
    }
    
    return (
        <StyledAccountInfo>
            <Header headerText="Account Information"/>
            <div className="info container">
                <div className="username">
                    <StyledPretitle>Username</StyledPretitle>
                    <StyledBold>johndoe23</StyledBold>
                </div>
                <div className="name container">
                    <StyledPretitle>name</StyledPretitle>
                    <StyledBold>John Doe</StyledBold>
                </div>
                <div className="email container">
                    <StyledPretitle>Email</StyledPretitle>
                    <StyledBold>joh******doe@email.com</StyledBold>
                </div>
                <div className="timezone container">
                    <StyledPretitle>Timezone</StyledPretitle>
                    <StyledBold>UTC + 08:00 (Philippines)</StyledBold>
                </div>
                <div className="address container">
                    <StyledPretitle>Address</StyledPretitle>
                    <StyledBold>Vel pharetra, vivamus id egestas est mauris. Vel justo commodo auctor est nec augue at elit, nunc. Augue eu diam magna ac ut viverra elit, aliquet vestibulum. At pharetra feugiat amet convallis.</StyledBold>
                </div>
                <div className="phone container">
                    <StyledPretitle>Phone</StyledPretitle>
                    <StyledBold>+63**********890</StyledBold>
                </div>

                <ButtonPrimary>Connect Calendly</ButtonPrimary>
                <StyledSmallText>Sync your Calendly account to Elancerz calendar</StyledSmallText>
                <ButtonError onClick={() => setModalActive(!modalActive)}>Close Account</ButtonError>
            </div>
                <Modal modalActive={modalActive} setModalActive={setModalActive} content={<ModalContent />}>
                    
                </Modal>
        </StyledAccountInfo>
    )
}

export default AccountInfo
