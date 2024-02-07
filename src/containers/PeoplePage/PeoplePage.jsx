import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';

import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation";

import UiLoading from '@ui/UiLoading';

import { getApiResource } from '@utils/network';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData';
import { API_PEOPLE } from '@constants/api';
import { useQueryParams } from "@hooks/useQueryParams";

import styles from './PeoplePage.module.css';

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const [isLoading, setIsLoading] = useState(true);

    const [colorLoader, setColorLoader] = useState('blue');
    const isTheme = useTheme();

    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResourse = async (url) => {
        const res = await getApiResource(url);

        if (res) {
            const peopleList = res.results.map(({ name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);
    
                return {
                    id,
                    name,
                    img
                }
            })
    
            setPeople(peopleList);
            setPrevPage(res.previous);
            setNextPage(res.next);
            setCounterPage(getPeoplePageId(url))
            setErrorApi(false);

            setIsLoading(false);
        } else {
            setErrorApi(true);

            setIsLoading(false);
        }

    }

    useEffect(() => {
        getResourse(API_PEOPLE+queryPage);
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
            <PeopleNavigation 
                getResourse={getResourse}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {isLoading && <UiLoading classes={styles.people__loader} theme={colorLoader} />}
            {people && <PeopleList people={people} />} 
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);