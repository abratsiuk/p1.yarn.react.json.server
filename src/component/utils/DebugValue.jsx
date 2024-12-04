import './debug-value.css';

function DebugValue(props) {
    return (
        <div className='p1-debug'>
            {Object.entries(props).map(([key, value]) => (
                <div
                    className='p1-debug-value'
                    key={key}
                >
                    <span className='p1-debug-value-key'>{key}:</span>
                    <span className='p1-debug-value-value'>
                        {JSON.stringify(value)}
                    </span>
                </div>
            ))}
        </div>
    );
}

export { DebugValue };
