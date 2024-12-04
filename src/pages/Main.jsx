import React, { useState, useEffect } from 'react';
import { Hotels } from '../component/Hotels';
import { Preloader } from '../component/Preloader';
import { Search } from '../component/Search';
import { getHotels } from '../services/hotelApi';

function Main() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    const reloadHotels = (search) => {
        setLoading(true);
        getHotels(search)
            .then((data) => {
                setHotels(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        reloadHotels('2');
    }, []);

    return (
        <>
            <Search reloadHotels={reloadHotels} />
            {loading ? <Preloader /> : <Hotels hotels={hotels} />}
        </>
    );
}

export { Main };
