import { useChangeTitle } from "Hooks"

const NotFoundPage = ({ title="Ошибка 404" }) => {
    useChangeTitle(title)
    return(<>Страница не найдена</>)
}

export default NotFoundPage