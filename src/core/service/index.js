const Service = {};

Service.request = (endpoint, method, body, successCB, errorCB) => {
    const url = `http://localhost:4000/${endpoint}`;
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json UTF-8'
        },
        body: body ? JSON.stringify(body) : undefined
    }

    fetch(url, options)
        .then((res) => res.json())
        .then(successCB)
        .catch(errorCB);
}

export default Service;