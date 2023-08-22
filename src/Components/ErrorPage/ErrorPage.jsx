import { useLocation, useNavigate, useRouteError } from "react-router-dom";
import s from "./ErrorPage.module.scss";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNavigation } from '../../features/navigationSlice.js';
import { fetchColors } from '../../features/colorSlice.js';

const ErrorPage = () => {
    const routeError = useRouteError();
    const { status } = useSelector(state => state.statusServer);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const timeIdRef = useRef(null);

    useEffect(() => {
        if (status && location.pathname !== '/404') {
            navigate('/')
        }
    }, [navigate, status, location])

    useEffect(() => {
        if (!status && location.pathname === '/404') {
            clearInterval(timeIdRef.current);

            timeIdRef.current = setInterval(() => {
                dispatch(fetchColors())
                dispatch(fetchNavigation())
            }, 3000)
        }

        return () => {
            clearInterval(timeIdRef.current);
        }
    }, [dispatch, status, location])

    return (
        <div className={s.error}>
            <h2 className={s.title}>Произошла ошибка, попробуйте зайти позже</h2>
            <p className={s.message}>{Error?.message || 'Неизвестная ошибка'}</p>
        </div>
    )

}

export default ErrorPage;