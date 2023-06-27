import React from 'react';
import Logo from './Logo';
import HeaderCart from './HeaderCart';
import Search from './Search';

const Header: React.FC = () => {
  return (
    <header>
        <div>
            <Logo />
            <HeaderCart />
        </div>
        <Search />
    </header>
  );
};

export default Header;