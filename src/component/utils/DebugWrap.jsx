import './debug-value.css';

function DebugWrap({ children, name, isHidden = false }) {
    return (
        <fieldset className='p1-debug-wrap'>
            <legend>{name}</legend>
            {children}
        </fieldset>
    );
}

export { DebugWrap };
