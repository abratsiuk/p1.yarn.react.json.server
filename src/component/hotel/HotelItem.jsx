import { HotelFeatures } from './features/HotelFeatures';
import { HotelStars } from './HotelStars';
import './hotel-item.css';

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
            </div>
        </div>
    );
}
export { HotelItem };
