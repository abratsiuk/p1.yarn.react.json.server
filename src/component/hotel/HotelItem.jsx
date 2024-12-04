import { HotelFeatures } from './features/HotelFeatures';
import { HotelStars } from './stars/HotelStars';
import './hotel-item.css';
import { DebugValue } from '../utils/DebugValue';
import { DebugWrap } from '../utils/DebugWrap';

function HotelItem(props) {
    const { hotel: h } = props;
    return (
        <div className='p1-item'>
            <DebugWrap name='HotelImage'>
                <div>
                    <img src={h.images[0]} />
                </div>
                <DebugValue images={h.images} />
            </DebugWrap>

            <div>
                <DebugWrap name='name'>
                    <div className='p1-item-name'>{h.name}</div>
                </DebugWrap>
                <DebugWrap name='HotelStars'>
                    <HotelStars stars={h.stars} />
                </DebugWrap>
                <DebugWrap name='location'>
                    <div className='p1-item-location'>{h.location}</div>
                </DebugWrap>
                <DebugWrap name='HotelFeatures'>
                    <HotelFeatures features={h.features} />
                </DebugWrap>

                <DebugWrap name='HotelFeatures'>
                    <DebugValue cancellation={h.refundable} />
                </DebugWrap>
                <DebugWrap name='HotelPaymentType'>
                    <DebugValue paymentType={h.paymentType} />
                </DebugWrap>
                <DebugWrap name='HotelRating'>
                    <DebugValue rating={h.rating} />
                </DebugWrap>
                <DebugWrap name='HotelPrice'>
                    <DebugValue
                        discount={h.discount}
                        price={h.price}
                        currency={h.currency}
                    />
                </DebugWrap>
            </div>
        </div>
    );
}
export { HotelItem };
