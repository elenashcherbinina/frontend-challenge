import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCats, fetchMoreCats } from '../../store/thunks/catsThunk';
import CatList from '../../components/catList/CatList';
import Spinner from '../../components/spinner/Spinner';
import styles from './home.module.css';

export default function Home() {
  const { cats, loadingStatus, error } = useSelector((state) => state.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    cats.length === 0 && dispatch(fetchCats());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchMoreCats());
  };

  return (
    <main>
      {loadingStatus === 'loading' ? (
        <Spinner />
      ) : (
        <>
          <CatList cats={cats} />
          <button onClick={handleLoadMore} className={styles.loadMore}>
            ... загружаем еще котиков ...
          </button>
        </>
      )}
      {error && <p className={styles.error}>Ошибка сети</p>}
    </main>
  );
}
