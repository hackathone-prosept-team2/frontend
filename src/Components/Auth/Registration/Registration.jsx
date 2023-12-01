import { Input } from "Ui-Kit"

export const Registration = () => {


    return (
        <form className="Auth__Form">
            <Input label="Логин" type="text" />
            <Input label="Пароль" type="password" />
        </form>
    )
}