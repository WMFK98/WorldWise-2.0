import { useMutation } from '@tanstack/react-query';
import { getAddress } from '../services/apiMap';

export default function useSerchAddress() {
  const { data, isLoading, mutate, error } = useMutation({
    queryKey: ['curAdress'],
    mutationFn: (postion) => getAddress(postion.lat, postion.lng),
  });
  return { isLoading, data, error, serchAddress: mutate };
}
