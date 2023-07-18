import React from 'react';

const ErrorMessage = ({error}) => {
    return (
        <p className={'error'}>

            <span>🛑 {error}</span>
        </p>
    );
};

export default ErrorMessage;
