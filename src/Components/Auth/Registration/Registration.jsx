import {Input, Button} from "Ui-Kit"
import { useForm } from "react-hook-form"

import "../Auth.css"

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (registrationData) => console.log(registrationData)

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

      <Button type="submit" name="Зарегистрироваться" />
    </form>
  )
}