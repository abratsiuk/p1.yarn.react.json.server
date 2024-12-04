function HotelRating({ score, type, reviews }) {
    return (
        <>
            <div>{score}</div>
            <div>{type}</div>
            <div>{reviews}</div>
        </>
    );
}
export { HotelRating };
