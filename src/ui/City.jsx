import { useNavigate, useParams } from 'react-router-dom';
import styles from './City.module.css';
import { useCities } from '../contexts/CitiesContext';
import { useEffect } from 'react';
import Button from './Button';
import Spinner from './Spinner';
import useReview from '../hooks/useReview';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, data } = useReview(id);

  // const { getCity, currentCity, isLoading } = useCities();
  // useEffect(() => {
  //   getCity(id);
  // }, [id, getCity]);
  if (isLoading) return <Spinner />;
  console.log(data);
  const { city, emoji, date, notes } = data;
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {city}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {city} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${city}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {city} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <Button type="back" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
}

export default City;
