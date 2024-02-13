import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-screen-xl mx-auto py-6 px-4'>
            {children}
        </div>
    );
};

export default Container;