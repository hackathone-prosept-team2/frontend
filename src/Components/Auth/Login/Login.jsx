import { Input, Button } from "Ui-Kit"
import { useForm } from "react-hook-form"

import "../Auth.css"

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <form className="Auth__Form" onSubmit={handleSubmit(onSubmit)}>
      <Input 
        label="Логин" 
        type="text" 
        autoComplete="username"
        register={{...register("login")}}
      />

      <Input 
        label="Пароль" 
        type="password" 
        autoComplete="current-password"
        register={{...register("password")}}
      />

      <Button type="submit" name="Войти"/>
    </form>
  )
}