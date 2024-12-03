function HotelStars(props) {
    const { stars } = props;
    let ret = [];
    for (let i = 0; i < +stars; i++) {
        ret.push(
            <i
                key={i}
                className='material-icons'
            >
                star
            </i>
        );
    }
    return <>{ret}</>;
}
export { HotelStars };
