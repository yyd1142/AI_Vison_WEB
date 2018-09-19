const axios = require('axios');
const config = require('../config');
const domain = config.domain;

class RegionsDBAction {
    constructor() {
    }

    async getAllRegions() {
        return await axios.get(`${domain}/Regions`).then(response => {
            if (response.data) {
                return response.data;
            } else {
                return {};
            }
        }).catch(error => {
            console.log(error);
        });
    }

    async getPeoPleCountById(id, range, groupby) {
        let params = `${domain}/Regions/${id}/people-counts`;
        if (range && groupby) {
            params = `${params}?range=${range}&groupby=${groupby}`
        }
        return await axios.get(params).then(response => {
            if (response.data) {
                return response.data;
            } else {
                return {};
            }
        }).catch(error => {
            console.log(error);
        });
    }

    async getAllPeoPleCount(range, groupby) {
        let params = `${domain}/Regions/people-counts`;
        if (range && groupby) {
            params = `${params}?range=${range}&groupby=${groupby}`
        }
        return await axios.get(params).then(response => {
            if (response.data) {
                return response.data;
            } else {
                return {};
            }
        }).catch(error => {
            console.log(error);
        });
    }
}

module.exports = RegionsDBAction;