import cn from 'classnames';
import s from './Main.module.scss';
const Main = ({ children }) => {
    return (
        <div className={cn(s.main)}> {children}</div >
    )

}

export default Main;