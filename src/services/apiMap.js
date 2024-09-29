import axios from 'axios';

export async function getAddress(lat, lng) {
  let { data, status } = await axios.get(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  );

  if (status !== 200) {
    console.error(error);
    throw new Error('something went wrong');
  }

  return data;
}
