import React from 'react'
import PropTypes from 'prop-types'

import Input from '@/components/global/Input';
const InputGroup = ({error}, ...props) => {

console.log(props);

    return (
        <div>
            <Input />
            <span>
                {error}
            </span>
            
        </div>
    )
}

InputGroup.propTypes = {

}

export default InputGroup