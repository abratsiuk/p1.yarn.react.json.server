import './debug-value.css';

function DebugWrap({ children, name }) {
    return (
        <fieldset className='p1-debug-wrap'>
            <legend>{name}</legend>
            {children}
        </fieldset>
    );
}

function DebugWrapHide({ children }) {
    return { children };
}

export { DebugWrap, DebugWrapHide };
