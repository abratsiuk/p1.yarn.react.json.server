import React from 'react';

function Header() {
    return (
        <nav className='light-blue lighten-3'>
            <div className='nav-wrapper'>
                <a
                    href='https://github.com/abratsiuk/p1.yarn.react.json.server'
                    className='brand-logo brown-text text-darken-4'
                >
                    <img
                        className='img-header-logo'
                        src='/public/favicon_io/favicon-32x32.png'
                        alt='React Movie'
                    />
                    Hotel Booking
                </a>
                <ul
                    id='nav-mobile'
                    className='right hide-on-med-and-down'
                >
                    <li>
                        <a
                            href='https://github.com/abratsiuk/p1.yarn.react.json.server'
                            className='brown-text text-darken-4'
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
