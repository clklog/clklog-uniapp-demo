const Formal = {
    host: 'https://fang.alltobid.com/',
    imgUrl:'https://fang-oss.alltobid.com/',
    pub: 'prod-api'
}
const Test = {
    host: 'https://gphouselease.test.zcunsoft.com/',
    imgUrl:'https://image.gphouselease-test.zcunsoft.com/',
    pub: 'prod-api'
}
const baseURL = () => {
    return Formal;
    // return Test;
}
export {
    Formal,
    Test,
    baseURL
}