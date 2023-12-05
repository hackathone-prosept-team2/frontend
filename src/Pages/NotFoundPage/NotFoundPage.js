import {useChangeTitle} from "Hooks"
import {useNavigate} from 'react-router-dom';

const NotFoundPage = ({title = "Ошибка 404"}) => {
  useChangeTitle(title)
  const navigate = useNavigate();

  function openThePreviousPage() {
    navigate(-1);
  }

  return (
    <section className="not-found">
      <h2 className="not-found__title">
        404
      </h2>
      <p className="not-found__text">
        Страница не найдена
      </p>
      <button
        className="not-found__button"
        type="button"
        aria-label="back"
        onClick={openThePreviousPage}>
        Назад
      </button>
    </section>
  )
}

export default NotFoundPage
