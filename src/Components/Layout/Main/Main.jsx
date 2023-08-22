import cn from 'classnames';
import s from './Main.module.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const Main = ({ children }) => {

    const { status } = useSelector(state => state.statusServer);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!status && location.pathname !== '/404') {
            navigate('/404')
        }
    })

    return (
        <div className={cn(s.main)}> {children}</div >
    )

}

export default Main;