import React, { useState } from 'react';
import { ChevronDown } from "react-feather"

import { 
    TopOptionWrapper,  
    Tab,
    Radio,
    BoxLeft,
    InputGroup,
    RadioCircle,
    IconWrapper
} from './TopOptionStyles'

const SELECTED = {
    ACTIVE: 'active',
    COMPLETED: 'completed'
}


const TopOptions = ({ setIsActive }) => {
    const [selected, setSelected] = useState(SELECTED.ACTIVE)
 
  return (
        <TopOptionWrapper>
          <BoxLeft>
              <InputGroup>
                <input type="text" id="options" name="options" placeholder="Recently updated"/>
                <IconWrapper><ChevronDown color="#8C91A1"/></IconWrapper>
              </InputGroup>
          </BoxLeft>
          <Tab>
                <Radio onClick={() => {
                    setSelected(SELECTED.ACTIVE)
                    setIsActive(true)
                }}>
                   <RadioCircle  active={selected === SELECTED.ACTIVE ? true : false}  />
                   Active
                </Radio>
                <Radio onClick={() => {
                    setSelected(SELECTED.COMPLETED)
                    setIsActive(false)
                }}>
                    <RadioCircle  active={selected === SELECTED.COMPLETED ? true : false}/>
                    Completed
                </Radio>
          </Tab>
        </TopOptionWrapper>
  )
};

export default TopOptions;
