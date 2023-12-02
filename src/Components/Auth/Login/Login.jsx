import { Input } from "Ui-Kit"
import { Button } from "Ui-Kit"

import "../Auth.css"

export const Login = () => {
  return (
    <form className="Auth__Form">
      <Input label="Логин" type="text" autoComplete="username"/>
      <Input label="Пароль" type="password" autoComplete="current-password"/>
      <Button name="Войти"/>
    </form>
  )
}