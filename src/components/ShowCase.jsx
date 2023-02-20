import React from 'react'
import { BouncyBalls, CircularLoader, LinearLoader, HamBurger } from './index'
import '../style/index.sass'

const ShowCase = () => {

    return (
        <div className="showcase__container">
            <header>
                <div className='header__inner'>
                    <div className='hdui-logo'>HD UI</div>
                    <div className='component-search__container'>SEARCH</div>
                </div>
            </header>
            <div className='showcase__types'>
                <h1>Loaders</h1>
                <div className='showcase__items'>
                    <div className='item'>
                        <LinearLoader />
                        <code>{`<LinearLoader />`}</code>
                    </div>

                    <div className='item'>
                        <CircularLoader />
                        <code>{`<CircularLoader />`}</code>
                    </div>

                    <div className='item'>
                        <BouncyBalls />
                        <code>{`<BouncyBalls />`}</code>
                    </div>

                </div>
            </div>
            <div className='showcase__types'>
                <h1>Menu</h1>
                <div className='showcase__items'>
                    <div className='item'>
                        <HamBurger onOpen={(e) => console.log('ham open')} onClose={(e) => console.log('ham close')} />
                        <code>{`<HamBurger />`}</code>
                    </div>
                </div>
            </div>
        </div>)
}

export default ShowCase;