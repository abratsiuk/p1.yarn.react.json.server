function HotelRefundable({ refundable = false }) {
    if (refundable === null) {
        return null;
    }
    return (
        <div className='p1-item-refundable'>
            {refundable ? 'Fully refundable property' : null}
        </div>
    );
}
export { HotelRefundable };
