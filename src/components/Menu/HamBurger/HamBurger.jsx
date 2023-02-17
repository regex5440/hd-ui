import './hamburger.sass';

const HamBurger = ({ onOpen, onClose, extendedMotion }) => {
    const clickHandler = e => {
        if (e.target.checked) onOpen(e)
        else onClose(e)
    }
    return (<div className="hd-ui-hamurger hamburger-container">
        <input type="checkbox" id="ham-menu1" hidden onChange={clickHandler} title='HamBurger' />
        <label className='container__inner' htmlFor='ham-menu1'>
            <div className='stroke1 stroke'></div>
            <div className='stroke2 stroke'></div>
            <div className='stroke3 stroke'></div>
        </label>
    </div>)
}


export default HamBurger;