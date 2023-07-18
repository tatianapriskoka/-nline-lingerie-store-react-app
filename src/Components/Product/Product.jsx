import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const';

import s from './Product.module.scss';
import ColorList from '../ColorList/ColorList';
import BtnLike from '../BtnLike/BtnLike';
const Product = ({ id, pic, title, price, colors }) => {
    return (
        <article className={s.product}>
            <NavLink className={s.link} to={`/product/${id}`}>
                <img className={s.image} src={`${API_URL}/${pic}`} alt={title} />
                <h3 className={s.title}>{title}</h3>
            </NavLink>
            <div className={s.row}>
                <p className={s.price}>руб {price}</p>


                <BtnLike id={id} />

            </div>

            <ColorList colors={colors} />
        </article >
    )
}

export default Product;