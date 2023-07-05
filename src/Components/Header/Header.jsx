
import Navigation from "./Navigation/Navigation";
import Top from "./Top/Top";

const Header = ({ list }) => {
    return (
        <header>
            <Top />
            <Navigation list={list} />
        </header>
    )
};


export default Header;