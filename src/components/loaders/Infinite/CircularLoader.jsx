import './infinite.sass';

function CircularLoader() {
    return (<div className='hdui-circular-loader loader-container'>
        <svg className='circular-loader-surface'>
            <circle cx='50%' cy='50%' r='50%' />
            <div className='circular-loader-animated-surface'>H</div>
        </svg>
    </div>)
}

export default CircularLoader;