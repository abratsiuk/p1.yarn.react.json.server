import { API_URL } from '../../config';
import { imitateImg } from './imitateImg';

const getHotels = async (search) => {
    const response = await fetch(`${API_URL}/hotels?name_like=${search}`);
    const hotels = await response.json();
    return imitateImg(hotels);
};

const getHotel = async (id) => {
    const hotel = { name: 'hotel 1', stars: 5 };

    return hotel;
};

export { getHotels, getHotel };
