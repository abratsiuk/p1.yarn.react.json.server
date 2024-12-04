import './images.css';

function ImageItem({
    image,
    alt,
    leftEnabled,
    rightEnabled,
    onHandleLeft = Function.prototype,
    onHandleRight = Function.prototype,
}) {
    return (
        <div className='p1-image'>
            {!leftEnabled ? null : (
                <div
                    className='p1-image-button p1-image-left'
                    onClick={onHandleLeft}
                >
                    <i className='material-icons p1-image-arrow'>
                        keyboard_arrow_left
                    </i>
                </div>
            )}
            <img
                src={image}
                alt={alt}
            />
            {!rightEnabled ? null : (
                <div
                    className='p1-image-button p1-image-right'
                    onClick={onHandleRight}
                >
                    <i className='material-icons p1-image-arrow'>
                        keyboard_arrow_right
                    </i>
                </div>
            )}
        </div>
    );
}
export { ImageItem };
