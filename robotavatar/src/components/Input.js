import React from 'react';

const Input = ({searchChange}) => {

    return (
        <div>
            <input className='pa3 ba b--blue bg-light-yellow'
            type='text' 
            placeholder='Full name'
             onChange={searchChange} />
        </div>
    )
}

export default Input;