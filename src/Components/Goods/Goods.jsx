import { useSelector } from "react-redux";
import s from './MainPage.module.scss';
import Product from '../Product/Product'
import Container from "../Layout/Container/Container";
import Pagination from "../Pagination/Pagination";
import { Preloader } from "../Preloader/Preloader";

const Goods = ({ title }) => {
    const { goodsList, totalCount, status } = useSelector(state => state.goods);

    return (
        <section className={s.goods}>
            <Container >
                <h2 className={s.title}>
                    {title ?? 'Новинки'}
                    {totalCount && <sup>&nbsp;({totalCount})</sup>}
                </h2>

                {status === 'loading' ? (
                    <Preloader />
                ) : (
                    <>
                        <ul className={s.list}>
                            {goodsList.map(item => <li key={item.id}>
                                <Product {...item} />
                            </li>)}
                        </ul>
                        <Pagination />
                    </>)}

            </Container>
        </section>
    )
}

export default Goods;