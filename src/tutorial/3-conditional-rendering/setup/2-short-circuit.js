import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false);
    return (
        <>
            <h1>{text || 'Hello world'}</h1>
            <button className='btn' onClick={() => setIsError(!isError)}>
                Toggle Error
            </button>
            <h1>{isError && 'Error...'}</h1>
            {isError ? <h1>There is An Error...</h1> : <h1>There is no Error...</h1>}
        </>
    );
};

export default ShortCircuit;
