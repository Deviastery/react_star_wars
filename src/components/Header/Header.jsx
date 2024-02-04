import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';
import Favorite from '@components/Favorite';

import imgR2D2 from './img/r2d2.svg';
import imgChubaka from './img/chubaka.svg';
import imgYoda from './img/yoda.svg';

import styles from './Header.module.css';

const Header = () => {
    const [icon, setIcon] = useState(imgYoda);
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(imgR2D2); break;
            case THEME_DARK: setIcon(imgChubaka); break;
            case THEME_NEITRAL: setIcon(imgYoda); break;
            default: setIcon(imgYoda);
        }
    }, [isTheme])

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt="Star Wars" />
            <ul className={styles.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
                <li><NavLink to="/not-found">Not Found</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
            </ul>

            <Favorite />
        </div>
    )
}

export default Header;