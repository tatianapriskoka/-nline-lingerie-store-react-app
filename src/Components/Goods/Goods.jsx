import { useSelector } from "react-redux";
import s from './MainPage.module.scss';
import Product from '../Product/Product'
import Container from "../Layout/Container/Container";

const Goods = ({ title }) => {
    const { goodsList } = useSelector(state => state.goods);

    return (
        <section className={s.goods}>
            <Container >
                <h2 className={s.title}>{title ?? 'Новинки'}</h2>
                <ul className={s.list}>
                    {goodsList.map(item => <li key={item.id}>
                        <Product {...item} />
                    </li>)}
                </ul>
            </Container>
        </section>
    )
}

export default Goods;