import { HotelFeatureItem } from './HotelFeatureItem.jsx';

function HotelFeatures(props) {
    const { features = [] } = props;

    // const features = [
    //     'Pool',
    //     'Hot tub',
    //     'Wheelchair accessible',
    //     'Lift available',
    //     'Accessible bathroom',
    //     'Fully refundable',
    //     'Reserve now, pay later',
    //     'Sea view',
    //     'Mountain view',
    //     'City view',
    //     'Quiet neighborhood',
    //     'Kids club',
    //     'Childcare services',
    //     'Family rooms',
    //     'Pet-friendly',
    // ];

    //TO_DO: realize a lot of features
    const maxFeatures = 3;

    return (
        <>
            {features.map((feature, i) =>
                i > maxFeatures - 1 ? null : (
                    <HotelFeatureItem
                        key={feature}
                        feature={feature}
                    />
                )
            )}
        </>
    );
}
export { HotelFeatures };
