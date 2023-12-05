import { useEffect } from "react"
import { Input, Button } from "Ui-Kit"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { login as signIn } from "Features"
import { useNavigate } from "react-router-dom"

import "../Auth.css"

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state)=> state.auth)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect(()=>{
    if (isAuthenticated) {
       navigate('/');
    } 
  }, [isAuthenticated, navigate])
  
  const onSubmit = async (dataLogin) => {
    await dispatch(signIn(dataLogin)) 

  }

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

      <Button type="submit" name="Войти"/>
    </form>
  )
}