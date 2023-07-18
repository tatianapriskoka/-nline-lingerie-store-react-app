import { useDispatch, useSelector } from "react-redux";
import Goods from "../Goods/Goods";
import { useEffect } from "react";
import { fetchCategory } from "../../features/genderSlice";

const FavoritePage = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);


    useEffect(() => {
        if (favorites) {
            dispatch(fetchCategory({ list: favorites }))
        }

    }, [favorites, dispatch]);


    return (
        <Goods title='Избранное' />
    )
}

export default FavoritePage;