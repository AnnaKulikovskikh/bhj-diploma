/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
 //const createRequest = ({callback, data, method, responseType, url} = {} ) => {
 const createRequest = (options = {}) => {  
    const method = options.method; 
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    // if (method == 'GET') {
    //     xhr.open(method,`${options.url}?email=${options.data.email}&password=${options.data.password}`);
    //     const datum = options.url;
    //     for (key in options.data) {
    //         datum += `?${key}=${options.data[key]}`;
    //     }
    // } else {
    //     const formData = new FormData();
    //     for (key in options.data) {
    //         formData.append(key, options.data[key]);
    //     }
    // }

    // try {
    //     xhr.open(method, options.url);
    //     xhr.send(formData);
    // } catch (e) {
    //     options.callback('error');
    // }

    try {
        if (method == 'GET') {
            xhr.open(method,`${options.url}?email=${options.data.email}&password=${options.data.password}`);
            // const datum = options.url;
            // for (key in options.data) {
            //     datum += `?${key}=${options.data[key]}`;
            // }
            xhr.open(method, options.url);
            xhr.send();
        } else {
            const formData = new FormData();
            for (key in options.data) {
                formData.append(key, options.data[key]);
            }
            xhr.open(method, options.url);
            xhr.send(formData);
        }
    } catch (e) {
        options.callback('error');
    }

    xhr.onload = () => {
        options.callback(null, xhr.response);
    }
};
