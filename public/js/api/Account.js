/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
  static url = '/account';
  /**
   * Получает информацию о счёте
   * */
  static get(id = '', callback){
    let urlGet = `${url}/${id}`;
    createRequest({
      urlGet,
      data: {id: id},
      responseType: 'json',
      method: 'GET',
      callback
    });
  }
}
