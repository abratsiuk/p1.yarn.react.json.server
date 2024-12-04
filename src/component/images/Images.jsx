import React, { useEffect, useState } from 'react';
import { ImageItem } from './ImageItem';

function Images({ images = [] }) {
    if (images.length === 0) {
        return null;
    }
    const [index, setIndex] = useState(0);
    const [leftEnabled, setLeftEnabled] = useState(false);
    const [rightEnabled, setRightEnabled] = useState(true);

    const onHandleLeft = () => {
        setIndex(index > 0 ? index - 1 : 0);
    };
    const onHandleRight = () => {
        setIndex(index < images.length - 1 ? index + 1 : index);
    };

    useEffect(() => {
        setLeftEnabled(index > 0);
        setRightEnabled(index < images.length - 1);
    }, [index]);

    return (
        <ImageItem
            image={images[index]}
            alt={`image ${images[index]} not found`}
            leftEnabled={leftEnabled}
            rightEnabled={rightEnabled}
            onHandleLeft={onHandleLeft}
            onHandleRight={onHandleRight}
        />
    );
}
export { Images };
