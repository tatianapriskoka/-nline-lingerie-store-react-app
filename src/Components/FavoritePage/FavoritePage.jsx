import { useDispatch, useSelector } from "react-redux";
import Goods from "../Goods/Goods";
import { useEffect } from "react";
import { fetchCategory } from "../../features/genderSlice";
import { usePageFromSearchParams } from "../../hooks/usePageFromSeachParams";

const FavoritePage = () => {
    const dispatch = useDispatch();

    const favorites = useSelector(state => state.favorites);
    const page = usePageFromSearchParams(dispatch);
    console.log('page', page);

    useEffect(() => {
        const param = { list: favorites };
        if (page) {
            param.page = page;
        }

        if (favorites) {
            dispatch(fetchCategory(param))
        }

    }, [favorites, dispatch, page]);


    return (
        <Goods title='Избранное' />
    )
}



export default FavoritePage;