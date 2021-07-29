/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const method = (options.method);
    const xhr = new XMLHttpRequest();
    try {
        if (method == 'GET') {
            //xhr.open(method,`${options.url}?email=${options.data.email}?password=${options.data.password}`);
            const datum = options.url;
            for (key in options.data) {
                datum += `?${key}=${options.data[key]}`;
              }
            xhr.open(method, datum);
            xhr.responseType = 'json';
            xhr.send();
        } else {
            const formData = new FormData();
            for (key in options.data) {
                formData.append(key, options.data[key]);
            }
            xhr.open(method, options.url);
            xhr.responseType = 'json';
            xhr.send(formData);
        }
    } catch (e) {
        options.callback.err = e;
    }

    xhr.onload = () => {
        options.callback.response = xhr.response;
    };
}