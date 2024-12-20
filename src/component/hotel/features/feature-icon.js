const featureMap = {
    // 'Accessible bathroom': 'accessible_forward',
    // 'Accessible rooms': 'accessible',
    // 'Adults only': 'no_accounts',
    // 'Air conditioning': 'ac_unit',
    // 'Airport shuttle': 'airport_shuttle',
    // 'Airport shuttle included': 'airport_shuttle',
    'All-inclusive': 'all_inclusive',
    // 'Balcony or terrace': 'balcony',
    // 'Bar': 'local_bar',
    // 'Bar and lounge': 'local_bar',
    'Breakfast included': 'free_breakfast',
    // 'Business center': 'business_center',
    // 'Car hire on site': 'directions_car',
    // 'Casino': 'casino',
    // 'Childcare services': 'baby_changing_station',
    // 'City view': 'location_city',
    // 'Cots': 'crib',
    // 'Dinner included': 'restaurant',
    // 'Eco-certified': 'eco',
    // 'Electric car charging station': 'ev_station',
    // 'Family rooms': 'family_restroom',
    // 'Fitness center': 'fitness_center',
    // 'Free parking': 'local_parking',
    // 'Fully refundable': 'published_with_changes',
    // 'Golf course': 'golf_course',
    Gym: 'fitness_center',
    'Hot tub': 'hot_tub',
    // 'In-room WiFi': 'wifi',
    // 'Kids club': 'child_care',
    // 'Kitchen': 'kitchen',
    // 'Lift available': 'elevator',
    // 'Lunch included': 'lunch_dining',
    // 'Mountain view': 'terrain',
    // 'Ocean view': 'waves',
    // 'Outdoor space': 'park',
    // 'Pet-friendly': 'pets',
    Pool: 'pool',
    // 'Private bathroom': 'bathtub',
    // 'Public transport nearby': 'commute',
    // 'Quiet neighborhood': 'nature_people',
    // 'Reserve now, pay later': 'payment',
    // 'Restaurant': 'restaurant',
    // 'Romantic package': 'favorite',
    // 'Sea view': 'waves',
    // 'Smart TV': 'tv',
    // 'Spa and wellness': 'spa',
    // 'Swimming pool': 'pool',
    // 'Washer and dryer': 'local_laundry_service',
    // 'Water park': 'water',
    // 'Wheelchair accessible': 'accessible',
};

function featureIcon(name) {
    return featureMap[name];
}

export { featureIcon };
