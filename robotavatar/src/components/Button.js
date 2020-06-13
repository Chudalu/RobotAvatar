import React from 'react';

const Button = ({buttonIsClicked}) => {
    return (
        <div>
            <input type='button' onClick={buttonIsClicked} value='Enter' />
        </div>
    )
}

export default Button;