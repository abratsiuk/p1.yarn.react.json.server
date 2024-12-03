const ImagesNumber = 56;
const ImagesPath = '/server/img';

const imitateImg = (hotels) => {
    const updatedHotels = hotels.map((hotel) => {
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

export { imitateImg };
