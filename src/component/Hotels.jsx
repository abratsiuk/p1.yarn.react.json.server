import { HotelItem } from './hotel/HotelItem';

function Hotels(props) {
    const { hotels } = props;
    console.log('Hotels', hotels);
    return hotels.map((hotel) => (
        <HotelItem
            key={hotel.id}
            hotel={hotel}
        />
    ));
}
export { Hotels };
