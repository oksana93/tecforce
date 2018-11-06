let ROOT_URL = 'http://localhost:9990';

let CITY_ROOT = ROOT_URL + '/city';
let FORECAST_ROOT = ROOT_URL + '/forecast';

const Agent = {
    cityList: () =>
        requests.get('/all')
};

const requests = {
    get: url =>
        fetch(`${CITY_ROOT}${url}`)
};

export default {
    Agent
}