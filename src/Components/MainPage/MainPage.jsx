import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategory, fetchGender } from "../../features/genderSlice";
import { setActiveGender } from "../../features/navigationSlice";

import Banner from "../Banner/Banner";
import Goods from "../Goods/Goods";

const MainPage = () => {
    const { gender = 'women', category } = useParams();
    const dispatch = useDispatch();
    const { activeGender, categories, genderList } = useSelector(state => state.navigation);
    const genderData = categories[activeGender];
    const categoryData = genderData?.list.find((item) => item.slug === category);
    useEffect(() => {
        if (gender) {
            dispatch(setActiveGender(gender))
        } else if (genderList[0]) {
            dispatch(setActiveGender(genderList[0]))
            dispatch(fetchGender({ gender, category }))
        }

    }, [gender, genderList, dispatch]);

    useEffect(() => {
        if (gender && category) {
            dispatch(fetchCategory({ gender, category }))
            return;
        }
        if (gender) {
            dispatch(fetchGender(gender));
            return;
        }

    }, [gender, category, dispatch]);
    return (
        <>
            {!category && <Banner data={genderData?.banner} />}
            <Goods categoryData={categoryData} />
        </>
    )


}

export default MainPage;