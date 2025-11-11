import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h1><Link to="/" className="header-link">Компьютерлік сауаттылық орталығы</Link></h1>
        <nav>
            <ul>
                <li><Link to="/">Басты бет</Link></li>
                <li><Link to="/module1">Құрылғылар және негіздер</Link></li>
                <li><Link to="/module2">Бағдарламалармен жұмыс</Link></li>
                <li><Link to="/module3">Файлдармен жұмыс</Link></li>
                <li><Link to="/module4">Интернет-браузерлер</Link></li>
                <li><Link to="/about">Авторлар туралы</Link></li>
            </ul>
        </nav>
        <div className="search-container">
            <form action="/search" method="get">
                <input type="text" placeholder="Іздеу..." name="q" />
                <button type="submit">Табу</button>
            </form>
        </div>
    </header>
);

export default Header;
