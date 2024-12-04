function HotelLocation({ location = null }) {
    if (location === null) {
        return null;
    }
    return <div className='p1-item-location'>{location}</div>;
}
export { HotelLocation };
