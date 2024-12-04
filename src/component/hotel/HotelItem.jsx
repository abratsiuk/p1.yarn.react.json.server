import { HotelFeatures } from './features/HotelFeatures';
import { HotelStars } from './stars/HotelStars';
import './hotel-item.css';
import { DebugValue } from '../utils/DebugValue';
import { DebugWrap } from '../utils/DebugWrap';
import { Images } from '../images/Images';
import { HotelLocation } from './HotelLocation';
import { HotelRefundable } from './HotelRefundable';
import { HotelPaymentType } from './HotelPaymentType';
import { HotelRating } from './rating/HotelRating';
import { HotelPrice } from './HotelPrice';

function HotelItem(props) {
    const { hotel: h } = props;
    return (
        <div className='p1-item'>
            <Images
                className='p1-item-left'
                images={h.images}
            />

            <div className='p1-item-right'>
                <div className='p1-item-name'>{h.name}</div>

                <HotelStars stars={h.stars} />
                <HotelLocation location={h.location} />
                <HotelFeatures features={h.features} />

                <HotelRefundable refundable={h.refundable} />
                <HotelPaymentType paymentType={h.paymentType} />

                <HotelRating
                    score={h.rating.score}
                    type={h.rating.type}
                    reviews={h.rating.reviews}
                />
                <HotelPrice
                    discount={h.discount}
                    price={h.price}
                    currency={h.currency}
                />
            </div>
        </div>
    );
}
export { HotelItem };
