import Category from "./Category/Category";
import Gender from "./Gender/Gender";

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <Gender />
                <Category />
            </div>

        </nav>
    )
};

export default Navigation;