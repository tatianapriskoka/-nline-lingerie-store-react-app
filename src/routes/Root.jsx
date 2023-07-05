import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Main from "../Components/Layout/Main/Main";
import Footer from "../Components/Footer/Footer";
const list = [
    {
        link: 'women', title: 'женщины', categories: [{
            link: 'bras', title: 'Бюстгальтеры'
        },
        { link: 'panties', title: 'Трусы' },
        { link: 'socks', title: 'Носки' },
        { link: 'bathrobes', title: 'Халаты' },
        { link: 'thermal', title: 'Термобелье' },
        { link: 'pijamas', title: 'Пижамы' }

        ]
    },
    {
        link: 'men', title: 'мужчины', categories: [
            { link: 'panties', title: 'Трусы' },
            { link: 'socks', title: 'Носки' },
            { link: 'bathrobes', title: 'Халаты' },
            { link: 'thermal', title: 'Термобелье' },
        ]
    }
]
const Root = () => {
    return (
        <>
            <Header list={list} />
            <Main>
                <Outlet />
            </Main>
            <Footer list={list} />
        </>
    )
}

export default Root;