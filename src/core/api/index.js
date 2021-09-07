import Service from "../service";

const API = {};

API.getAction = (endPoint, successCB, errorCB) => {
    Service.request(endPoint, 'get', null, successCB, errorCB);
}

API.postAction = (endPoint, body, successCB, errorCB) => {
    Service.request(endPoint, 'post', body, successCB, errorCB);
}

API.putAction = (endPoint, body, successCB, errorCB) => {
    Service.request(endPoint, 'put', body, successCB, errorCB);
}

API.deleteAction = (endPoint, successCB, errorCB) => {
    Service.request(endPoint, 'delete', null, successCB, errorCB);
}

export default API;