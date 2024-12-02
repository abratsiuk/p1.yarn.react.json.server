import React, { useState } from 'react';

function Search(props) {
    const [search, setSearch] = useState('hotel');
    const { reloadHotels } = props;

    return (
        <div className='row'>
            <div className='input-field'>
                <input
                    placeholder='search'
                    type='search'
                    className='validate'
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.code === 'Enter') {
                            reloadHotels(search);
                        }
                    }}
                />
                <button
                    className='btn search-btn light-blue accent-4'
                    onClick={() => reloadHotels(search)}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export { Search };
