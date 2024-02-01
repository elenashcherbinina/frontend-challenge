import { useState } from 'react';
import favoriteIcon from '../../assets/favorite_border.svg';
import styles from './catList.module.css';

export default function CatList({ cats }) {
  const [storageItem, setStorageItem] = useState(() =>
    JSON.parse(localStorage.getItem('favorites') || '[]'),
  );


  const handleToggleFavourite = (id) => {
    const isFavourited = storageItem.includes(id);

    if (!isFavourited) {
      const newStorageItem = [...storageItem, id];
      setStorageItem(newStorageItem);
      localStorage.setItem('favorites', JSON.stringify(newStorageItem));
    } else {
      const newStorageItem = storageItem.filter((savedId) => savedId !== id);
      setStorageItem(newStorageItem);
      localStorage.setItem('favorites', JSON.stringify(newStorageItem));
    }
  };

  return (
    <div className={styles.list}>
      {cats.length > 0 &&
        cats.map((cat) => (
          <div key={cat.id} className={styles.item}>
            <img className={styles.image} src={cat.url} alt='cat-image' />
            <img
              onClick={() => handleToggleFavourite(cat.id)}
              className={
                storageItem.includes(cat.id) ? styles.checked : styles.icon
              }
              src={favoriteIcon}
              alt='favorite-icon'
            />
          </div>
        ))}
    </div>
  );
}
