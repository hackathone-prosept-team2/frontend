import {Input} from "Ui-Kit"
import { Button } from "Ui-Kit"

export const Registration = () => {

  return (
    <form className="Auth__Form">
      <Input label="Логин" type="text"/>
      <Input label="Пароль" type="password"/>
      <Button name="Зарегистрироваться"/>
    </form>
  )
}