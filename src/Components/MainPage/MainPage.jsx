import { useParams } from "react-router-dom";
import Container from "../Layout/Container/Container";


const MainPage = ({ gender = 'woman' }) => {

    const { category } = useParams();
    return (
        <Container>
            <div>{gender}</div>
            {category && <p>Категория: {category}</p>}
        </Container>

    )


}

export default MainPage;