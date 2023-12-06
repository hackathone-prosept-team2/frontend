import { Registration } from "./Registration/Registration"
import { Login } from "./Login/Login"

import "./Auth.css"

const Auth = ({ type }) => {
    const titleForm = type === "login" ? "Авторизоваться" : "Зарегистрироваться"
    return (
        <div className="Auth">
            <h1 className="Auth__Title">{titleForm}</h1>
            {
                type && type === "login" 
                ? <Login />
                : <Registration />
            }
            
        </div>
    )
}

export default Auth