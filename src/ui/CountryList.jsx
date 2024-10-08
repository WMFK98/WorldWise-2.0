import React from 'react';
import styles from './CountryList.module.css';
import Spinner from './Spinner';
import Message from './Message';
import CountryItem from './CountryItem';
import useReviews from '../hooks/useReviews';

export default function CountryList() {
  const { data: cities, isLoading } = useReviews();
  if (isLoading) return <Spinner />;
  const counties = cities.reduce((cur, { country, emoji }) => {
    if (cur.some((curCountry) => curCountry.country === country)) return cur;
    return [...cur, { country, emoji }];
  }, []);
  if (!cities.length)
    return (
      <Message
        message={'Add your first city by clicking on a city on the map'}
      />
    );
  return (
    <ul className={styles.countryList}>
      {counties.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}
