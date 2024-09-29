import React from 'react';
import styles from './CityList.module.css';
import Spinner from './Spinner';
import CityItem from './CityItem';
import Message from './Message';
import useReviews from '../hooks/useReviews';

export default function CityList() {
  const { isLoading, data: cities } = useReviews();
  if (isLoading) return <Spinner />;
  console.log(cities);
  if (!cities.length)
    return (
      <Message
        message={'Add your first city by clicking on a city on the map'}
      />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
