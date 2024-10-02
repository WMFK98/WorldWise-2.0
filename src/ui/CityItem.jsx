import React from 'react';
import styles from './CityItem.module.css';
import { Link } from 'react-router-dom';
import useDeleteReview from '../hooks/useDeleteReview';
import Spinner from './Spinner';
export default function CityItem({ city }) {
  const { city: cityName, emoji, createAt, id, lat, lng } = city;
  // const { currentCity, deleteCity, isLoading } = useCities();
  const { deleteReview, isLoading } = useDeleteReview();
  console.log(createAt);
  const formatDate = (date) =>
    new Intl.DateTimeFormat('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    }).format(new Date(date));

  async function handleDeleteCity(e) {
    e.preventDefault();
    deleteReview(id);
  }

  if (isLoading) return <Spinner />;

  return (
    // currentCity.id === id && styles['cityItem--active']
    <li>
      <Link
        className={`${styles.cityItem} ${''}`}
        to={`/app/cities/${id}?lat=${lat}&lng=${lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.name}>{cityName}</span>
        <time className={styles.date}>{createAt}</time>
        <button onClick={handleDeleteCity} className={styles.deleteBtn}>
          &times;
        </button>
      </Link>
    </li>
  );
}
