/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element);
    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    const accounts = this.element.querySelector('.accounts-select');
    Array.from(accounts).forEach(el => el.remove());
    Account.list(JSON.stringify(User.current()), (err, response) => {
      if (response) {
        response.data.forEach(el => {
          const els = `<option value=${el.id}>${el.name}</option>`;
          accounts.insertAdjacentHTML('beforeend', els);
        });
      }
    });    
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    Transaction.create(data, (err, response) => {
      if (response.success) {
        this.element.reset();
        if (this.element.id === 'new-expense-form') {
          App.getModal('newExpense').close();
        } else {
          App.getModal('newIncome').close();
        }
        App.update();
      }
    });
  }
}
