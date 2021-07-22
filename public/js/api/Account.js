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
    createRequest({
      url,
      data: {id: id},
      responseType: 'json',
      method: 'DELETE',
      callback
    });
  }
}
