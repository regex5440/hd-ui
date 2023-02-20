import React from 'react';
import './infinite.sass';

const LinearLoader = () => {
    return (<div className='hdui-linear-loader loader-container'>
        <div className='linear-loader-surface'>
            <div className='linear-loader-animated-surface'></div>
        </div>
    </div>)
}

export default LinearLoader