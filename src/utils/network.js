/**
 * Send a request Fetch
 * @param {String} url - url for the request
 * @returns {Promise} - Promise with result of the request
 */
export const getApiResource = async (url) => {

    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }
        return await res.json();
        
    } catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }
}

/*
(async () => {
    const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
    console.log(body);
})();
*/

export const makeConcurrentRequest = async (urls) => {
    const res = await Promise.all(urls.map(url => {
        return fetch(url).then(res => res.json())
    }));

    return res;
}