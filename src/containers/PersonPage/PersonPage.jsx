import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';

import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack";
import PersonFilms from "@components/PersonPage/PersonFilms";

import UiLoading from '@ui/UiLoading';

import { getApiResource } from "@utils/network";
import { getPeopleImage } from "@services/getPeopleData";
import { API_PERSON } from "@constants/api";

import styles from './PersonPage.module.css';

const PersonPage = ({ setErrorApi }) => {
    const [personId, setPersonId] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const [colorLoader, setColorLoader] = useState('blue');
    const isTheme = useTheme();

    const storeData = useSelector(state => state.favoriteReducer);

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_PERSON}/${id}/`);

            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

            setPersonId(id);
        
            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Heir color', data: res.hair_color },
                    { title: 'Skin color', data: res.skin_color },
                    { title: 'Eye color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ]);

                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));

                res.films.length && setPersonFilms(res.films);

                setErrorApi(false);

                setIsLoading(false);
            } else {
                setErrorApi(true);

                setIsLoading(false);
            }
        })();
    }, []);

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setColorLoader('black'); break;
            case THEME_DARK: setColorLoader('white'); break;
            case THEME_NEITRAL: setColorLoader('blue'); break;
            default: setColorLoader('blue');
        }
    }, [isTheme])

    return (
        <>
            <PersonLinkBack />
            
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>

                <div className={styles.container}>

                    <div className={styles.container__img}>

                        {isLoading && <UiLoading classes={styles.people__loader} theme={colorLoader} />}

                        <PersonPhoto 
                            personId={personId}
                            personPhoto={personPhoto}
                            personName={personName}
                            personFavorite={personFavorite}
                            setPersonFavorite={setPersonFavorite}
                        />

                    </div>

                    {personInfo && <PersonInfo personInfo={personInfo} />}
                    
                    {personFilms && <PersonFilms personFilms={personFilms} />}
                </div>

            </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage);