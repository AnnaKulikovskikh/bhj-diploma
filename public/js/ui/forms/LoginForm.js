/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    document.getElementById('login-form').reset();
    User.login(data, (err, response) => {
      if (response.success) {
        App.setState('user-logged');
        App.getModal('login').close();
      } else {
        console.log(err);
      }
    });  
  }  
}
