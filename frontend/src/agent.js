let ROOT_URL = 'http://localhost:9990';

let CITY_ROOT = ROOT_URL + '/city';
let FORECAST_ROOT = ROOT_URL + '/forecast';
let OPTIONS = {
    method: 'get',
    header: {
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Request-Headers": "*",
        "Access-Control-Allow-Origin": "*"
    }
};

const Agent = {
    cityList: () =>
        requests.getCities('/all'),
    forecastListByCity: (cityId) =>
        requests.getForecastByCity('/current?cityId=' + cityId)
};

const requests = {
    getCities: url =>
        fetch(`${CITY_ROOT}${url}`, OPTIONS),
    getForecastByCity: url =>
        fetch(`${FORECAST_ROOT}${url}`, OPTIONS)
};

export default {
    Agent
}