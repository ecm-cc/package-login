const axios = require('axios');

/**
 * Finds a AuthSessionID for a given host and API key
 * @param {Object} host Tenant and host of the system
 * @param {String} apiKey API key to login with
 * @returns {String} AuthSessionID for the user
 */
async function login (host, apiKey) {
	const options = {
        url: `${host}/identityprovider/login?redirect=basic=true`,
        headers: {
            Accept: 'application/hal+json',
            Authorization: `Bearer ${apiKey}`,
        },
    };
    const loginResponse = await axios(options);
    return loginResponse.data.AuthSessionId;
}

/**
 * @module login
 * Performs a login, based on the host and a given API-Key
 */
module.exports = login;