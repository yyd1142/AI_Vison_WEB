const axios = require('axios');
const config = require('../config');
const domain = config.domain;
class StoresDBAction {
    constructor() {
    }

    async getAllStore(id) {
        return await axios.get(`${domain}/Regions/${id}/stores`).then(response => {
            if (response.data) {
                return response.data;
            } else {
                return {};
            }
        }).catch(error => {
            console.log(error);
        });
    }

    async getPeoPleCountByStoreInRegion(id, sid, range, groupby) {
        let params = `${domain}/Regions/${id}/stores/${storeid}/people-counts`;
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

    async getAllPeoPleCountInRegion(id, range, groupby) {
        let params = `${domain}/Regions/${id}/stores/people-counts`;
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

module.exports = StoresDBAction;