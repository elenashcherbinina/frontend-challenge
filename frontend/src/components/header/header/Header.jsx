import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <button onClick={() => navigate('/')} className={styles.all} href='/'>
        Все котики
      </button>
      <button
        onClick={() => navigate('/favorite')}
        className={styles.favorite}
        href='/favorite'
      >
        Любимые котики
      </button>
    </nav>
  );
}
