import {Input, Button} from "Ui-Kit"

import "../Auth.css"

export const Registration = () => {

  return (
    <form className="Auth__Form">
      <Input label="Логин" type="text"/>
      <Input label="Пароль" type="password"/>
      <Button name="Зарегистрироваться"/>
    </form>
  )
}