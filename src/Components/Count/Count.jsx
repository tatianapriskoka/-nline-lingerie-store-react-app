import cn from 'classnames';
import s from './Count.module.scss';

const Count = ({ count, handleIncrement, handleDecrement, className }) => {
    return (
        <div className={cn(s.count, className)}>
            <button className={s.item} type='button' onClick={handleDecrement}>-</button>
            <span className={cn(s.item, s.number)}>{count}</span>
            <button className={s.item} type='button' onClick={handleIncrement}>+</button>
        </div>
    )
}

export default Count;