import './hotel-rating.css';

function HotelRating({ score, type, reviews }) {
    return (
        <div className='p1-rating'>
            <div className='p1-rating-scope'>
                <div className='p1-rating-scope-value'>
                    {Number.isInteger(score) ? `${score}.0` : score}
                </div>
            </div>
            <div>
                <div className='p1-rating-type'>{type}</div>
                <div className='p1-rating-reviews'>{reviews} reviews</div>
            </div>
        </div>
    );
}
export { HotelRating };
