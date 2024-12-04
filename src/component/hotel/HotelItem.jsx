import { HotelFeatures } from './features/HotelFeatures';
import { HotelStars } from './stars/HotelStars';
import './hotel-item.css';
import { DebugValue } from '../utils/DebugValue';

function HotelItem(props) {
    const { hotel: h } = props;
    return (
        <div className='p1-item'>
            <div>
                <img src={h.images[0]} />
            </div>
            <div>
                <div className='p1-item-name'>{h.name}</div>
                <HotelStars stars={h.stars} />
                <div className='p1-item-location'>{h.location}</div>
                <HotelFeatures features={h.features} />
                <DebugValue rating={h.rating} />
            </div>
        </div>
    );
}
export { HotelItem };
