/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
 //const createRequest = ({callback, data, method, responseType, url} = {} ) => {
 const createRequest = (options = {}) => {  
    const method = options.method; 
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    let url = options.url;

    // if (method == 'GET') {
    //     for (key in options.data) {
    //         url += `?${key}=${options.data[key]}`;
    //     }
    // } else {
    //     let formData = new FormData();
    //     for (key in options.data) {
    //         formData.append(key, options.data[key]);
    //     }
    // }

    // try {
    //     xhr.open(method, url);
    //     xhr.send(formData);
    // } catch (e) {
    //     options.callback('error');
    // }

    try {
        if (method == 'GET') {
            for (key in options.data) {
                url += `?${key}=${options.data[key]}`;
            }
            xhr.open(method, url);
            xhr.send();
        } else {
            let formData = new FormData();
            for (key in options.data) {
                formData.append(key, options.data[key]);
            }
            xhr.open(method, url);
            xhr.send(formData);
        }
    } catch (e) {
        options.callback('error');
    }

    xhr.onload = () => {
        options.callback(null, xhr.response);
    }
};
