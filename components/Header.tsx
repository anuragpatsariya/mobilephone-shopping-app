import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return(
        <header style={{ background: '#282c34', padding: '1rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>My Mobile Shop</h1>
            <nav>
                <Link href="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
                <Link href="/admin" style={{ color: 'white' }}>Admin</Link>
            </nav>
        </header>
    );
};

export default Header;