import {Input, Button} from "Ui-Kit"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { signUp } from "Features"

import "../Auth.css"

export const Registration = () => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (registrationData) => await dispatch(signUp(registrationData))

  return (
    <form className="Auth__Form" onSubmit={handleSubmit(onSubmit)}>
      <Input 
        label="Логин" 
        type="text" 
        autoComplete="username"
        register={{...register("email")}}
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