import React, { useEffect, useRef } from "react";
import './style.sass';
import PropTypes from 'prop-types';

const TorchBox = ({ containerStyle, children, torchStyle }) => {
    const torch = useRef(null);
    useEffect(() => {
        if (torchStyle) {
            try {
                Object.entries(torchStyle).forEach(([key, value]) => {
                    if (key !== 'size') {
                        torch.current.style[key] = value;
                    } else {
                        torch.current.style.width = `${(torchStyle.size * 100).toFixed(2)}%`;
                    }
                })
            } catch (e) {
                console.error(e);
                console.log('Incorrect style format for `torchStyle` prop')
            }
        }
    }, []);
    const showTorch = () => {
        torch.current.style.visibility = 'visible';
        torch.current.style.opacity = 1
    }
    const hideTorch = () => {
        torch.current.style.visibility = 'hidden';
        torch.current.style.opacity = 0
    }
    const moveTorch = (e) => {
        e.stopPropagation();
        const { top, left } = e.currentTarget.getBoundingClientRect();
        torch.current.animate({
            left: `${e.clientX - left}px`,
            top: `${e.clientY - top}px`,
        }, { duration: 500, fill: 'forwards' })
    }

    return <div className="hd-ui-torchbox torch-box-container" onMouseOver={showTorch} onMouseOut={hideTorch} onMouseMove={moveTorch} >
        <div ref={torch} className="torch-shadow"></div>
        <div className="torch-shadow-overlay"></div>
        <div className="torch-box-container__child-container" style={containerStyle}>
            {children}
        </div>
    </div>
}

TorchBox.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
    containerStyle: PropTypes.object.isRequired,
    torchStyle: PropTypes.shape({
        size: PropTypes.number.isRequired
    })
}

export default TorchBox;