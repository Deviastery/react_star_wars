import { useSelector } from 'react-redux';

import styles from './FavoritePage.module.css';

const FavoritePage = () => {
    const storeData = useSelector(state => state.favoriteReducer);

    return (
        <>
            <h1>FavoritesPage</h1>
        </>
    )
}

export default FavoritePage;