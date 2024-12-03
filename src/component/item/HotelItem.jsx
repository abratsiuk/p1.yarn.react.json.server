import { HotelFeatures } from './HotelFeatures';
import { HotelStars } from './HotelStars';
import './hotel-item.css';

function HotelItem(props) {
    const { hotel: h } = props;
    return (
        <div className='col s12 m7'>
            <div className='card horizontal'>
                <div className='card-image'>
                    <img src={h.images[0]} />
                </div>
                <div className='card-stacked'>
                    <div className='card-content'>
                        <div className='p1-item-name'>{h.name}</div>
                        <HotelStars stars={h.stars} />
                        <div className='p1-item-location'>{h.location}</div>
                        <HotelFeatures features={h.features} />
                    </div>
                    <div className='card-action'>
                        <a href='#'>This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { HotelItem };
