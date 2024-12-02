import { API_URL } from '../../config';

const getHotels = async (search) => {
    const hotels = [{ name: 'hotel 1' }, { name: 'hotel 2' }];

    return hotels;
};

const getHotel = async (id) => {
    const hotel = { name: 'hotel 1', stars: 5 };

    return hotel;
};

export { getHotels, getHotel };
