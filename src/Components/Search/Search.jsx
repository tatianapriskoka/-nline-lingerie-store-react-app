import { useSelector } from 'react-redux';
import Container from '../Layout/Container/Container';
import s from './Search.module.scss';

const Search = () => {
    const { openSearch } = useSelector(state => state.search);
    return (
        openSearch && <div className={s.seacrh}>
            <Container>
                <form className={s.form}>
                    <input className={s.input} type="search" name='search' placeholder='Найти ...' />

                    <button className={s.btn} type='submit'>Искать</button>
                </form>
            </Container>
        </div>
    )
}

export default Search;