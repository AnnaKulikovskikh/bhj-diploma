/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const method = (options.method);
    const xhr = new XMLHttpRequest();
    try {
        if (method == 'GET') {
            xhr.open(method,`${options.url}?mail=${options.data.mail}&password=${options.data.password}`);
            xhr.responseType = 'json';
            xhr.send();
        } else {
            const formData = new FormData();
            xhr.open(method,options.url);
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