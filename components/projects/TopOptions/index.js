import React, { useState } from 'react';

import { 
    TopOptionWrapper,  
    Tab,
    Radio,
    BoxLeft,
    InputGroup,
    RadioCircle
} from './TopOptionStyles'

const SELECTED = {
    ACTIVE: 'active',
    COMPLETED: 'completed'
}


const TopOptions = () => {
    const [selected, setSelected] = useState(SELECTED.ACTIVE)
 
  return (
        <TopOptionWrapper>
          <BoxLeft>
              <InputGroup>
                <input type="text" id="options" name="options" placeholder="Recently updated"/>
              </InputGroup>
          </BoxLeft>
          <Tab>
                <Radio onClick={() => setSelected(SELECTED.ACTIVE)}>
                   <RadioCircle  active={selected === SELECTED.ACTIVE ? true : false}  />
                   Active
                </Radio>
                <Radio onClick={() => setSelected(SELECTED.COMPLETED)}>
                    <RadioCircle  active={selected === SELECTED.COMPLETED ? true : false}/>
                    Completed
                </Radio>
          </Tab>
        </TopOptionWrapper>
  )
};

export default TopOptions;
