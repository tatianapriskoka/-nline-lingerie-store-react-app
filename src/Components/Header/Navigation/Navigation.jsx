import Category from "./Category/Category";
import Gender from "./Gender/Gender";
import Container from "../../Layout/Container/Container";


const Navigation = () => {


    return (
        <nav >
            <Container>
                <Gender />
                <Category />
            </Container>
        </nav>
    )
};

export default Navigation;