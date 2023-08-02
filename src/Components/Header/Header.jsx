
import Navigation from "./Navigation/Navigation";
import Top from "./Top/Top";
import s from './Header.module.scss';
import Search from "../Search/Search";
import { useState } from "react";


const Header = () => {


    return (
        <header className={s.header}>
            <Top />
            <Search />
            <Navigation />
        </header>
    )
};


export default Header;