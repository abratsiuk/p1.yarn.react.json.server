function HotelPaymentType({ paymentType = [] }) {
    if (paymentType === null || paymentType.length === 0) {
        return null;
    }
    return (
        <div className='p1-item-payment-type'>
            {paymentType.map((pt, index) => (
                <div
                    key={index}
                    className='p1-item-payment-type-item'
                >
                    {pt}
                </div>
            ))}
        </div>
    );
}
export { HotelPaymentType };
