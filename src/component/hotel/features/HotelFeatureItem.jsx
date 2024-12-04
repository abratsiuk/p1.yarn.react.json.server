import { featureIcon } from './feature-icon.js';

function HotelFeatureItem({ feature }) {
    if (!feature) return null;

    const icon = featureIcon(feature);
    return (
        <span className='p1-item-feature'>
            {icon ? (
                <i className='material-icons p1-icon-feature'>{icon}</i>
            ) : null}
            {feature}
        </span>
    );
}
export { HotelFeatureItem };
