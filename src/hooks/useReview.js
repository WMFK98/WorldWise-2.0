import { useMutation, useQuery } from '@tanstack/react-query';
import { getReview } from '../services/apiReview';

export default function useReview(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['currentReview', id],
    queryFn: () => getReview(id),
  });
  return { isLoading, data, error };
}
