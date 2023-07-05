import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const Error = useRouteError();

    return (
        <div>
            <h2>Error 404</h2>
            <p>{error?.message || 'Неизвестная ошибка'}</p>
        </div>
    )

}

export default ErrorPage;