/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const body = document.querySelector(".skin-blue");
    const btn = document.querySelector(".sidebar-toggle");
    btn.onclick = function(){
      body.classList.toggle('sidebar-open');
      body.classList.toggle('sidebar-collapse');
    }
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const menuItem = document.querySelectorAll('.menu-item');
    menuItem.forEach((item) => {
      item.addEventListener('click', function(){
        if (this.classList.contains('menu-item_login')) {
          App.getModal('login').open();
        }
        if (this.classList.contains('menu-item_register')) {
          App.getModal('register').open();
        }if (this.classList.contains('menu-item_logout')) {
          User.logout((err, response) => {
            if (err === null) {
              App.setState( 'init');
            } else {
              console.log(err);
            }
          });  
        } 
      });
    });
  }
}