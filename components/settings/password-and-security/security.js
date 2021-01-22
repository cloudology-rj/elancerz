import React, {useState} from 'react'
import { Header } from '../reusables/Header'
import Modal from '../reusables/Modal'
import {StyledSecurity} from './securityStyles'

const Security = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <StyledSecurity>
            <Header headerText="Password and Security"/>
            <button onClick={() => setModalActive(!modalActive)}>click</button>
            <Modal modalActive={modalActive} setModalActive={setModalActive}>
            </Modal>
        </StyledSecurity>
    )
}

export default Security
