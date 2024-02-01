import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCats, fetchMoreCats } from '../../store/thunks/catsThunk';
import CatList from '../../components/catList/CatList';
import Spinner from '../../components/spinner/Spinner';
import styles from './home.module.css';

export default function Home() {
  const dispatch = useDispatch();
  const { cats, loadingStatus, error } = useSelector((state) => state.cats);
  const [loadMore, setLoadMore] = useState(false);

  const handleScroll = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setLoadMore(true);
    } else {
      setLoadMore(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return function () {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (cats.length === 0) {
      dispatch(fetchCats());
    }
    if (loadMore) {
      dispatch(fetchMoreCats());
    }
  }, [loadMore, dispatch]);

  return (
    <main>
      {loadingStatus === 'loading' ? (
        <Spinner />
      ) : (
        <>
          <CatList cats={cats} />
          <button className={styles.loadMore}>
            ... загружаем еще котиков ...
          </button>
        </>
      )}
      {error && <p className={styles.error}>Ошибка сети</p>}
    </main>
  );
}
