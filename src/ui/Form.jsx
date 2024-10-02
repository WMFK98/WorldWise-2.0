// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Form.module.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import useUrlPostion from '../hooks/useUrlPostion';
import Message from './Message';
import Spinner from './Spinner';
import DatePicker from 'react-datepicker';
import { useCities } from '../contexts/CitiesContext';
import useSerchAddress from '../hooks/useSerchAddress';
import useCreateReview from '../hooks/useCreateReview';
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [isGeoLocationLoading, setIsGegoLocationLoading] = useState(false);
  // const { createCity } = useCities();
  const [lat, lng] = useUrlPostion();

  const [cityName, setCityName] = useState('');
  const [emoji, setEmoji] = useState();
  const [country, setCountry] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [geocodingError, setGeocodingError] = useState('');
  const navigate = useNavigate();
  const { data, serchAddress } = useSerchAddress();
  const { createReview } = useCreateReview();

  useEffect(() => {
    console.log(lat, lng);
    if (!lat && !lng) return;
    (async () => {
      try {
        setGeocodingError('');
        setIsGegoLocationLoading(true);
        serchAddress({ lat, lng });
        if (!data.countryCode)
          throw new Error(
            "That doesn't seem to be a city. Click somewhere else 💀"
          );
        setCityName(data.city || data.locality || '');
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      } catch (error) {
        setGeocodingError(error.message);
      } finally {
        setIsGegoLocationLoading(false);
      }
    })();
  }, [lat, lng, serchAddress]);

  async function handleSubmit() {
    if (!cityName & !date) return;
    const newCity = {
      city: cityName,
      country,
      emoji,
      vistDate: date,
      notes,
      lat,
      lng,
    };

    createReview(newCity);
    navigate('/app/cities');
  }
  if (isGeoLocationLoading) return <Spinner />;
  if (geocodingError) return <Message message={geocodingError} />;
  if (!lat && !lng)
    return <Message message="Strat by clicking somewhere on the map" />;
  return (
    <div className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
        />
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button onClick={handleSubmit} type={'primary'}>
          Add
        </Button>
        <Button onClick={() => navigate(-1)} type={'back'}>
          &larr; Back
        </Button>
      </div>
    </div>
  );
}

export default Form;
