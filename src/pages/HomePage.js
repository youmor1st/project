import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div>
        <section id="introduction">
            <h2>Компьютерлік сауаттылық орталығына қош келдіңіз</h2>
            <p>Компьютермен жұмыс істеудің негізгі дағдыларын меңгеруге деген жолыңыз осы жерден басталады. Компьютерді қосудан бастап интернетте шарлауға дейінгі барлық нәрсені білу үшін біздің модульдерді зерттеңіз.</p>
        </section>
        <section id="courses">
            <h2>Біздің курстар</h2>
            <div className="course-links">
                <Link to="/module1" className="course-link">Құрылғылар және негіздер</Link>
                <Link to="/module2" className="course-link">Бағдарламалармен жұмыс</Link>
                <Link to="/module3" className="course-link">Файлдармен жұмыс</Link>
                <Link to="/module4" className="course-link">Интернет-браузерлер</Link>
            </div>
        </section>
    </div>
);

export default HomePage;
