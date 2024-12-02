import { API_URL, ImagesNumber, ImagesPath } from '../../config';

const getHotels = async (search) => {
    const response = await fetch(`${API_URL}/hotels?name_like=${search}`);
    const hotels = await response.json();
    return imitateImg(hotels);
};

const getHotel = async (id) => {
    const hotel = { name: 'hotel 1', stars: 5 };

    return hotel;
};

const imitateImg = (hotels) => {
    const updatedHotels = hotels.map((hotel) => {
        const imgCount = hotel.images.length;
        hotel.images = hotel.images.map((img) => {
            img = getNextRandomImg();
            return img;
        });
        return hotel;
    });
    return updatedHotels;
};
const getNextRandomImg = () => {
    const image = `${ImagesPath}/${Math.floor(
        Math.random() * ImagesNumber
    )}.jpg`;
    console.log(image);
    return image;
};

export { getHotels, getHotel };
