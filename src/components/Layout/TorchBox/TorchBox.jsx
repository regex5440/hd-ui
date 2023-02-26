import React, { useRef } from "react";
import './style.sass';

const TorchBox = ({ style, children, height, width }) => {
    const torch = useRef(null);
    const showTorch = () => {
        torch.current.style.visibility = 'visible';
        torch.current.style.opacity = 1
    }
    const hideTorch = () => {
        torch.current.style.visibility = 'hidden';
        torch.current.style.opacity = 0
    }
    const moveTorch = (event) => {
        event.stopPropagation();
        let torchHeight = torch.current.offsetHeight,
            torchWidth = torch.current.offsetWidth;
        const { nativeEvent: e } = event;
        torch.current.style.transform = `translate(${e.offsetX - torchWidth / 2}px, ${e.offsetY - torchHeight / 2}px)`;
    }
    const outerBoxStyle = () => {
        if (height && width) return { height, width };
        else if (height) return { height };
        else if (width) return { width };
    }

    return <div className="hd-ui-torchbox torch-box-container" onMouseOver={showTorch} onMouseOut={hideTorch} onMouseMove={moveTorch} style={outerBoxStyle()} >
        <div ref={torch} className="torch-shadow"></div>
        <div className="torch-box-container__child-container" style={style}>
            {children}
        </div>
    </div>
}

export default TorchBox;