import { useDispatch, useSelector } from "react-redux";
import Goods from "../Goods/Goods";
import { useEffect } from "react";
import { fetchCategory } from "../../features/genderSlice";
import { usePageFromSearchParams } from "../../hooks/usePageFromSeachParams";

const FavoritePage = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const page = usePageFromSearchParams(dispatch);

    useEffect(() => {
        if (favorites) {
            const param = { list: favorites };
            if (page) {
                param.page = page;
            }
            dispatch(fetchCategory(param));
        }
    }, [favorites, page, dispatch]);

    return favorites.length ? (
        <Goods title="Избранное" />
    ) : (
        <h3 className={s.empty}>Вы ничего не добавили в избранное</h3>
    );
}



export default FavoritePage;