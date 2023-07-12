import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const Error = useRouteError();

    return (
        <div>
            <h2>Error 404</h2>
            <p>{Error?.message || 'Неизвестная ошибка'}</p>
        </div>
    )

}

export default ErrorPage;