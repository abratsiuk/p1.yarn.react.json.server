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
            <DebugValue images={h.images} />
            <div>
                <div className='p1-item-name'>{h.name}</div>
                <HotelStars stars={h.stars} />
                <div className='p1-item-location'>{h.location}</div>
                <HotelFeatures features={h.features} />

                <DebugValue cancellation={h.refundable} />
                <DebugValue paymentType={h.paymentType} />
                <DebugValue rating={h.rating} />
                <DebugValue
                    discount={h.discount}
                    price={h.price}
                    currency={h.currency}
                />
            </div>
        </div>
    );
}
export { HotelItem };
