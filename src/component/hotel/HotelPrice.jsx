function HotelPrice({ discount, price, currency }) {
    return (
        <>
            <div>{discount}</div>
            <div>{price}</div>
            <div>{currency}</div>
        </>
    );
}
export { HotelPrice };
