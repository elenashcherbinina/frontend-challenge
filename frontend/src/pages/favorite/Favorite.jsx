import { useSelector } from 'react-redux';
import CatList from '../../components/catList/CatList';

export default function Favorite() {
  const { cats } = useSelector((state) => state.cats);
  const favoritesIds = localStorage.getItem('favorites');
  const favoriteCats = cats.filter((cat) => favoritesIds.includes(cat.id));

  return (
    <main>
      <CatList cats={favoriteCats} />
    </main>
  );
}
