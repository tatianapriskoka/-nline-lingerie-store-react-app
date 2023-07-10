import { useParams } from "react-router-dom";
import Container from "../Layout/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGoods } from "../../features/genderSlice";
import s from './MainPage.module.scss';

const MainPage = ({ gender = 'women' }) => {

    const { category } = useParams();
    const dispatch = useDispatch();
    const { goodsList } = useSelector(state => state.goods);

    useEffect(() => {
        dispatch(fetchGoods(gender))
    }, [gender, dispatch]);
    return (
        <section className={s.goods}>
            <Container>
                <h2 className={s.title}>{gender}</h2>
                <ul className={s.list}>
                    {goodsList.map(item => <Product key={item.id} />)}
                </ul>
            </Container>
        </section>


    )


}

export default MainPage;