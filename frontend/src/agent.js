let ROOT_URL = 'http://localhost:9990';

let CITY_ROOT = ROOT_URL + '/city';
let FORECAST_ROOT = ROOT_URL + '/forecast';

const Agent = {
    cityList: () =>
        requests.getCities('/all'),
    forecastListByCity: (cityId) =>
        requests.getForecastByCity('/current?cityId=' + cityId)
};

const requests = {
    getCities: url =>
        fetch(`${CITY_ROOT}${url}`),
    getForecastByCity: url =>
        fetch(`${FORECAST_ROOT}${url}`)
};

export default {
    Agent
}