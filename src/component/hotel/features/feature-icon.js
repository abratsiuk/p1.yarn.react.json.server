const featuresWithIcons = [
    // { name: 'Accessible bathroom', icon: 'accessible_forward' },
    // { name: 'Accessible rooms', icon: 'accessible' },
    // { name: 'Adults only', icon: 'no_accounts' },
    // { name: 'Air conditioning', icon: 'ac_unit' },
    // { name: 'Airport shuttle', icon: 'airport_shuttle' },
    // { name: 'Airport shuttle included', icon: 'airport_shuttle' },
    // { name: 'All-inclusive', icon: 'all_inclusive' },
    // { name: 'Balcony or terrace', icon: 'balcony' },
    // { name: 'Bar', icon: 'local_bar' },
    // { name: 'Bar and lounge', icon: 'local_bar' },
    { name: 'Breakfast included', icon: 'free_breakfast' },
    // { name: 'Business center', icon: 'business_center' },
    // { name: 'Car hire on site', icon: 'directions_car' },
    // { name: 'Casino', icon: 'casino' },
    // { name: 'Childcare services', icon: 'baby_changing_station' },
    // { name: 'City view', icon: 'location_city' },
    // { name: 'Cots', icon: 'crib' },
    // { name: 'Dinner included', icon: 'restaurant' },
    // { name: 'Eco-certified', icon: 'eco' },
    // { name: 'Electric car charging station', icon: 'ev_station' },
    // { name: 'Family rooms', icon: 'family_restroom' },
    // { name: 'Fitness center', icon: 'fitness_center' },
    // { name: 'Free parking', icon: 'local_parking' },
    // { name: 'Fully refundable', icon: 'published_with_changes' },
    // { name: 'Golf course', icon: 'golf_course' },
    { name: 'Gym', icon: 'fitness_center' },
    { name: 'Hot tub', icon: 'hot_tub' },
    // { name: 'In-room WiFi', icon: 'wifi' },
    // { name: 'Kids club', icon: 'child_care' },
    // { name: 'Kitchen', icon: 'kitchen' },
    // { name: 'Lift available', icon: 'elevator' },
    // { name: 'Lunch included', icon: 'lunch_dining' },
    // { name: 'Mountain view', icon: 'terrain' },
    // { name: 'Ocean view', icon: 'waves' },
    // { name: 'Outdoor space', icon: 'park' },
    { name: 'Pet-friendly', icon: 'pets' },
    { name: 'Pool', icon: 'pool' },
    // { name: 'Private bathroom', icon: 'bathtub' },
    // { name: 'Public transport nearby', icon: 'commute' },
    // { name: 'Quiet neighborhood', icon: 'nature_people' },
    // { name: 'Reserve now, pay later', icon: 'payment' },
    // { name: 'Restaurant', icon: 'restaurant' },
    // { name: 'Romantic package', icon: 'favorite' },
    // { name: 'Sea view', icon: 'waves' },
    // { name: 'Smart TV', icon: 'tv' },
    // { name: 'Spa and wellness', icon: 'spa' },
    // { name: 'Swimming pool', icon: 'pool' },
    // { name: 'Washer and dryer', icon: 'local_laundry_service' },
    // { name: 'Water park', icon: 'water' },
    // { name: 'Wheelchair accessible', icon: 'accessible' },
];

const featureMap = Object.assign(
    {},
    ...featuresWithIcons.map((f) => ({ [f.name]: f.icon }))
);

function featureIcon(name) {
    return featureMap[name];
}

export { featureIcon };
