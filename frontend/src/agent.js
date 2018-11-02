import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const AGENT = superagentPromise(_superagent, global.Promise);
const ROOT_URL = 'http://localhost:9990';
const CITY_ROOT = ROOT_URL + '/city';
const FORECAST_ROOT = ROOT_URL + '/city';

const GetAllCity = {
    cityList: () =>
        requests.get('/all')
};

const requests = {
    get: url =>
        AGENT
            .get(`${CITY_ROOT}${url}`)
            .end(handleErrors)
            .then(responseBody)
};

const responseBody = res => res.body;

const handleErrors = err => {
    return err;
};

export default {
    GetAllCity
}