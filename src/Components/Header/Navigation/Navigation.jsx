import Category from "./Category/Category";
import Gender from "./Gender/Gender";
import Container from "../../Layout/Container/Container";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setActiveGender } from "../../../features/navigationSlice.js";

const Navigation = ({ list }) => {
    const location = useLocation();

    const dispatch = useDispatch();
    const gender = location.pathname.split('/')[1] || 'women';
    useEffect(() => {

        dispatch(setActiveGender(gender));
    }, [gender, dispatch])

    return (
        <nav>
            <Container>
                <Gender list={list} />
                <Category list={list} />
            </Container>
        </nav>
    )
};

export default Navigation;