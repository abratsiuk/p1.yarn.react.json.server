import React, { useState } from 'react';
import { DebugValue } from '../../utils/DebugValue';
function HotelImages({ images = [] }) {
    if (images.length === 0) {
        return null;
    }
    const [index, setIndex] = useState(0);
    const [leftEnabled, setLeftEnabled] = useState(false);
    const [rightEnabled, setRightEnabled] = useState(true);

    const onHandleLeft = () => {
        setLeftEnabled(index > 0);
        setIndex(index > 0 ? index - 1 : 0);
    };
    const onHandleRight = () => {
        setRightEnabled(index < images.length - 1);
        setIndex(index < images.length - 1 ? index + 1 : index);
    };

    return (
        <>
            <DebugValue
                leftEnabled={leftEnabled}
                index={index}
                images_length={images.length}
                rightEnabled={rightEnabled}
            />
            <button
                className='p1-image-left'
                onClick={onHandleLeft}
            >
                left
            </button>
            <div>
                <img src={images[index]} />
            </div>
            <button
                className='p1-image-right'
                onClick={onHandleRight}
            >
                right
            </button>
        </>
    );
}
export { HotelImages };
