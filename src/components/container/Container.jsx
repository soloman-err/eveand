import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[2520px] 2xl:px-60 xl:px-20'>
            {children}
        </div>
    );
};

export default Container;