import React, { useEffect, useRef } from "react";
import './style.sass';

const TorchBox = ({ style, children, height, width, shadowColor }) => {
    const torch = useRef(null);
    useEffect(() => {
        if (shadowColor) {
            torch.current.style.background = shadowColor
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
    const outerBoxStyle = () => {
        if (height && width) return { height, width };
        else if (height) return { height };
        else if (width) return { width };
    }

    return <div className="hd-ui-torchbox torch-box-container" onMouseOver={showTorch} onMouseOut={hideTorch} onMouseMove={moveTorch} style={outerBoxStyle()} >
        <div ref={torch} className="torch-shadow"></div>
        <div className="torch-shadow-overlay"></div>
        <div className="torch-box-container__child-container" style={style}>
            {children}
        </div>
    </div>
}

export default TorchBox;