const featuresWithIcons = [
    { name: 'Breakfast included', icon: 'free_breakfast' },
    { name: 'Dinner included', icon: 'restaurant' },
    { name: 'Lunch included', icon: 'lunch_dining' },
    { name: 'All-inclusive', icon: 'all_inclusive' },
    { name: 'In-room WiFi', icon: 'wifi' },
    { name: 'Air conditioning', icon: 'ac_unit' },
    { name: 'Balcony or terrace', icon: 'balcony' },
    { name: 'Private bathroom', icon: 'bathtub' },
    { name: 'Kitchenette', icon: 'kitchen' },
    { name: 'Smart TV', icon: 'tv' },
    { name: 'Swimming pool', icon: 'pool' },
    { name: 'Fitness center', icon: 'fitness_center' },
    { name: 'Spa and wellness', icon: 'spa' },
    { name: 'Bar and lounge', icon: 'local_bar' },
    { name: 'Business center', icon: 'business_center' },
    { name: 'Free parking', icon: 'local_parking' },
    { name: 'Accessible rooms', icon: 'accessible' },
    { name: 'Fully refundable', icon: 'published_with_changes' },
    { name: 'Reserve now, pay later', icon: 'payment' },
    { name: 'Sea view', icon: 'waves' },
    { name: 'Mountain view', icon: 'terrain' },
    { name: 'City view', icon: 'location_city' },
    { name: 'Quiet neighborhood', icon: 'nature_people' },
    { name: 'Kids club', icon: 'child_care' },
    { name: 'Childcare services', icon: 'baby_changing_station' },
    { name: 'Family rooms', icon: 'family_restroom' },
    { name: 'Pet-friendly', icon: 'pets' },
    { name: 'Eco-certified', icon: 'eco' },
    { name: 'Adults only', icon: 'no_accounts' },
    { name: 'Romantic package', icon: 'favorite' },
    { name: 'Airport shuttle', icon: 'airport_shuttle' },
    { name: 'Car hire on site', icon: 'directions_car' },
    { name: 'Public transport nearby', icon: 'commute' },
    { name: 'Wheelchair accessible', icon: 'accessible' },
    { name: 'Lift available', icon: 'elevator' },
    { name: 'Accessible bathroom', icon: 'accessible_forward' },
];

function featureIcon(name) {
    return (
        featuresWithIcons.find((feature) => feature.name === name)?.icon || null
    );
}

export { featureIcon };
