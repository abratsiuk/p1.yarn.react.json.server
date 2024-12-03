import { featureIcon } from './feature-icon.js';

function HotelFeatures(props) {
    const { features = [] } = props;
    return (
        <>
            {features.map((feature_name, i) => (
                <span
                    key={i}
                    className='p1-item-feature'
                >
                    <i className='material-icons'>
                        {featureIcon(feature_name)}
                    </i>
                    {feature_name}
                </span>
            ))}
        </>
    );
}
export { HotelFeatures };
