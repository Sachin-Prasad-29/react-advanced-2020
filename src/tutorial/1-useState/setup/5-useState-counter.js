import React, { useState } from 'react';

const UseStateCounter = () => {
    const [value, setValue] = useState(0);
    const reset = () => {
        setValue((value) => {
            return 0;
        });
    };
    const complexIncrease = () => {
        setTimeout(() => {
            setValue((value) => {
                return value + 1;
            });
        }, 2000);
    };

    return (
        <>
            <section style={{ margin: ' 4rem 0' }}>
                <h2>Regular counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={() => setValue(value - 1)}>
                    Decrease
                </button>
                <button className='btn' onClick={reset}>
                    reset
                </button>
                <button className='btn' onClick={() => setValue(value + 1)}>
                    Increase
                </button>
            </section>
            <section style={{ margin: ' 4rem 0' }}>
                <h2>Complex counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={complexIncrease}>
                    {' '}
                    increase Later
                </button>
            </section>
        </>
    );
};

export default UseStateCounter;
